"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { LINKEDIN_URL, CV_PATH } from "@/lib/site";
import { ArrowRight, Download, LinkedIn } from "./Icons";

const LINKS = [
  { href: "/", key: "home", i18n: "nav.home" },
  { href: "/experience", key: "experience", i18n: "nav.experience" },
  { href: "/teaching", key: "teaching", i18n: "nav.teaching" },
  { href: "/voices", key: "voices", i18n: "nav.voices" },
  { href: "/about", key: "about", i18n: "nav.about" },
] as const;

function activeKey(pathname: string): string {
  if (pathname === "/") return "home";
  const seg = "/" + pathname.split("/")[1];
  return LINKS.find((l) => l.href === seg)?.key ?? "";
}

export default function Nav() {
  const { t, locale, setLocale } = useI18n();
  const pathname = usePathname() || "/";
  const active = activeKey(pathname);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={`nav${open ? " is-open" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={close}>
          <b>PK</b> <span>|</span> Parv Kaur
        </Link>

        <nav id="primary-nav" className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className={active === l.key ? "active" : undefined}
              aria-current={active === l.key ? "page" : undefined}
              onClick={close}
            >
              {t(l.i18n)}
            </Link>
          ))}
          {/* Mobile-only: surfaced inside the burger menu (hidden on desktop via CSS) */}
          <a
            className="nav-extra"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            LinkedIn ↗
          </a>
          <a className="nav-extra" href={CV_PATH} download onClick={close}>
            {t("hero.cta2")} ↓
          </a>
        </nav>

        <div className="nav-right">
          <div className="nav-icons">
            <a
              className="nav-icon"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a className="nav-icon" href={CV_PATH} download aria-label={t("hero.cta2")}>
              <Download />
            </a>
          </div>

          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              className={locale === "en" ? "on" : undefined}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              className={locale === "fr" ? "on" : undefined}
              aria-pressed={locale === "fr"}
              onClick={() => setLocale("fr")}
            >
              FR
            </button>
          </div>

          <a className="btn btn-primary" href="#contact">
            <span className="nav-cta-text">{t("nav.cta")}</span>
            <ArrowRight className="ico" />
          </a>

          <button
            type="button"
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
