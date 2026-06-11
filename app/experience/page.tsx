import type { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience — from market research at AVIV Group and Helvetia to higher-education consulting and founding the SEVA NGO.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience — Parv Kaur",
    description:
      "From market research at AVIV Group and Helvetia to higher-education consulting and founding the SEVA NGO.",
    url: "/experience",
  },
};

export default function Page() {
  return <ExperienceClient />;
}
