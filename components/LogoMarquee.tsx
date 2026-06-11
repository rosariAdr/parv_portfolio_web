"use client";

import { useI18n } from "@/lib/i18n/LocaleProvider";
import { MARQUEE_LOGOS, logoSrc } from "@/lib/data/logos";
import Logo from "./Logo";

/**
 * Full-width auto-scrolling logo strip. The track holds two identical halves
 * (the 2nd is aria-hidden); the CSS keyframe shifts it right over 60s, pauses on
 * hover, masks the edges, and disables under prefers-reduced-motion.
 */
export default function LogoMarquee() {
  const { t } = useI18n();
  return (
    <section className="logos-strip">
      <div className="wrap">
        <div className="logos-label">{t("logos.label")}</div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {MARQUEE_LOGOS.map((l) => (
            <Logo key={l.file} src={logoSrc(l.file)} alt={l.alt} />
          ))}
          {MARQUEE_LOGOS.map((l) => (
            <Logo key={`${l.file}-dup`} src={logoSrc(l.file)} alt="" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
