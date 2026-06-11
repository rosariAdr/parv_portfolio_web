import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Parv Kaur — from market research to the higher-education classroom. Education, languages and certifications.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Parv Kaur",
    description:
      "From market research to the higher-education classroom. Education, languages and certifications.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
