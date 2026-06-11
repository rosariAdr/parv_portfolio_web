"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { REVIEWS, CAT, INST, type ReviewCat } from "@/lib/data/reviews";
import { logoSrc } from "@/lib/data/logos";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import styles from "./voices.module.css";

export default function VoicesClient() {
  const { t, rich } = useI18n();
  const [cat, setCat] = useState<"all" | ReviewCat>("all");

  const filtered = REVIEWS.filter((r) => cat === "all" || r.cat === cat);

  const filters: { val: "all" | ReviewCat; label: string }[] = [
    { val: "all", label: t("teach.all") },
    { val: "bi", label: "BI & Data Analytics" },
    { val: "ob", label: t("voices.ob") },
    { val: "mkt", label: t("voices.mkt") },
  ];

  return (
    <div className="wrap page-head section">
      <Reveal as="div" className={styles.voicesHead}>
        <div className="overline" style={{ marginBottom: 22 }}>
          {t("voices.kicker")}
        </div>
        <h1 className="display" {...rich("voices.title")} />
        <p className="lead">{t("voices.lead")}</p>
      </Reveal>

      <Reveal as="div" className={styles.vfilters} role="group" aria-label={t("voices.kicker")}>
        {filters.map((f) => (
          <button
            key={f.val}
            type="button"
            className={`${styles.vpill}${cat === f.val ? " " + styles.on : ""}`}
            aria-pressed={cat === f.val}
            onClick={() => setCat(f.val)}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className={styles.vmasonry}>
        {filtered.map((r, i) => {
          const c = CAT[r.cat];
          return (
            <div className={styles.vcard} key={`${r.inst}-${i}`}>
              <span className={styles.vtag} style={{ background: c.c }}>
                {c.l}
              </span>
              <blockquote>{r.q}</blockquote>
              <div className={styles.by}>
                <Logo src={logoSrc(r.inst)} alt={INST[r.inst]} />
                <span className={styles.name}>— {r.who}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
