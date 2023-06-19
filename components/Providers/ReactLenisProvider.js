"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export function ReactLenisProvider({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}
