import React from "react";
import { FOOTER_ITEMS } from "../constants/footerItems";
import { NavLink } from "react-router";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative mt-28 border-t border-white/10 bg-bg/95 backdrop-blur-sm text-white/90"
      aria-labelledby="site-footer-heading"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[50em] px-6 md:px-10 pt-14 pb-8">
        <h2 id="site-footer-heading" className="sr-only">
          Website footer
        </h2>
        {/* Changed from grid with 3 columns (causing empty space) to centered flex layout */}
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-12 md:items-start">
          {FOOTER_ITEMS.map((section, i) => {
            const hasTitle = Boolean(section.title);
            return (
              <section
                key={section.title || i}
                className="w-auto max-w-[16rem]"
              >
                {hasTitle && (
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary-400/90">
                    {section.title}
                  </h3>
                )}
                <ul className="space-y-2.5">
                  {section.items.map((item) => {
                    const { Icon } = item;
                    const isLegal = item.label === "Algemene Voorwaarden";
                    const content = (
                      <span
                        className={[
                          "group/item inline-flex items-start gap-3 text-[0.9rem] leading-relaxed tracking-wide font-extralight text-[var(--color-brand-muted)] transition-colors text-left",
                          isLegal &&
                            "relative px-2 py-1 rounded-md bg-white/0 hover:bg-primary-500/5 ring-1 ring-transparent hover:ring-primary-400/30 hover:text-primary-200/90 text-primary-300/90 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {Icon && (
                          <span
                            className={[
                              "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded bg-primary-500/10 ring-1 ring-primary-400/30 text-primary-400 group-hover/item:bg-primary-400/15 group-hover/item:text-primary-300",
                              isLegal &&
                                "bg-primary-500/15 text-primary-300 group-hover/item:bg-primary-500/20 group-hover/item:text-primary-200",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            <Icon fontSize="inherit" className="!text-[1rem]" />
                          </span>
                        )}
                        <span
                          className={[
                            "group-hover/item:text-primary-200",
                            isLegal &&
                              "underline decoration-primary-400/30 underline-offset-4 group-hover/item:decoration-primary-300/60",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {item.label}
                        </span>
                        {isLegal && (
                          <span className="pointer-events-none absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary-400/70 animate-pulse" />
                        )}
                      </span>
                    );
                    return (
                      <li key={item.label} className="relative">
                        {item.href ? (
                          isLegal ? (
                            <NavLink
                              to={item.href}
                              className={[
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 rounded-sm",
                                isLegal &&
                                  "focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              {content}
                            </NavLink>
                          ) : (
                            <a
                              href={item.href}
                              className={[
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300/60 rounded-sm",
                                isLegal &&
                                  "focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
                              ]
                                .filter(Boolean)
                                .join(" ")}
                            >
                              {content}
                            </a>
                          )
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-16 mb-6 h-px w-full bg-white/10" />

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[0.7rem] tracking-wide text-white/50 text-center md:text-left">
          <p className="order-2 md:order-1">{year} Caspar Finance.</p>
          <p className="order-1 md:order-2 inline-flex items-center justify-center gap-2 text-white/40">
            <span className="h-2 w-2 rounded-full bg-primary-400/70" />
            <span className="font-light">Betrouwbaar financieel advies</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
