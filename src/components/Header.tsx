import { NAV_ITEMS } from "../constants/navItems";
import { Nav } from "./ui/Nav";
import logo from "../assets/cf_logo_heading.png";
import { NavLink } from "react-router";
import { useIsBreakpoint } from "../hooks/useIsBreakpoint";
import { HamburgerMenu } from "./ui/HamburgerMenu";
import { useEffect, useState } from "react";

export const Header = () => {
  const isBreakpointMd = useIsBreakpoint("md");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8); // threshold
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 border-b border-white/10 backdrop-blur-sm transition-[height,background-color] duration-300 ease-out will-change-[height]",
        "bg-white/5 hover:bg-white/10",
        scrolled ? "h-12 md:h-16 hover:h-24" : "h-24",
      ].join(" ")}
    >
      <NavLink to="/" className="flex items-center select-none">
        <img
          src={logo}
          alt="logo_caspar_finance"
          className={[
            "w-auto object-contain transition-all duration-300",
            scrolled ? "h-10 md:h-12 hover:h-15" : "h-10 md:h-12",
          ].join(" ")}
          draggable={false}
        />
      </NavLink>
      {isBreakpointMd ? (
        <Nav navItems={NAV_ITEMS} />
      ) : (
        <HamburgerMenu navItems={NAV_ITEMS} />
      )}
    </header>
  );
};
