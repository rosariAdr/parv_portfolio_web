"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll-reveal wrapper. Adds the global `.reveal`/`.in` classes; the actual
 * animation (transform only, never opacity) lives in globals.css behind
 * `prefers-reduced-motion: no-preference`. Content is ALWAYS rendered/visible —
 * if JS never runs, or the observer is slow, nothing is hidden. A 1.4s safety
 * net mirrors the prototype.
 */
type RevealProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
} & Record<string, unknown>;

export default function Reveal({ as = "div", className, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    const timer = window.setTimeout(() => setShown(true), 1400);
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const cls = ["reveal", shown ? "in" : "", className].filter(Boolean).join(" ");
  // Polymorphic element; `as any` sidesteps createElement's overload typing for a
  // dynamic tag. Props (incl. ref + forwarded handlers like onSubmit) pass through.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createElement(as as any, { ref, className: cls, ...rest }, children);
}
