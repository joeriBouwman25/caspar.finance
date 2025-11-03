import { Nav } from "./Nav";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface HamburgerMenuProps {
  navItems: { label: string; href: string }[];
}
export const HamburgerMenu = ({ navItems }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <div className="relative">
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((o) => !o)}
        className={`flex items-center justify-center h-10 w-14 rounded border border-transparent focus:outline-none focus:ring-0 z-[110] relative transition-colors text-[var(--color-primary-500)] ${
          isOpen ? "text-white" : ""
        }`}
      >
        {isOpen ? (
          <CloseIcon fontSize="medium" />
        ) : (
          <MenuIcon fontSize="medium" />
        )}
      </button>

      {createPortal(
        <div
          className={`fixed inset-0 z-[100] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!isOpen}
        >
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className={`absolute inset-0 bg-primary-500/90 backdrop-blur-sm transition-opacity duration-300 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Sliding panel */}
          <aside
            role="dialog"
            aria-modal="true"
            className={`absolute top-0 right-0 h-full w-72 max-w-[80%] bg-[#2f2f2f]/95 text-white shadow-xl pt-24 px-8 flex flex-col transition-transform duration-300 ease-out will-change-transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute top-6 right-6 text-white/70 hover:text-white focus:outline-none"
            >
              <CloseIcon />
            </button>
            <Nav navItems={navItems} direction="col" onNavigate={closeMenu} />
          </aside>
        </div>,
        document.body,
      )}
    </div>
  );
};
