"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { CV_PATH } from "@/lib/site";
import { logoSrc } from "@/lib/data/logos";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import Logo from "@/components/Logo";
import { ArrowRight, Download } from "@/components/Icons";
import styles from "./home.module.css";

const FEATURED = [
  { logos: ["iae-lille", "paris-saclay"], alts: ["IAE Lille", "Paris-Saclay"], title: "fcard1.title", text: "fcard1.text" },
  { logos: ["rennes", "cmh"], alts: ["Rennes", "CMH"], title: "fcard2.title", text: "fcard2.text" },
  { logos: ["eidm", "amos"], alts: ["EIDM", "AMOS"], title: "fcard3.title", text: "fcard3.text" },
];

export default function HomeClient() {
  const { t, rich } = useI18n();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className={`${styles.hero} wrap`}>
        <div className={`overline ${styles.heroOverline}`}>{t("hero.role")}</div>
        <div className={styles.heroSplit}>
          <Reveal as="div" className={styles.heroCopy}>
            <h1 className="display" {...rich("hero.title")} />
            <p className="lead">{t("hero.lead")}</p>
            <div className={styles.heroActions}>
              <a className="btn btn-primary" href="#contact">
                {t("hero.cta1")}
              </a>
              <a className="btn btn-ghost" href={CV_PATH} download>
                {t("hero.cta2")}
              </a>
            </div>
            <div className={styles.heroStatsWrap}>
              <div className="stats">
                <div className="stat">
                  <div className="n">4+</div>
                  <div className="l">{t("stat.years")}</div>
                </div>
                <div className="stat">
                  <div className="n">20+</div>
                  <div className="l">{t("stat.inst")}</div>
                </div>
                <div className="stat">
                  <div className="n">100+</div>
                  <div className="l">{t("stat.curr")}</div>
                </div>
                <div className="stat">
                  <div className="n">30+</div>
                  <div className="l">{t("stat.theses")}</div>
                </div>
              </div>
              <div style={{ marginTop: 30 }}>
                <span className="chip">
                  <span className="pin" aria-hidden="true" />
                  <span>{t("hero.chip")}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" className={styles.portraitCard}>
            {/* Portrait placeholder. To use a real photo, drop it in /public and
                replace this div with:
                <Image src="/portrait.jpg" alt="Parv Kaur" fill className={styles.portraitSlot} style={{objectFit:'cover'}} /> */}
            <div className={styles.portraitSlot} aria-hidden="true" />
            <div className={styles.portraitCta}>
              <a href="#contact">
                <span>{t("hero.cta1")}</span>
                <ArrowRight className="ico" />
              </a>
              <a href={CV_PATH} download>
                <span>{t("hero.cta2")}</span>
                <Download className="ico" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= LOGOS ================= */}
      <LogoMarquee />

      {/* ================= PULL QUOTE ================= */}
      <Reveal as="section" className={styles.quoteBand}>
        <div className="wrap">
          <span className={styles.mark} aria-hidden="true">
            &ldquo;
          </span>
          <blockquote {...rich("quote.text")} />
          <cite>{t("quote.cite")}</cite>
          <div className={styles.voicesLink}>
            <Link className="btn-link" href="/voices">
              <span>{t("quote.link")}</span> →
            </Link>
          </div>
        </div>
      </Reveal>

      {/* ================= FEATURED ================= */}
      <section className="section wrap">
        <Reveal as="div" className={`sec-title ${styles.featuredHead}`}>
          <div className="t">{t("featured.title")}</div>
          <div className="rule" />
        </Reveal>
        <Reveal as="div" className={styles.cards3}>
          {FEATURED.map((c) => (
            <article className={styles.fcard} key={c.title}>
              <div className={styles.fcardLogos}>
                <Logo src={logoSrc(c.logos[0])} alt={c.alts[0]} />
                <Logo src={logoSrc(c.logos[1])} alt={c.alts[1]} />
              </div>
              <h3>{t(c.title)}</h3>
              <p>{t(c.text)}</p>
            </article>
          ))}
        </Reveal>
      </section>
    </>
  );
}
