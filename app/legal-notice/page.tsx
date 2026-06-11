import type { Metadata } from "next";
import LegalNoticeClient from "./LegalNoticeClient";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice (Mentions légales) for the Parv Kaur portfolio website.",
  alternates: { canonical: "/legal-notice" },
};

export default function Page() {
  return <LegalNoticeClient />;
}
