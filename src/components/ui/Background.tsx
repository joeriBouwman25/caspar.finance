import React from "react";

// Single ultra‑subtle neutral background (removed prominent primary tint).
interface BackgroundProps {
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({ className = "" }) => {
  const base = [
    "pointer-events-none fixed inset-0 -z-10",
    // Neutral vertical gradient (light: almost flat; dark: slight elevation illusion)
    "bg-gradient-to-b from-surface via-bg to-bg dark:from-bg-dark dark:via-bg-dark dark:to-bg-dark",
    // Extremely soft radial lift (almost imperceptible). Reduced opacity & wider fade.
    "after:content-[''] after:absolute after:inset-0",
    "after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]",
    "dark:after:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]",
    "after:pointer-events-none",
  ].join(" ");

  return <div aria-hidden="true" className={`${base} ${className}`.trim()} />;
};
