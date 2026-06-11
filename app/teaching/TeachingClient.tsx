"use client";

import { useMemo, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { COURSES, INSTS, DISC, type Level } from "@/lib/data/courses";
import { logoSrc } from "@/lib/data/logos";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import styles from "./teaching.module.css";

const PER_PAGE = 15;

export default function TeachingClient() {
  const { t, rich } = useI18n();
  const [level, setLevel] = useState("all");
  const [disc, setDisc] = useState("all");
  const [inst, setInst] = useState<string[]>([]); // empty = all
  const [page, setPage] = useState(1);
  const filtersRef = useRef<HTMLDivElement>(null);

  // Institution pills: used INSTS keys sorted by display name (every key is used).
  const instKeys = useMemo(
    () => Object.keys(INSTS).sort((a, b) => INSTS[a].localeCompare(INSTS[b])),
    [],
  );

  // Filters compose (level AND discipline AND institution-set).
  const rows = useMemo(
    () =>
      COURSES.filter(
        (c) =>
          (level === "all" || c.lvl === level) &&
          (disc === "all" || c.disc === disc) &&
          (inst.length === 0 || inst.includes(c.inst)),
      ),
    [level, disc, inst],
  );

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const startIdx = (safePage - 1) * PER_PAGE;
  const endIdx = Math.min(startIdx + PER_PAGE, total);
  const pageRows = rows.slice(startIdx, endIdx);

  const levelLabel: Record<Level, string> = {
    bachelor: t("teach.lvl.bachelor"),
    master: t("teach.lvl.master"),
    mba: t("teach.lvl.mba"),
  };

  // Any filter change resets to page 1.
  const setLevelF = (v: string) => { setLevel(v); setPage(1); };
  const setDiscF = (v: string) => { setDisc(v); setPage(1); };
  const toggleInst = (v: string) => {
    if (v === "all") setInst([]);
    else setInst((cur) => (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]));
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    const anchor = filtersRef.current;
    if (anchor) {
      const y = anchor.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const levelOptions = [
    { val: "all", label: t("teach.all") },
    { val: "bachelor", label: t("teach.bachelor") },
    { val: "master", label: t("teach.master") },
    { val: "mba", label: "MBA" },
  ];
  const discOptions = [
    { val: "all", label: t("teach.all") },
    { val: "bi", label: "BI & Data Analytics" },
    { val: "ob", label: t("teach.ob") },
    { val: "dm", label: t("teach.dm") },
  ];

  const pill = (on: boolean) => `${styles.fpill}${on ? " " + styles.on : ""}`;

  return (
    <div className="wrap page-head section">
      <Reveal as="div" className={styles.teachHead}>
        <div className="overline" style={{ marginBottom: 22 }}>
          {t("teach.kicker")}
        </div>
        <h1 className="display" {...rich("teach.title")} />
        <p className="lead">{t("teach.lead")}</p>
      </Reveal>

      <div className={styles.filters} ref={filtersRef}>
        <div className={styles.fgroup}>
          <span className={styles.fgroupLabel} id="lvl-label">
            {t("teach.level")}
          </span>
          <div className={styles.fpills} role="group" aria-labelledby="lvl-label">
            {levelOptions.map((o) => (
              <button key={o.val} type="button" className={pill(level === o.val)} aria-pressed={level === o.val} onClick={() => setLevelF(o.val)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.fgroup}>
          <span className={styles.fgroupLabel} id="disc-label">
            {t("teach.disc")}
          </span>
          <div className={styles.fpills} role="group" aria-labelledby="disc-label">
            {discOptions.map((o) => (
              <button key={o.val} type="button" className={pill(disc === o.val)} aria-pressed={disc === o.val} onClick={() => setDiscF(o.val)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.fgroup} ${styles.fgroupInst}`}>
          <span className={styles.fgroupLabel} id="inst-label">
            {t("teach.inst")}
          </span>
          <div className={styles.fpills} role="group" aria-labelledby="inst-label">
            <button type="button" className={pill(inst.length === 0)} aria-pressed={inst.length === 0} onClick={() => toggleInst("all")}>
              {t("teach.all")}
            </button>
            {instKeys.map((k) => (
              <button key={k} type="button" className={pill(inst.includes(k))} aria-pressed={inst.includes(k)} onClick={() => toggleInst(k)}>
                {INSTS[k]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.count} aria-live="polite">
        {total > 0 && (
          <>
            {t("teach.showing")}
            <b>
              {startIdx + 1}&ndash;{endIdx}
            </b>
            {t("teach.of")}
            <b>{total}</b>
            {t("teach.coursesWord")}
          </>
        )}
      </div>

      <div className={styles.courseGrid}>
        {total === 0 ? (
          <div className={styles.empty}>{t("teach.empty")}</div>
        ) : (
          pageRows.map((c, i) => {
            const d = DISC[c.disc];
            return (
              <article className={styles.ccard} key={`${c.inst}-${c.t}-${startIdx + i}`}>
                <div className={styles.disc}>
                  <span className={styles.dot} style={{ background: d.c }} aria-hidden="true" />
                  {d.l}
                </div>
                <h3>{c.t}</h3>
                <div className={styles.meta}>
                  <Logo src={logoSrc(c.inst)} alt={INSTS[c.inst]} title={INSTS[c.inst]} />
                  <span className={styles.lvl}>{levelLabel[c.lvl]}</span>
                </div>
              </article>
            );
          })
        )}
      </div>

      {totalPages > 1 && (
        <nav className={styles.pager} aria-label="Pagination">
          <button
            type="button"
            className={styles.pgbtn}
            disabled={safePage === 1}
            onClick={() => goToPage(safePage - 1)}
          >
            {"‹ "}
            {t("teach.prev")}
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              className={`${styles.pgbtn}${p === safePage ? " " + styles.active : ""}`}
              aria-current={p === safePage ? "page" : undefined}
              aria-label={`Page ${p}`}
              onClick={() => goToPage(p)}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            className={styles.pgbtn}
            disabled={safePage === totalPages}
            onClick={() => goToPage(safePage + 1)}
          >
            {t("teach.next")}
            {" ›"}
          </button>
        </nav>
      )}
    </div>
  );
}
