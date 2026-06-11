"use client";

import { useI18n } from "@/lib/i18n/LocaleProvider";
import { CV_PATH } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { Download } from "@/components/Icons";
import styles from "./about.module.css";

export default function AboutClient() {
  const { t, rich } = useI18n();

  return (
    <div className="wrap page-head section">
      <Reveal as="div" className="overline">
        {t("about.kicker")}
      </Reveal>

      <Reveal as="div" className={styles.aboutIntro}>
        <h1 className="display" {...rich("about.title")} />
        <p className={styles.aboutBio} {...rich("about.bio")} />
      </Reveal>

      <div className={styles.aboutGrid}>
        <Reveal as="section">
          <h2 className={styles.blockTitle}>{t("about.edu")}</h2>
          <div className={styles.blockRule} />
          <div className={styles.tl}>
            <div className={styles.tlItem}>
              <div className={styles.tlYear}>2021</div>
              <div className={styles.tlSchool}>IAE-UGA Grenoble Alpes</div>
              <div className={styles.tlDegree}>{t("about.edu1")}</div>
            </div>
            <div className={styles.tlItem}>
              <div className={styles.tlYear}>2020</div>
              <div className={styles.tlSchool}>IFAG · L&apos;École de Management</div>
              <div className={styles.tlDegree}>{t("about.edu2")}</div>
            </div>
            <div className={styles.tlItem}>
              <div className={styles.tlYear}>2019</div>
              <div className={styles.tlSchool}>{t("about.edu3school")}</div>
              <div className={styles.tlDegree}>{t("about.edu3")}</div>
            </div>
          </div>
        </Reveal>

        <Reveal as="section">
          <h2 className={styles.blockTitle}>{t("about.lang")}</h2>
          <div className={styles.blockRule} />
          <div className={styles.langCard}>
            <h4>{t("about.langcard.t")}</h4>
            <p>{t("about.langcard.p")}</p>
          </div>
          <h2 className={styles.blockTitle}>{t("about.certs")}</h2>
          <div className={styles.blockRule} />
          <div className={styles.certs}>
            <div className={styles.cert}>Google Analytics</div>
            <div className={styles.cert}>Tableau</div>
            <div className={`${styles.cert} ${styles.certWide}`}>{t("about.cert3")}</div>
          </div>
        </Reveal>
      </div>

      <Reveal as="section" className={styles.cvPreviewSection}>
        <h2 className={styles.blockTitle}>CV</h2>
        <div className={styles.blockRule} />
        <a className={`btn btn-primary ${styles.cvDownloadBtn}`} href={CV_PATH} download>
          <span>{t("about.cv")}</span>
          <Download className="ico" />
        </a>
        <div className={styles.cvPreviewFrame}>
          {/* The PDF is added by the user to /public/Parv_KAUR_Resume.pdf.
              Until then this 404s gracefully (expected). */}
          <iframe src={`${CV_PATH}#view=FitH`} title="CV preview" loading="lazy" />
        </div>
      </Reveal>
    </div>
  );
}
