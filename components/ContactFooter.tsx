"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n/LocaleProvider";
import { LINKEDIN_URL, EMAIL, CALENDLY_URL } from "@/lib/site";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

/**
 * Shared contact band + page footer. The contact form is a VISUAL DEMO ONLY —
 * no backend. On submit it shows a transient confirmation and resets. The
 * footer is a separate <footer> element (contentinfo landmark).
 */
export default function ContactFooter() {
  const { t, rich, locale } = useI18n();
  const [sent, setSent] = useState(false);
  const timer = useRef<number | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // no network call
    const form = e.currentTarget;
    setSent(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setSent(false);
      form.reset();
      timer.current = null;
    }, 2600);
  }

  const sentLabel = locale === "fr" ? "Message envoyé ✓" : "Message sent ✓";

  return (
    <>
      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <div className="wrap contact-grid">
          <Reveal as="div">
            <h2 id="contact-heading" {...rich("contact.title")} />
            <div className="contact-socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a href={`mailto:${EMAIL}`}>{t("contact.email")}</a>
              <a href={CALENDLY_URL}>{t("contact.calendly")} ↗</a>
            </div>
          </Reveal>

          <Reveal as="form" className="form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="contact-name">{t("form.name")}</label>
              <input id="contact-name" name="name" type="text" required placeholder={t("form.name.ph")} />
            </div>
            <div className="field">
              <label htmlFor="contact-email">{t("form.email")}</label>
              <input id="contact-email" name="email" type="email" required placeholder={t("form.email.ph")} />
            </div>
            <div className="field">
              <label htmlFor="contact-message">{t("form.msg")}</label>
              <textarea id="contact-message" name="message" required placeholder={t("form.msg.ph")} />
            </div>
            <button className="btn btn-primary" type="submit" style={{ alignSelf: "flex-start" }} disabled={sent}>
              <span>{sent ? sentLabel : t("form.send")}</span>
              <ArrowRight className="ico" />
            </button>
          </Reveal>
        </div>
      </section>

      <footer className="footer-bar">
        <div className="footer-bar-inner">
          <div className="footer-bar-top">
            <div>
              <div className="brand">
                <b>PK</b> <span>|</span> Parv Kaur
              </div>
              <div className="footer-copy">© 2026 Parv Kaur. All rights reserved.</div>
            </div>
          </div>
          <div className="footer-legal">
            {/* GDPR notice — trusted static copy from the dictionaries */}
            <p {...rich("footer.gdpr")} />
            <p className="footer-legal-links">
              <Link href="/legal-notice">{t("footer.mentions")}</Link> ·{" "}
              <Link href="/privacy-policy">{t("footer.privacy")}</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
