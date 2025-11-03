import {
  Breakpoint,
  BreakpointContext,
  breakpoints,
} from "../context/breakpointContext";
import { useContext } from "react";

const useBreakpoint = (): Breakpoint => {
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
};

export const useIsBreakpoint = (breakpoint: Breakpoint): boolean => {
  const currentBreakpoint = useBreakpoint();
  return breakpoints[currentBreakpoint] >= breakpoints[breakpoint];
};
