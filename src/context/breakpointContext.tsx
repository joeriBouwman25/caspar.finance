import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export const breakpoints: Record<Breakpoint, number> = {
  xs: 0,
  sm: 600,
  md: 840,
  lg: 1280,
  xl: 1500,
};

export const BreakpointContext = createContext<Breakpoint | null>(null);

const getBreakpoint = (width: number): Breakpoint => {
  if (width < breakpoints.sm) return "xs";
  if (width < breakpoints.md) return "sm";
  if (width < breakpoints.lg) return "md";
  if (width < breakpoints.xl) return "lg";
  return "xl";
};

export interface BreakpointProviderProps {
  width?: number;
}

export const BreakpointProvider = ({
  children,
  width,
}: PropsWithChildren<BreakpointProviderProps>) => {
  // Use provided width (e.g., for tests) or window width (guard for SSR)
  const initialWidth =
    typeof window !== "undefined"
      ? (width ?? window.innerWidth)
      : (width ?? breakpoints.xs);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(
    getBreakpoint(initialWidth),
  );

  const handleResize = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth; // always read the LIVE viewport width
    setCurrentBreakpoint((prev) => {
      const next = getBreakpoint(w);
      return prev === next ? prev : next;
    });
  }, []);

  // If the controlled width prop changes externally, update breakpoint
  useEffect(() => {
    if (width !== undefined) {
      const next = getBreakpoint(width);
      setCurrentBreakpoint((prev) => (prev === next ? prev : next));
    }
  }, [width]);

  useEffect(() => {
    // If consumer passes width we treat it as controlled; skip listener
    if (width !== undefined) return;
    handleResize(); // sync once on mount in case of late paint
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, width]);

  return (
    <BreakpointContext.Provider value={currentBreakpoint}>
      {children}
    </BreakpointContext.Provider>
  );
};
