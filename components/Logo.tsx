/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";

/**
 * Thin <img> wrapper for the institution logos (static, full-colour transparent
 * PNGs in /public/logos). Plain <img> is intentional: the marquee duplicates
 * many of these and the CSS sizes them via height/clamp + object-fit, which is
 * simpler than next/image's fill/width model. Centralised here so it's the one
 * place to switch to next/image later if wanted.
 */
export default function Logo({ alt = "", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img alt={alt} {...props} />;
}
