/**
 * Site-wide constants. Edit these in one place.
 */

export const SITE = {
  name: "Parv Kaur",
  /** Used as metadataBase + in sitemap/robots. Update to the real domain after deploy. */
  url: "https://parv-kaur.vercel.app",
  authorTitle: "Higher Education Consultant",
} as const;

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/parv-kaur-dtn-education-a40706145/";

export const EMAIL = "parvk1398@gmail.com";

/** Path the user drops their CV into: public/Parv_KAUR_Resume.pdf */
export const CV_PATH = "/Parv_KAUR_Resume.pdf";

/**
 * TODO (user): paste your Calendly (or other scheduling) URL here.
 * While this is "#", the "Schedule a call" links render but do nothing.
 */
export const CALENDLY_URL = "#";
