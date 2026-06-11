"use client";

import { useI18n } from "@/lib/i18n/LocaleProvider";
import Reveal from "@/components/Reveal";
import styles from "./Legal.module.css";

export interface LegalSection {
  h: string;
  body: string[];
}
export interface LegalContent {
  title: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Bilingual legal document renderer. The page passes EN + FR content; this
 * switches on the active locale (re-renders on toggle). Body paragraphs are
 * trusted, static copy authored by us (may contain <a>) — never user input.
 */
export default function LegalDoc({ en, fr }: { en: LegalContent; fr: LegalContent }) {
  const { locale } = useI18n();
  const c = locale === "fr" ? fr : en;

  return (
    <div className="wrap page-head section">
      <Reveal as="div" className={styles.legalHead}>
        <h1 className="display">{c.title}</h1>
        <p className={styles.updated}>{c.updated}</p>
      </Reveal>
      <div className={styles.legalBody}>
        {c.sections.map((s, i) => (
          <section className={styles.section} key={i}>
            <h2>{s.h}</h2>
            {s.body.map((p, j) => (
              <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
