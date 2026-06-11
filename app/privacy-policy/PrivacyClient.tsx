"use client";

import LegalDoc, { type LegalContent } from "@/components/LegalDoc";

/*
 * ============================================================================
 *  ⚠️  PRIVACY BOILERPLATE — MUST BE REVIEWED BEFORE PUBLISHING  ⚠️
 *  Template content, NOT legal advice. It currently reflects the site AS BUILT:
 *  the contact form is a front-end demo with NO backend, so no data is sent or
 *  stored. If/when the form is wired to a real backend (or any analytics is
 *  added), this policy MUST be updated and reviewed by a qualified professional
 *  to stay GDPR-compliant.
 * ============================================================================
 */

const en: LegalContent = {
  title: "Privacy Policy",
  updated: "Last updated: June 2026",
  sections: [
    {
      h: "Data controller",
      body: [
        `The data controller for this site is Parv Kaur. For any privacy enquiry, contact <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>.`,
      ],
    },
    {
      h: "What data we collect",
      body: [
        "The contact form invites you to provide your name, email address and a message.",
        "Important: this site is currently a static portfolio. The contact form is a front-end demonstration only — submitting it does <strong>not</strong> send or store your information on any server, and no data leaves your browser.",
      ],
    },
    {
      h: "Purpose and legal basis",
      body: [
        "Were the form connected to a backend, the data you provide would be used solely to respond to your enquiry, on the legal basis of your consent. No automated decision-making or profiling takes place.",
      ],
    },
    {
      h: "Retention",
      body: [
        "As no data is collected or stored at this time, there is nothing to retain. If this changes, contact-form data would be kept only as long as necessary to handle your enquiry and then deleted.",
      ],
    },
    {
      h: "Sharing",
      body: ["No personal data is shared with, sold to, or transferred to third parties."],
    },
    {
      h: "Cookies and local storage",
      body: [
        "This site uses no tracking, advertising or analytics cookies.",
        "It stores a single technical preference in your browser's local storage — your chosen language ('en' or 'fr') — so the site remembers it on your next visit. This stays on your device and is never used to track you.",
      ],
    },
    {
      h: "Your rights",
      body: [
        "In accordance with the GDPR and the French Loi Informatique et Libertés of 6 January 1978 (as amended), you have the right to access, rectify, port and erase your personal data, and to restrict or object to its processing.",
        `To exercise these rights, contact <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>. You also have the right to lodge a complaint with the French data-protection authority, the CNIL — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>.`,
      ],
    },
    {
      h: "Hosting",
      body: [
        `This site is hosted by Vercel Inc. (USA); see the <a href="/legal-notice">Legal Notice</a> for details.`,
      ],
    },
  ],
};

const fr: LegalContent = {
  title: "Politique de confidentialité",
  updated: "Dernière mise à jour : juin 2026",
  sections: [
    {
      h: "Responsable du traitement",
      body: [
        `Le responsable du traitement de ce site est Parv Kaur. Pour toute question relative à la confidentialité, contactez <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>.`,
      ],
    },
    {
      h: "Données collectées",
      body: [
        "Le formulaire de contact vous invite à renseigner votre nom, votre adresse e-mail et un message.",
        "Important : ce site est actuellement un portfolio statique. Le formulaire de contact est une démonstration front-end uniquement — son envoi ne transmet et ne stocke <strong>aucune</strong> information sur un serveur, et aucune donnée ne quitte votre navigateur.",
      ],
    },
    {
      h: "Finalité et base légale",
      body: [
        "Si le formulaire était relié à un serveur, les données fournies serviraient uniquement à répondre à votre demande, sur la base légale de votre consentement. Aucune décision automatisée ni profilage n'est mis en œuvre.",
      ],
    },
    {
      h: "Conservation",
      body: [
        "Aucune donnée n'étant collectée ni stockée à ce jour, il n'y a rien à conserver. Si cela évoluait, les données du formulaire ne seraient conservées que le temps nécessaire au traitement de votre demande, puis supprimées.",
      ],
    },
    {
      h: "Partage",
      body: ["Aucune donnée personnelle n'est partagée, vendue ou transmise à des tiers."],
    },
    {
      h: "Cookies et stockage local",
      body: [
        "Ce site n'utilise aucun cookie de suivi, publicitaire ou de mesure d'audience.",
        "Il enregistre une seule préférence technique dans le stockage local de votre navigateur — la langue choisie (« en » ou « fr ») — afin de s'en souvenir lors de votre prochaine visite. Cette information reste sur votre appareil et n'est jamais utilisée pour vous suivre.",
      ],
    },
    {
      h: "Vos droits",
      body: [
        "Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles, ainsi que d'un droit à la limitation et d'opposition au traitement.",
        `Pour exercer ces droits, contactez <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>. Vous avez également le droit d'introduire une réclamation auprès de la CNIL — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>.`,
      ],
    },
    {
      h: "Hébergement",
      body: [
        `Ce site est hébergé par Vercel Inc. (États-Unis) ; voir les <a href="/legal-notice">Mentions légales</a> pour plus de détails.`,
      ],
    },
  ],
};

export default function PrivacyClient() {
  return <LegalDoc en={en} fr={fr} />;
}
