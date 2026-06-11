"use client";

import { useI18n } from "@/lib/i18n/LocaleProvider";
import { CV_PATH } from "@/lib/site";
import { logoSrc } from "@/lib/data/logos";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import styles from "./experience.module.css";

export default function ExperienceClient() {
  const { t, rich } = useI18n();

  return (
    <div className="wrap page-head section">
      <Reveal as="div" className={styles.expTop}>
        <h1 className="display">{t("exp.title")}</h1>
        <a className="btn-link" href={CV_PATH} download>
          <span>{t("about.cv")}</span> ↓
        </a>
      </Reveal>

      {/* 1 — SEVA (logo 3×) */}
      <Reveal as="article" className={styles.expItem}>
        <div className={styles.expWhen}>
          <div className={styles.expYear}>2024</div>
          <div className={styles.expPeriod}>{t("exp.p1")}</div>
          <Logo className={`${styles.expLogo} ${styles.expLogoSeva}`} src={logoSrc("seva")} alt="SEVA" />
        </div>
        <div>
          <h2 className={styles.expRole} {...rich("exp.r1")} />
          <div className={styles.expPlace}>{t("exp.place.seva")}</div>
          <ul className={styles.expList}>
            <li {...rich("exp.r1a")} />
            <li {...rich("exp.r1b")} />
            <li {...rich("exp.r1c")} />
            <li {...rich("exp.r1d")} />
          </ul>
        </div>
      </Reveal>

      {/* 2 — Higher Education Consultant (4-logo row) */}
      <Reveal as="article" className={styles.expItem}>
        <div className={styles.expWhen}>
          <div className={styles.expYear}>2023</div>
          <div className={styles.expPeriod}>{t("exp.p2")}</div>
        </div>
        <div>
          <h2 className={styles.expRole} {...rich("exp.r2")} />
          <div className={styles.expLogosRow}>
            <Logo src={logoSrc("rennes")} alt="Rennes School of Business" />
            <Logo src={logoSrc("omnes")} alt="OMNES Education" />
            <Logo src={logoSrc("iae-lille")} alt="IAE Lille" />
            <Logo src={logoSrc("paris-saclay")} alt="Université Paris-Saclay" />
          </div>
          <ul className={styles.expList}>
            <li {...rich("exp.r2a")} />
            <li {...rich("exp.r2b")} />
            <li {...rich("exp.r2c")} />
            <li {...rich("exp.r2d")} />
            <li {...rich("exp.r2e")} />
          </ul>
        </div>
      </Reveal>

      {/* 3 — AVIV (logo 1.5×) */}
      <Reveal as="article" className={styles.expItem}>
        <div className={styles.expWhen}>
          <div className={styles.expYear}>2022</div>
          <div className={styles.expPeriod}>{t("exp.p3")}</div>
          <Logo className={`${styles.expLogo} ${styles.expLogoAviv}`} src={logoSrc("aviv")} alt="AVIV Group" />
        </div>
        <div>
          <h2 className={styles.expRole} {...rich("exp.r3")} />
          <ul className={styles.expList}>
            <li {...rich("exp.r3a")} />
            <li {...rich("exp.r3b")} />
            <li {...rich("exp.r3c")} />
          </ul>
        </div>
      </Reveal>

      {/* 4 — Helvetia (default 60px logo) */}
      <Reveal as="article" className={styles.expItem}>
        <div className={styles.expWhen}>
          <div className={styles.expYear}>2021</div>
          <div className={styles.expPeriod}>{t("exp.p4")}</div>
          <Logo className={styles.expLogo} src={logoSrc("helvetia")} alt="Helvetia" />
        </div>
        <div>
          <h2 className={styles.expRole} {...rich("exp.r4")} />
          <ul className={styles.expList}>
            <li {...rich("exp.r4a")} />
            <li {...rich("exp.r4b")} />
            <li {...rich("exp.r4c")} />
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
