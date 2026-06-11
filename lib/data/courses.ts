/**
 * Teaching data — ported verbatim from teaching.html.
 * Order is preserved so pagination matches the prototype.
 *   lvl: "bachelor" | "master" | "mba"
 *   disc: "bi" | "ob" | "dm"  (keys into DISC)
 *   inst: key into INSTS  (logo at /logos/<inst>.png)
 */

export type Level = "bachelor" | "master" | "mba";
export type Discipline = "bi" | "ob" | "dm";

export interface Course {
  t: string;
  lvl: Level;
  disc: Discipline;
  inst: string;
}

/** Institution key -> display name. */
export const INSTS: Record<string, string> = {
  rennes: "Rennes School of Business",
  inseec: "INSEEC Paris",
  "paris-saclay": "Université Paris-Saclay",
  "iae-lille": "IAE Lille",
  ascencia: "Collège de Paris — Ascencia",
  ferrieres: "École Ferrières",
  ilci: "ILCI Business School",
  ifag: "IFAG",
  idrac: "IDRAC Business School",
  gema: "GEMA Business School",
  "esg-luxe": "ESG Luxe",
  "esc-amiens": "ESC Amiens",
  iscom: "ISCOM",
  amos: "AMOS",
  icd: "ICD Business School",
  eidm: "EIDM Fashion Business School",
  cmh: "CMH",
};

/** Discipline key -> { label, colour dot }. Labels stay English (as in the prototype). */
export const DISC: Record<Discipline, { l: string; c: string }> = {
  bi: { l: "BI & Data Analytics", c: "#3a6ea5" },
  ob: { l: "OB & Talent Management", c: "#3f7d56" },
  dm: { l: "Digital Marketing & Brand", c: "#b0792a" },
};

export const COURSES: Course[] = [
  // Rennes School of Business
  { t: "Management and Sustainable Leadership", lvl: "bachelor", disc: "ob", inst: "rennes" },
  { t: "Organizational Behavior", lvl: "bachelor", disc: "ob", inst: "rennes" },
  { t: "Project Management", lvl: "master", disc: "ob", inst: "rennes" },
  { t: "Unframed Thinking and Collaborative Learning", lvl: "master", disc: "ob", inst: "rennes" },
  // INSEEC Paris
  { t: "Advanced Research — Qualitative and Quantitative", lvl: "master", disc: "bi", inst: "inseec" },
  // Université Paris-Saclay
  { t: "CRM and Database Management", lvl: "master", disc: "bi", inst: "paris-saclay" },
  { t: "Advanced Excel and VBA", lvl: "master", disc: "bi", inst: "paris-saclay" },
  // IAE Lille
  { t: "IT and Database Management", lvl: "master", disc: "bi", inst: "iae-lille" },
  { t: "Machine Learning and Data Analytics", lvl: "master", disc: "bi", inst: "iae-lille" },
  // Collège de Paris — Ascencia
  { t: "MACRO / VBA in Excel", lvl: "master", disc: "bi", inst: "ascencia" },
  { t: "Power BI and Applied Excel", lvl: "master", disc: "bi", inst: "ascencia" },
  { t: "Excel applied on Purchases and Statistics", lvl: "master", disc: "bi", inst: "ascencia" },
  { t: "Data-driven Commercial", lvl: "master", disc: "bi", inst: "ascencia" },
  { t: "Data-driven Marketing", lvl: "master", disc: "dm", inst: "ascencia" },
  { t: "Content Marketing", lvl: "master", disc: "dm", inst: "ascencia" },
  { t: "Marketing and Communication Strategy", lvl: "master", disc: "dm", inst: "ascencia" },
  { t: "Marketing Development", lvl: "master", disc: "dm", inst: "ascencia" },
  { t: "Team Management", lvl: "master", disc: "ob", inst: "ascencia" },
  { t: "Leadership and Coaching", lvl: "master", disc: "ob", inst: "ascencia" },
  { t: "Business Relationship", lvl: "bachelor", disc: "ob", inst: "ascencia" },
  { t: "English for Business and Finance", lvl: "bachelor", disc: "ob", inst: "ascencia" },
  // École Ferrières
  { t: "CRM and Database Management", lvl: "master", disc: "bi", inst: "ferrieres" },
  { t: "Innovation Management", lvl: "master", disc: "ob", inst: "ferrieres" },
  { t: "Hospitality Marketing", lvl: "master", disc: "dm", inst: "ferrieres" },
  // ILCI Business School
  { t: "Data Analytics", lvl: "bachelor", disc: "bi", inst: "ilci" },
  { t: "Expérience et parcours clientèle", lvl: "bachelor", disc: "dm", inst: "ilci" },
  { t: "Consumer Behaviour", lvl: "bachelor", disc: "dm", inst: "ilci" },
  // IFAG
  { t: "Market Research and Analysis", lvl: "mba", disc: "bi", inst: "ifag" },
  { t: "Sustainable Leadership (Case of NGO SEVA)", lvl: "mba", disc: "ob", inst: "ifag" },
  { t: "Social Marketing", lvl: "mba", disc: "dm", inst: "ifag" },
  // IDRAC Business School
  { t: "Sales Analytics", lvl: "bachelor", disc: "bi", inst: "idrac" },
  { t: "Geopolitics", lvl: "bachelor", disc: "ob", inst: "idrac" },
  { t: "International Relations", lvl: "bachelor", disc: "ob", inst: "idrac" },
  // GEMA Business School
  { t: "Big Data Management", lvl: "master", disc: "bi", inst: "gema" },
  { t: "Machine Learning", lvl: "master", disc: "bi", inst: "gema" },
  // ESG Luxe
  { t: "Diagnostic d'entreprise — Techniques Quantitatives", lvl: "master", disc: "bi", inst: "esg-luxe" },
  // ESC Amiens
  { t: "Intercultural Management", lvl: "master", disc: "ob", inst: "esc-amiens" },
  { t: "Outils numériques pour la prise de décision", lvl: "master", disc: "bi", inst: "esc-amiens" },
  // ISCOM
  { t: "Social Media Marketing and Communication", lvl: "bachelor", disc: "dm", inst: "iscom" },
  { t: "Foundations of Social Media", lvl: "bachelor", disc: "dm", inst: "iscom" },
  { t: "Project Micro Agency", lvl: "bachelor", disc: "dm", inst: "iscom" },
  { t: "Professional Mission", lvl: "bachelor", disc: "ob", inst: "iscom" },
  { t: "Excel for Business", lvl: "bachelor", disc: "bi", inst: "iscom" },
  // AMOS
  { t: "Retail and Distribution", lvl: "master", disc: "ob", inst: "amos" },
  { t: "Supply Chain Management", lvl: "master", disc: "ob", inst: "amos" },
  { t: "Sustainability", lvl: "bachelor", disc: "ob", inst: "amos" },
  { t: "Digital Marketing", lvl: "bachelor", disc: "dm", inst: "amos" },
  { t: "SEO and SEM", lvl: "bachelor", disc: "dm", inst: "amos" },
  { t: "Introduction to Scientific Research", lvl: "bachelor", disc: "bi", inst: "amos" },
  // ICD Business School
  { t: "English for Business and Finance", lvl: "master", disc: "ob", inst: "icd" },
  { t: "Excel for Business", lvl: "master", disc: "bi", inst: "icd" },
  { t: "Advanced Excel for Business", lvl: "master", disc: "bi", inst: "icd" },
  { t: "Performance Management", lvl: "master", disc: "ob", inst: "icd" },
  { t: "Market Research", lvl: "master", disc: "bi", inst: "icd" },
  { t: "Market Operations", lvl: "master", disc: "dm", inst: "icd" },
  { t: "Sustainability", lvl: "master", disc: "ob", inst: "icd" },
  { t: "Advanced Data Modelling", lvl: "master", disc: "bi", inst: "icd" },
  { t: "Marketing Function", lvl: "master", disc: "dm", inst: "icd" },
  { t: "Social Media and Influence Strategies", lvl: "master", disc: "dm", inst: "icd" },
  { t: "International Event Management", lvl: "bachelor", disc: "ob", inst: "icd" },
  { t: "Event Designing and Planning", lvl: "bachelor", disc: "ob", inst: "icd" },
  { t: "Economics for the 21st Century", lvl: "bachelor", disc: "ob", inst: "icd" },
  // EIDM Fashion Business School
  { t: "COIL — Collaborative Online International Learning (Utrecht University)", lvl: "bachelor", disc: "ob", inst: "eidm" },
  { t: "International Project Management", lvl: "bachelor", disc: "ob", inst: "eidm" },
  { t: "Digital Branding", lvl: "master", disc: "dm", inst: "eidm" },
  { t: "Community Management and Social Media", lvl: "master", disc: "dm", inst: "eidm" },
  { t: "Intercultural Communication", lvl: "master", disc: "ob", inst: "eidm" },
  { t: "Purchasing and Sourcing", lvl: "master", disc: "ob", inst: "eidm" },
  { t: "Event Management", lvl: "bachelor", disc: "ob", inst: "eidm" },
  // CMH
  { t: "Power BI and Tableau", lvl: "master", disc: "bi", inst: "cmh" },
  { t: "Digital Case", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Web Marketing & Digital Communication", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Community Management & Social Media", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Communication and Event Management", lvl: "master", disc: "ob", inst: "cmh" },
  { t: "Public Relations and Press Releases", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Communication Strategies for Hospitality", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "CRM and Database Management", lvl: "master", disc: "bi", inst: "cmh" },
  { t: "Strategic Marketing", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Operational Marketing", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "E-Marketing", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "B2B Marketing", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Service Marketing", lvl: "master", disc: "dm", inst: "cmh" },
  { t: "Advanced Excel for Business", lvl: "master", disc: "bi", inst: "cmh" },
];
