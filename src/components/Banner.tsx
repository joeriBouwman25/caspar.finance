import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { NavLink, useNavigate } from "react-router";

// Assets
import multiImg from "../assets/multi.jpg";
import notesImg from "../assets/notes.jpg";
import papierImg from "../assets/homepagina banner.jpg";

interface Slide {
  src: string;
  alt: string;
  text: React.ReactNode;
  button: { href: string; label: string };
}

const SLIDES: Slide[] = [
  {
    src: multiImg,
    alt: "Financiële diensten overzicht",
    text: (
      <>
        Bent u benieuwd welke financieele diensten{" "}
        <NavLink
          to="/diensten"
          className="underline decoration-primary-400 hover:text-primary-300 transition-colors"
        >
          Caspar Finance
        </NavLink>{" "}
        biedt?
      </>
    ),
    button: { href: "/diensten", label: "Diensten" },
  },
  {
    src: notesImg,
    alt: "Notities voor financieel advies",
    text: (
      <>
        Vragen over uw{" "}
        <NavLink
          to="/contact"
          className="underline decoration-primary-400 hover:text-primary-300 transition-colors"
        >
          boekhouding
        </NavLink>
        ? Neem dan direct contact met ons op.
      </>
    ),
    button: { href: "/contact", label: "Contact" },
  },
  {
    src: papierImg,
    alt: "Papieren met tarieven",
    text: (
      <>
        Meer weten over onze{" "}
        <NavLink
          to="/werkwijze"
          className="underline decoration-primary-400 hover:text-primary-300 transition-colors"
        >
          werkwijze
        </NavLink>
        ?
      </>
    ),
    button: { href: "/werkwijze", label: "Werkwijze" },
  },
];

interface BannerProps {
  autoAdvanceMs?: number;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export const Banner: React.FC<BannerProps> = ({ autoAdvanceMs = 5000 }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(performance.now());
  const rafRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Touch swipe refs
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchUsedRef = useRef(false); // to avoid double triggering

  const advance = useCallback(() => {
    setPrevIndex(index);
    setShowContent(false);
    setIndex((i) => (i + 1) % SLIDES.length);
  }, [index]);

  const goTo = (i: number) => {
    if (i === index) return;
    setPrevIndex(index);
    setShowContent(false);
    setIndex(i);
  };

  const handleNext = () => goTo((index + 1) % SLIDES.length);
  const handlePrev = () => goTo((index - 1 + SLIDES.length) % SLIDES.length);

  // Touch handlers for mobile swipe
  const SWIPE_THRESHOLD = 40; // px
  const handleTouchStart: React.TouchEventHandler<HTMLElement> = (e) => {
    if (SLIDES.length < 2) return;
    const t = e.touches[0];
    touchStartXRef.current = t.clientX;
    touchStartYRef.current = t.clientY;
    touchUsedRef.current = false;
    setPaused(true);
  };
  const handleTouchMove: React.TouchEventHandler<HTMLElement> = (e) => {
    if (touchStartXRef.current == null || touchStartYRef.current == null)
      return;
    const t = e.touches[0];
    const dx = t.clientX - touchStartXRef.current;
    const dy = t.clientY - touchStartYRef.current;
    // Ignore if vertical scroll is dominant
    if (Math.abs(dy) > Math.abs(dx)) return;
    if (touchUsedRef.current) return;
    if (dx > SWIPE_THRESHOLD) {
      touchUsedRef.current = true;
      handlePrev();
    } else if (dx < -SWIPE_THRESHOLD) {
      touchUsedRef.current = true;
      handleNext();
    }
  };
  const endTouch = () => {
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setPaused(false);
  };
  const handleTouchEnd: React.TouchEventHandler<HTMLElement> = () => endTouch();
  const handleTouchCancel: React.TouchEventHandler<HTMLElement> = () =>
    endTouch();

  // Auto progress
  useEffect(() => {
    if (paused || SLIDES.length < 2) return;
    startRef.current = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startRef.current;
      const pct = Math.min(1, elapsed / autoAdvanceMs);
      setProgress(pct);
      if (pct >= 1) {
        advance();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, paused, autoAdvanceMs, advance]);

  // Stagger content appearance
  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), reducedMotion ? 0 : 120);
    return () => clearTimeout(t);
  }, [index, reducedMotion]);

  // Preload next image
  useEffect(() => {
    const nextIdx = (index + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIdx].src;
  }, [index]);

  useLayoutEffect(() => {
    setProgress(0);
  }, [index]);

  const contentAnim =
    (reducedMotion
      ? ""
      : "transition-all duration-500 ease-[cubic-bezier(.16,.84,.44,1)] ") +
    (showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2");

  const slide = SLIDES[index];
  const prevSlide = prevIndex !== null ? SLIDES[prevIndex] : null;

  return (
    <section
      role="region"
      aria-label="Promotionele banner"
      tabIndex={0}
      className="relative group isolate overflow-hidden rounded-xl shadow-lg shadow-black/30 bg-neutral-950/70 text-white h-[42vh] md:h-[45vh] lg:h-[60vh] min-h-[19rem] flex"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      <div className="absolute inset-0 pointer-events-none">
        {prevSlide && (
          <img
            key={prevSlide.src + "-prev"}
            src={prevSlide.src}
            alt=""
            aria-hidden="true"
            className={
              "absolute inset-0 w-full h-full object-cover object-bottom" +
              (reducedMotion
                ? " opacity-0"
                : " opacity-0 transition-opacity duration-700 ease-[cubic-bezier(.4,0,.2,1)]")
            }
          />
        )}
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={
            "absolute inset-0 w-full h-full object-cover object-bottom" +
            (reducedMotion
              ? ""
              : " opacity-0 animate-[fadeIn_.9s_forwards_ease-out]")
          }
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-black/80 via-black/60 to-black/70" />
      </div>

      <article className="relative z-20 flex flex-col items-center justify-center w-full px-6 md:px-10 text-center">
        <p
          className={`${contentAnim} max-w-[38rem] font-light tracking-wide leading-relaxed text-[clamp(1rem,1.25vw+0.75rem,1.55rem)] drop-shadow-md`}
        >
          {slide.text}
        </p>
        <button
          type="button"
          aria-label={slide.button.label}
          className={`${contentAnim} delay-75 mt-6 inline-flex items-center justify-center rounded-full bg-primary-500/85 hover:bg-primary-400/90 active:scale-[0.96] px-9 h-14 text-[clamp(0.95rem,0.55vw+0.8rem,1.15rem)] font-medium shadow-md shadow-primary-500/25  focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/50 backdrop-blur-sm`}
          onClick={() => navigate(slide.button.href)}
        >
          {slide.button.label}
        </button>
      </article>

      {SLIDES.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Vorige"
            onClick={handlePrev}
            className="absolute z-30 left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/55 text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Volgende"
            onClick={handleNext}
            className="absolute z-30 right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 hover:bg-black/55 text-white backdrop-blur-sm shadow opacity-0 group-hover:opacity-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {SLIDES.length > 1 && (
        <div className="absolute z-30 bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                aria-label={`Ga naar slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  "h-3 w-3 rounded-full transition-all " +
                  (active
                    ? "bg-primary-400 ring-2 ring-primary-300/60 scale-110 shadow"
                    : "bg-white/35 hover:bg-white/60")
                }
                type="button"
              />
            );
          })}
        </div>
      )}

      {SLIDES.length > 1 && (
        <div className="absolute z-20 bottom-0 left-0 w-full h-1 bg-white/5 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-primary-400/80 transition-[width] duration-100 ease-linear"
            style={{ width: `${progress * 100}%` }}
            aria-hidden="true"
          />
        </div>
      )}
      <style>{`@keyframes fadeIn{to{opacity:1}}`}</style>
    </section>
  );
};
