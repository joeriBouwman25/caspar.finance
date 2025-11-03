import React, { lazy } from "react";

import { Banner } from "../components/Banner";
import teamImg from "../assets/team zwart wit.jpg";
import handshakeImg from "../assets/handIcon.png";

const GoogleMap = lazy(() =>
  import("../components/GoogleMap").then((m) => ({ default: m.GoogleMap })),
);

export const HomePage: React.FC = () => {
  return (
    <main className="relative overflow-hidden pt-24 text-[var(--color-text-dark)]">
      {/* Hero */}
      <div className="md:px-5 xl:px-15">
        <Banner />
      </div>

      {/* Intro */}
      <section
        aria-labelledby="intro"
        className="pt-20 sm:pt-28 pb-12 sm:pb-16"
      >
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div>
              <h2
                id="intro"
                className="text-3xl sm:text-4xl font-light tracking-tight mb-8 text-primary-500 text-center italic"
              >
                Met jarenlange ervaring in het ondersteunen van de lokale
                economie.
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Bij ons kunt u terecht met al uw administratieve vragen. Wij
                hebben jarenlange ervaring met het ondersteunen van eenmanszaak
                tot B.V. Wij nemen de boekhouding uit handen en verzorgen onder
                andere de aangiften omzetbelasting, inkomstenbelasting en
                vennootschapsbelasting.
              </p>
            </div>
            <div className="relative w-full max-w-md">
              <img
                src={teamImg}
                alt="Team Caspar Finance"
                className="w-full rounded-xl object-cover shadow-sm ring-1 ring-white/10 transition duration-500 motion-safe:hover:scale-[1.015]"
                loading="lazy"
                draggable={false}
              />
              <div className="absolute -bottom-6 left-4 right-4 md:bottom-4 md:left-auto md:right-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 shadow-lg">
                <img
                  src={handshakeImg}
                  alt=""
                  aria-hidden="true"
                  className="w-12 h-12 select-none"
                  draggable={false}
                />
                <span className="font-medium text-primary-200 md:text-primary-400">
                  Wij staan altijd voor u klaar.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section
        aria-labelledby="map"
        className="pt-6 sm:pt-8 pb-20 sm:pb-28 px-5 lg:px-15"
      >
        <GoogleMap />
      </section>
    </main>
  );
};
