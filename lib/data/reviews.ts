/**
 * Student Voices data — ported verbatim from voices.html.
 * Quotes (`q`) and attributions (`who`) are kept as authored (some are in
 * French); only the header and filter pills are localised, matching the prototype.
 *   cat: "bi" | "ob" | "mkt"  (keys into CAT)
 *   inst: key into INST  (logo at /logos/<inst>.png)
 */

export type ReviewCat = "bi" | "ob" | "mkt";

export interface Review {
  cat: ReviewCat;
  inst: string;
  who: string;
  q: string;
}

/** Category key -> { short label, colour tag }. Labels stay English (as in the prototype). */
export const CAT: Record<ReviewCat, { l: string; c: string }> = {
  bi: { l: "BI & Data", c: "#3a6ea5" },
  ob: { l: "OB & Talent", c: "#3f7d56" },
  mkt: { l: "Marketing & Brand", c: "#b0792a" },
};

/** Institution key -> display name (logo alt). */
export const INST: Record<string, string> = {
  idrac: "IDRAC",
  "iae-lille": "IAE Lille",
  gema: "GEMA",
  "esc-amiens": "ESC Amiens",
  "paris-saclay": "Université Paris-Saclay",
  rennes: "Rennes School of Business",
  cmh: "CMH",
  ilci: "ILCI",
  iscom: "ISCOM",
  amos: "AMOS",
};

export const REVIEWS: Review[] = [
  { cat: "bi", inst: "idrac", who: "Student, IDRAC Business School", q: "This is the first time I enjoy learning and doing Advanced Excel. You took your time explaining everything from A to Z, and re-explained whenever we needed. Thank you." },
  { cat: "bi", inst: "iae-lille", who: "Student, IAE Lille", q: "Every class was very good — the teacher was very understanding and explained things to each and every one of us individually." },
  { cat: "bi", inst: "gema", who: "Student, GEMA", q: "The course was amazing and really interesting. It was great to learn things that will help us in the future for our professional life. It was a pleasure to attend your class — I wish you all the best!" },
  { cat: "bi", inst: "esc-amiens", who: "Student, ESC Amiens", q: "I really enjoyed the course. It wasn't the easiest one, but you always took the time to answer our questions and provide thorough explanations." },
  { cat: "bi", inst: "paris-saclay", who: "Student, Université Paris-Saclay", q: "Thank you for the Excel and Tableau course. I really appreciated the structured approach you took in breaking down the concepts, making them both accessible and practical. The hands-on exercises were especially helpful, and I feel much more confident applying Excel in real-world scenarios." },
  { cat: "ob", inst: "rennes", who: "Student, Rennes School of Business", q: "Ms. Kaur is very kind and clear in her comments. Her feedback is relevant and she is very patient with the students." },
  { cat: "ob", inst: "cmh", who: "Student, CMH", q: "Openness and diversity — she handles every opinion and question really well. I also appreciated how energetic and animated the professor was." },
  { cat: "ob", inst: "rennes", who: "Student, Rennes School of Business", q: "The teacher was very engaged in discussions with us. She's very approachable, and that made it easier to engage with the class." },
  { cat: "ob", inst: "ilci", who: "Student, ILCI Business School", q: "The teacher is great, motivating, and knows her subject very well. She managed to capture my attention even when I didn't find the topic particularly interesting." },
  { cat: "ob", inst: "rennes", who: "Student, Rennes School of Business", q: "Her excellent command of English and her use of games and other external resources served brilliantly as instructional materials." },
  { cat: "mkt", inst: "iscom", who: "Student, ISCOM", q: "La prof est gentille, elle a une vraie pédagogie de travail. J'ai appris beaucoup de choses." },
  { cat: "mkt", inst: "amos", who: "Student, AMOS", q: "You made me love marketing more! Your class is so fun — I can never get bored, since you always find ways to entertain while teaching. Thank you." },
  { cat: "mkt", inst: "cmh", who: "Student, CMH", q: "Le cours était intéressant ! Et vous êtes très gentille et aimable. Merci :)" },
  { cat: "mkt", inst: "gema", who: "Student, GEMA", q: "You are doing very well, keep going. I was very glad to have your point of view on these different subjects — I really learned something and it was very interesting!" },
  { cat: "mkt", inst: "iscom", who: "Student, ISCOM", q: "It was amazing — I learned a lot from the course. Also, thank you for the advice on student life in France." },
];
