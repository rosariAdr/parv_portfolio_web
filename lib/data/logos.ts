/**
 * Home-page marquee logos, in display order. Ported from index.html.
 * Files live in /public/logos/<file>.png (background-removed full-colour PNGs).
 * The marquee renders this list twice; the duplicate half is aria-hidden.
 */

export interface MarqueeLogo {
  file: string;
  alt: string;
}

export const MARQUEE_LOGOS: MarqueeLogo[] = [
  { file: "rennes", alt: "Rennes School of Business" },
  { file: "inseec", alt: "INSEEC Paris" },
  { file: "em-normandie", alt: "EM Normandie Business School" },
  { file: "paris-saclay", alt: "Université Paris-Saclay" },
  { file: "iae-lille", alt: "IAE Lille" },
  { file: "idrac", alt: "IDRAC Business School" },
  { file: "gema", alt: "GEMA" },
  { file: "ifag", alt: "IFAG" },
  { file: "esc-amiens", alt: "ESC Amiens" },
  { file: "amos", alt: "AMOS" },
  { file: "igensia", alt: "IGENSIA" },
  { file: "cmh", alt: "CMH" },
  { file: "eidm", alt: "EIDM" },
  { file: "iscom", alt: "ISCOM" },
  { file: "ilci", alt: "ILCI" },
  { file: "esg-luxe", alt: "ESG Luxe" },
  { file: "mbway", alt: "MBway" },
  { file: "ferrieres", alt: "Ferrières" },
  { file: "ace", alt: "ACE Education" },
  { file: "omnes", alt: "OMNES Education" },
];

/** Logo asset path helper. */
export const logoSrc = (key: string) => `/logos/${key}.png`;
