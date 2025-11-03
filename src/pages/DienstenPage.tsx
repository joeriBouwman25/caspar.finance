import { useEffect, useState } from "react";
import { serviceItems } from "../constants/serviceItems";
import { Heading } from "../components/ui/Heading";

// Helper to create URL-friendly ids for anchor navigation
const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const DienstenPage = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const articles = Array.from(
      document.querySelectorAll<HTMLElement>("[data-service-article]"),
    );
    if (!articles.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.25, 0.4, 0.6] },
    );

    articles.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const renderContent = (content: (string | string[])[]) =>
    content.map((item, index) =>
      Array.isArray(item) ? (
        <ul key={index} className="mt-6 space-y-2 list-none pl-0">
          {item.map((li, i) => (
            <li
              key={i}
              className="relative pl-5 text-gray-300 leading-relaxed before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary-500 before:from-primary-400 before:to-primary-300 before:shadow-[0_0_0_3px_rgba(255,255,255,0.05)] before:transition"
            >
              {li}
            </li>
          ))}
        </ul>
      ) : (
        <p key={index} className="mt-4 text-gray-300 leading-relaxed">
          {item}
        </p>
      ),
    );

  const handleChipClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 96; // matches fixed header height (h-24)
    const y =
      el.getBoundingClientRect().top + window.scrollY - headerOffset - 8; // extra small spacing
    window.scrollTo({ top: y, behavior: "smooth" });
    // update hash without jumping
    if (history.replaceState) {
      history.replaceState(null, "", `#${id}`);
    } else {
      window.location.hash = id;
    }
  };

  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 text-gray-200">
      <div className="max-w-3xl">
        <Heading title="Kunnen we u helpen?" />
        <p className="text-lg leading-relaxed text-gray-300">
          Caspar Finance is een administratiekantoor in Naarden. Wij kunnen voor
          u de administratie verzorgen en adviezen geven over de administratie.
          Onze diensten bestaan onder andere uit:
        </p>
      </div>

      <nav aria-label="Diensten overzicht" className="mt-12">
        <ul className="flex flex-wrap gap-3 sm:gap-4 pb-2">
          {serviceItems.map((s) => {
            const id = slugify(s.title);
            const active = activeId === id;
            return (
              <li key={id} className="flex">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleChipClick(e, id)}
                  aria-current={active ? "true" : undefined}
                  data-active={active || undefined}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-base font-medium tracking-wide text-gray-300 hover:text-primary-200 hover:border-primary-400/40 hover:bg-primary-500/10 transition data-[active]:text-primary-100 data-[active]:border-primary-400/60 data-[active]:bg-primary-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-16 space-y-20">
        {serviceItems.map((service) => {
          const id = slugify(service.title);
          return (
            <article
              key={service.title}
              id={id}
              className="group relative overflow-hidden scroll-mt-32 rounded-3xl ring-1 ring-white/10 bg-white/[0.035] p-8 md:p-12 shadow-sm transition duration-400 hover:shadow-md hover:ring-primary-400/40 hover:bg-white/[0.06]"
            >
              <header className="relative">
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-primary-400">
                  {service.title}
                </h2>
                <span className="mt-4 block h-1 w-24 rounded-full bg-primary-500" />
                <div className="mt-6 ttext-base space-y-6 max-w-3xl">
                  {renderContent(service.content)}
                </div>
              </header>

              <span
                aria-hidden
                className="pointer-events-none absolute left-8 right-8 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent group-hover:via-primary-300/60 transition"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
