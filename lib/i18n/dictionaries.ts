/**
 * EN/FR copy dictionaries.
 *
 * EN values are the in-markup defaults from the prototype; FR values are lifted
 * verbatim from each page's `window.I18N_FR`. Shared keys (nav.*, contact.*,
 * form.*, footer.*) are consolidated here once.
 *
 * Some values contain trusted, **static** inline HTML (<em>, <strong>, <br>,
 * <a>, <span class="at">). These are rendered with `rich()` (see useI18n) — never
 * with user input — so dangerouslySetInnerHTML is safe here. Plain-text keys are
 * rendered with `t()` and store decoded characters (e.g. "&" not "&amp;").
 */

export type Locale = "en" | "fr";
export type Dict = Record<string, string>;

const en: Dict = {
  // ---- Nav (shared) ----
  "nav.home": "Home",
  "nav.experience": "Experience",
  "nav.teaching": "Teaching",
  "nav.voices": "Student Voices",
  "nav.about": "About",
  "nav.cta": "Get in touch",

  // ---- Contact + form + footer (shared) ----
  "contact.title": `Let's discuss the<br /><em>future of learning.</em>`,
  "contact.email": "Email ↗",
  "contact.calendly": "Schedule a call",
  "form.name": "Name",
  "form.email": "Email address",
  "form.msg": "Message",
  "form.send": "Send message",
  "form.name.ph": "Your name",
  "form.email.ph": "you@institution.com",
  "form.msg.ph": "How can I help your programme?",
  "footer.gdpr": `In accordance with the GDPR and the French Loi Informatique et Libertés of 6 January 1978 (as amended), you have the right to access, rectify, port and erase any personal data you provide via this site, and to restrict or object to its processing. To exercise these rights or for any privacy enquiry, contact <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>. No data submitted through the contact form is shared with third parties. This site does not use tracking cookies.`,
  "footer.mentions": "Legal notice",
  "footer.privacy": "Privacy policy",

  // ---- Home ----
  "hero.role": "Higher Education Consultant",
  "hero.title": `Bridging <em>data, strategy</em> and the classroom across French business schools.`,
  "hero.lead":
    "Marketing & Management lecturer since 2022 — teaching BI, digital marketing and organisational behaviour at undergraduate, master and MBA levels.",
  "hero.cta1": "Get in touch",
  "hero.cta2": "Download CV",
  "stat.years": "Years teaching",
  "stat.inst": "Institutions",
  "stat.curr": "Curriculums",
  "stat.theses": "Theses guided",
  "hero.chip": "Courses delivered in English & French",
  "logos.label": "Taught at more than 20 institutions across France",
  "quote.text": `&ldquo;The course was amazing and really interesting. It was great to learn things that will help us in the future for our <em>professional life</em>. It was a pleasure to attend your class.&rdquo;`,
  "quote.cite": "— Student, GEMA Business School",
  "quote.link": "Read all student voices",
  "featured.title": "Featured Curriculum & Student Feedback",
  "fcard1.title": "IT & Database Management",
  "fcard1.text":
    "“I really appreciated the structured approach you took in breaking down the concepts, making them both accessible and practical. The hands-on exercises were especially helpful — I feel much more confident applying Excel in real-world scenarios.”",
  "fcard2.title": "Organisational Behaviour",
  "fcard2.text":
    "“She is open to hearing about us, from us, and the course is open to debate. She genuinely tries to understand how and why we think a certain way. Her dynamism shows in how easily she moves between theory and practical games.”",
  "fcard3.title": "Digital & Project Management",
  "fcard3.text":
    "“You're very helpful and supportive, and your teaching method works very well. Thanks to the course I came to know much more about digital marketing and the strategies behind it.”",

  // ---- Experience ----
  "exp.title": "Experience",
  "about.cv": "Download complete CV",
  "exp.p1": "2024 — Present",
  "exp.p2": "2023 — Present",
  "exp.p3": "2022 — 2023",
  "exp.p4": "2021 — 2022",
  "exp.r1": `Founder <span class="at">· Solidarité et Engagement pour un Avenir (SEVA)</span>`,
  "exp.r1a": `Partnering directly with the <strong>Indian Embassy in France</strong> to design events and workshops helping international students navigate cultural and linguistic challenges.`,
  "exp.r1b": `Building career pathways and facilitating integration into the French professional landscape through language adaptation and cultural mediation.`,
  "exp.r1c": `<strong>Delivering luxury-industry networking opportunities</strong> and specialised workshops.`,
  "exp.r1d": `Designing and delivering technical bootcamps in <strong>Power BI and SQL</strong> to upskill students in data tools and bridge them into the French job market.`,
  "exp.r2": `Higher Education Consultant <span class="at">at 17+ institutions</span>`,
  "exp.r2a": `<strong>Lecturer across 17 business schools</strong> teaching BI, data analytics, digital marketing and brand strategy.`,
  "exp.r2b": `Instruction delivered at undergraduate, master and MBA levels, in both English and French.`,
  "exp.r2c": `Key institutions: <strong>Rennes School of Business, INSEEC, Paris-Saclay, IAE, EM Normandie</strong> and others.`,
  "exp.r2d": `<strong>Master's thesis supervisor for 30+ students</strong> on AI, machine learning and digital transformation.`,
  "exp.r2e": `Recurring jury member for graduating projects and bachelor's dissertations.`,
  "exp.r3": `Market Researcher <span class="at">at AVIV Group</span>`,
  "exp.r3a": `<strong>Extracted and analysed data via SQL</strong> (internal databases) and built <strong>Power BI dashboards</strong> to track brand image and user profiling for the AVIV Group (Meilleurs Agents, SeLoger) — covering multiple market segments across France.`,
  "exp.r3b": `Conducted <strong>quantitative and qualitative market research</strong> in collaboration with the Brand, Product and Operations teams, delivering insights as visual Power BI reports presented in steering committees.`,
  "exp.r3c": `Formulated <strong>data-driven operational recommendations</strong>, contributing to the optimisation of the group's positioning strategy and improved cross-team decision-making.`,
  "exp.r4": `Market Research Analyst <span class="at">at Helvetia</span>`,
  "exp.r4a": `Contributed to the creation of Helvetia's official <strong>“Connecter” platform</strong>.`,
  "exp.r4b": `Conducted <strong>in-depth market research on the European education sector</strong>, presenting findings via Microsoft Power BI.`,
  "exp.r4c": `Managed client feedback and helped resolve software issues, contributing to a <strong>16% increase in sales</strong>.`,
  "exp.place.seva": "Paris, France",

  // ---- Teaching ----
  "teach.kicker": "Curriculum",
  "teach.title": `Curriculums designed for <em>impact.</em>`,
  "teach.lead":
    "A selection of courses delivered across French business schools — filter by level, discipline or institution.",
  "teach.level": "Level",
  "teach.all": "All",
  "teach.bachelor": "Bachelor",
  "teach.master": "Master",
  "teach.disc": "Discipline",
  "teach.ob": "OB & Talent Management",
  "teach.dm": "Digital Marketing & Brand",
  "teach.inst": "Institution",
  // dynamic count + pager + level badges
  "teach.empty": "No courses match these filters.",
  "teach.showing": "Showing ",
  "teach.of": " of ",
  "teach.coursesWord": " courses",
  "teach.lvl.bachelor": "Bachelors",
  "teach.lvl.master": "Masters",
  "teach.lvl.mba": "MBA",
  "teach.prev": "Prev",
  "teach.next": "Next",

  // ---- Voices ----
  "voices.kicker": "Student Feedback",
  "voices.title": `Student <em>Voices</em>`,
  "voices.lead": "Unedited feedback from students across institutions and disciplines.",
  "voices.ob": "OB & Talent Management",
  "voices.mkt": "Digital Marketing & Brand",

  // ---- About ----
  "about.kicker": "Biography",
  "about.title": `Where <em>data</em> meets <em>marketing</em> — taught with rigour and warmth.`,
  "about.bio": `My background as a <strong>Market Research Analyst</strong> at AVIV Group and Helvetia Education Group sharpened my eye for the systemic problems international students face — gaps that pushed me into higher education. In 2024 I co-founded <strong>SEVA</strong>, an NGO partnering with embassies to run integration events, career counselling and tech bootcamps for international students across France.`,
  "about.edu": "Education",
  "about.edu1": "Master's in Research & Data Intelligence",
  "about.edu2": "MBA in Entrepreneurship & Management",
  "about.edu3school": "University of Delhi",
  "about.edu3": "Bachelor of Commerce + Diploma in French Language",
  "about.lang": "Languages",
  "about.langcard.t": "English & French",
  "about.langcard.p":
    "Lectures, course materials and thesis supervision available in both languages.",
  "about.certs": "Certifications",
  "about.cert3": "Business Analytics",
};

const fr: Dict = {
  // ---- Nav (shared) ----
  "nav.home": "Accueil",
  "nav.experience": "Parcours",
  "nav.teaching": "Enseignement",
  "nav.voices": "Témoignages",
  "nav.about": "À propos",
  "nav.cta": "Me contacter",

  // ---- Contact + form + footer (shared) ----
  "contact.title": `Parlons de<br /><em>l'avenir de l'apprentissage.</em>`,
  "contact.email": "E-mail ↗",
  "contact.calendly": "Réserver un appel",
  "form.name": "Nom",
  "form.email": "Adresse e-mail",
  "form.msg": "Message",
  "form.send": "Envoyer le message",
  "form.name.ph": "Votre nom",
  "form.email.ph": "vous@etablissement.com",
  "form.msg.ph": "Comment puis-je aider votre programme ?",
  "footer.gdpr": `Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles communiquées via ce site, ainsi que d'un droit à la limitation et d'opposition au traitement. Pour exercer ces droits ou pour toute question relative à la confidentialité, contactez <a href="mailto:parvk1398@gmail.com">parvk1398@gmail.com</a>. Aucune donnée transmise via le formulaire de contact n'est partagée avec des tiers. Ce site n'utilise pas de cookies de suivi.`,
  "footer.mentions": "Mentions légales",
  "footer.privacy": "Politique de confidentialité",

  // ---- Home ----
  "hero.role": "Consultante en enseignement supérieur",
  "hero.title": `Relier les <em>données, la stratégie</em> et la salle de classe dans les écoles de commerce françaises.`,
  "hero.lead":
    "Enseignante en marketing et management depuis 2022 — BI, marketing digital et comportement organisationnel, des niveaux licence et master au MBA.",
  "hero.cta1": "Me contacter",
  "hero.cta2": "Télécharger le CV",
  "stat.years": "Ans d'enseignement",
  "stat.inst": "Établissements",
  "stat.curr": "Programmes",
  "stat.theses": "Mémoires encadrés",
  "hero.chip": "Cours dispensés en anglais & français",
  "logos.label": "Enseigne dans plus de 20 établissements en France",
  "quote.text": `&ldquo;Le cours était passionnant. C'était formidable d'apprendre des choses qui nous serviront pour notre <em>vie professionnelle</em>. Un vrai plaisir d'assister à votre classe.&rdquo;`,
  "quote.cite": "— Étudiant, GEMA Business School",
  "quote.link": "Lire tous les témoignages",
  "featured.title": "Programme en Vedette et Feedback Étudiant",
  "fcard1.title": "Informatique & gestion de bases de données",
  "fcard1.text":
    "« J'ai beaucoup apprécié l'approche structurée pour décomposer les concepts, à la fois accessibles et concrets. Les exercices pratiques ont été très utiles — je suis bien plus à l'aise pour utiliser Excel dans des cas réels. »",
  "fcard2.title": "Comportement organisationnel",
  "fcard2.text":
    "« Elle est à l'écoute de nous, vraiment, et le cours est ouvert au débat. Elle cherche sincèrement à comprendre comment et pourquoi nous pensons ainsi. Son dynamisme se voit dans sa facilité à passer de la théorie aux jeux pratiques. »",
  "fcard3.title": "Marketing digital & gestion de projet",
  "fcard3.text":
    "« Vous êtes très disponible et bienveillante, et votre méthode d'enseignement fonctionne très bien. Grâce au cours, j'ai découvert bien plus sur le marketing digital et ses stratégies. »",

  // ---- Experience ----
  "exp.title": "Parcours",
  "about.cv": "Télécharger le CV complet",
  "exp.p1": "2024 — Présent",
  "exp.p2": "2023 — Présent",
  "exp.p3": "2022 — 2023",
  "exp.p4": "2021 — 2022",
  "exp.r1": `Fondatrice <span class="at">· Solidarité et Engagement pour un Avenir (SEVA)</span>`,
  "exp.r1a": `Partenariat direct avec l'<strong>ambassade d'Inde en France</strong> pour concevoir des événements et ateliers aidant les étudiants internationaux à relever les défis culturels et linguistiques.`,
  "exp.r1b": `Construction de parcours professionnels et accompagnement de l'intégration dans le paysage professionnel français par l'adaptation linguistique et la médiation culturelle.`,
  "exp.r1c": `<strong>Opportunités de réseautage dans l'industrie du luxe</strong> et ateliers spécialisés.`,
  "exp.r1d": `Conception et animation de bootcamps techniques en <strong>Power BI et SQL</strong> pour former les étudiants aux outils de données et faciliter leur entrée sur le marché du travail français.`,
  "exp.r2": `Consultante en enseignement supérieur <span class="at">dans plus de 17 établissements</span>`,
  "exp.r2a": `<strong>Enseignante dans 17 écoles de commerce</strong> en BI, data analytics, marketing digital et stratégie de marque.`,
  "exp.r2b": `Cours dispensés aux niveaux licence, master et MBA, en anglais et en français.`,
  "exp.r2c": `Établissements clés : <strong>Rennes School of Business, INSEEC, Paris-Saclay, IAE, EM Normandie</strong> et d'autres.`,
  "exp.r2d": `<strong>Directrice de mémoires pour plus de 30 étudiants</strong> sur l'IA, le machine learning et la transformation numérique.`,
  "exp.r2e": `Membre régulier de jurys pour les projets de fin d'études et les mémoires de licence.`,
  "exp.r3": `Chargée d'études de marché <span class="at">chez AVIV Group</span>`,
  "exp.r3a": `<strong>Extraction et analyse de données via SQL</strong> (bases de données internes) et conception de <strong>tableaux de bord Power BI</strong> pour le suivi de l'image de marque et le profilage des utilisateurs du Groupe AVIV (Meilleurs Agents, SeLoger) — couvrant plusieurs segments de marché sur le territoire français.`,
  "exp.r3b": `Conduite d'<strong>études de marché quantitatives et qualitatives</strong> en collaboration avec les équipes Marque, Produit et Opérations, avec restitution des insights sous forme de rapports visuels Power BI présentés en comité de pilotage.`,
  "exp.r3c": `Formulation de <strong>recommandations opérationnelles fondées sur l'analyse de données</strong>, contribuant à l'optimisation de la stratégie de positionnement du groupe et à l'amélioration de la prise de décision cross-équipes.`,
  "exp.r4": `Analyste d'études de marché <span class="at">chez Helvetia</span>`,
  "exp.r4a": `Contribution à la création de la <strong>plateforme officielle « Connecter »</strong> d'Helvetia.`,
  "exp.r4b": `Réalisation d'une <strong>étude de marché approfondie sur le secteur éducatif en Europe</strong>, avec présentation des résultats via Microsoft Power BI.`,
  "exp.r4c": `Gestion des retours clients et participation à la résolution de problèmes logiciels, contribuant à une <strong>augmentation des ventes de 16 %</strong>.`,
  "exp.place.seva": "Paris, France",

  // ---- Teaching ----
  "teach.kicker": "Programmes",
  "teach.title": `Des programmes conçus pour <em>l'impact.</em>`,
  "teach.lead":
    "L'ensemble des cours dispensés dans les écoles de commerce françaises — filtrez par niveau, discipline ou établissement.",
  "teach.level": "Niveau",
  "teach.all": "Tous",
  "teach.bachelor": "Licence",
  "teach.master": "Master",
  "teach.disc": "Discipline",
  "teach.ob": "Comportement & talents",
  "teach.dm": "Marketing digital & marque",
  "teach.inst": "Établissement",
  "teach.empty": "Aucun cours ne correspond à ces filtres.",
  "teach.showing": "Affichage de ",
  "teach.of": " sur ",
  "teach.coursesWord": " cours",
  "teach.lvl.bachelor": "Licence",
  "teach.lvl.master": "Master",
  "teach.lvl.mba": "MBA",
  "teach.prev": "Préc.",
  "teach.next": "Suiv.",

  // ---- Voices ----
  "voices.kicker": "Retours d'étudiants",
  "voices.title": `Paroles d'<em>étudiants</em>`,
  "voices.lead": "Retours bruts d'étudiants de divers établissements et disciplines.",
  "voices.ob": "Comportement & talents",
  "voices.mkt": "Marketing digital & marque",

  // ---- About ----
  "about.kicker": "Biographie",
  "about.title": `Là où la <em>donnée</em> rencontre le <em>marketing</em> — enseigné avec rigueur et bienveillance.`,
  "about.bio": `Mon parcours d'<strong>analyste d'études de marché</strong> chez AVIV Group et Helvetia Education Group a aiguisé mon regard sur les problèmes systémiques que rencontrent les étudiants internationaux — des lacunes qui m'ont menée vers l'enseignement supérieur. En 2024, j'ai cofondé <strong>SEVA</strong>, une ONG partenaire d'ambassades qui organise des événements d'intégration, du conseil en carrière et des bootcamps technologiques pour les étudiants internationaux partout en France.`,
  "about.edu": "Formation",
  "about.edu1": "Master en recherche & intelligence des données",
  "about.edu2": "MBA en entrepreneuriat & management",
  "about.edu3school": "Université de Delhi",
  "about.edu3": "Licence de commerce + diplôme de langue française",
  "about.lang": "Langues",
  "about.langcard.t": "Anglais & français",
  "about.langcard.p":
    "Cours, supports pédagogiques et encadrement de mémoires disponibles dans les deux langues.",
  "about.certs": "Certifications",
  "about.cert3": "Business Analytics",
};

export const dictionaries: Record<Locale, Dict> = { en, fr };
