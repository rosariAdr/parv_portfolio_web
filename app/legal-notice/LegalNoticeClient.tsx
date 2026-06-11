"use client";

import LegalDoc, { type LegalContent } from "@/components/LegalDoc";

/*
 * ============================================================================
 *  ⚠️  LEGAL BOILERPLATE — MUST BE REVIEWED BEFORE PUBLISHING  ⚠️
 *  This is sensible template content, NOT legal advice. Before going live, Parv
 *  must (1) complete the [bracketed] placeholders below — postal address, and a
 *  business identifier (e.g. SIRET) if operating as a registered business — and
 *  (2) have this reviewed by a qualified legal professional. French law (LCEN)
 *  requires accurate "Mentions légales" to be published on the site.
 * ============================================================================
 */

const en: LegalContent = {
  title: "Legal Notice",
  updated: "Last updated: June 2026",
  sections: [
    {
      h: "Site editor",
      body: [
        "This website is published by Parv Kaur, lecturer and Higher Education Consultant.",
        `Contact: <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>.`,
        "Postal address: [to be completed before publishing].",
      ],
    },
    {
      h: "Publication director",
      body: ["The publication director is Parv Kaur."],
    },
    {
      h: "Hosting",
      body: [
        `This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.`,
      ],
    },
    {
      h: "Intellectual property",
      body: [
        "The text, structure and design of this site are the property of Parv Kaur unless stated otherwise. Any reproduction or representation, in whole or in part, without prior written permission is prohibited.",
        "Institution names and logos are the property of their respective owners and are shown for illustrative, descriptive purposes only.",
      ],
    },
    {
      h: "Personal data",
      body: [
        `The processing of personal data is described in the <a href="/privacy-policy">Privacy Policy</a>.`,
      ],
    },
    {
      h: "Liability",
      body: [
        "Information on this site is provided for general guidance. While care is taken to keep it accurate and up to date, no guarantee is given as to its completeness or accuracy. External links are provided for convenience; the editor is not responsible for the content of third-party sites.",
      ],
    },
  ],
};

const fr: LegalContent = {
  title: "Mentions légales",
  updated: "Dernière mise à jour : juin 2026",
  sections: [
    {
      h: "Éditeur du site",
      body: [
        "Ce site est édité par Parv Kaur, enseignante et consultante en enseignement supérieur.",
        `Contact : <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>.`,
        "Adresse postale : [à compléter avant publication].",
      ],
    },
    {
      h: "Directrice de la publication",
      body: ["La directrice de la publication est Parv Kaur."],
    },
    {
      h: "Hébergement",
      body: [
        `Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.`,
      ],
    },
    {
      h: "Propriété intellectuelle",
      body: [
        "Les textes, la structure et le design de ce site sont la propriété de Parv Kaur, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
        "Les noms et logos des établissements demeurent la propriété de leurs titulaires respectifs et sont présentés à des fins purement illustratives et descriptives.",
      ],
    },
    {
      h: "Données personnelles",
      body: [
        `Le traitement des données personnelles est décrit dans la <a href="/privacy-policy">Politique de confidentialité</a>.`,
      ],
    },
    {
      h: "Responsabilité",
      body: [
        "Les informations de ce site sont fournies à titre indicatif. Malgré le soin apporté à leur exactitude et à leur mise à jour, aucune garantie n'est donnée quant à leur exhaustivité ou leur exactitude. Les liens externes sont proposés par commodité ; l'éditrice n'est pas responsable du contenu des sites tiers.",
      ],
    },
  ],
};

export default function LegalNoticeClient() {
  return <LegalDoc en={en} fr={fr} />;
}
