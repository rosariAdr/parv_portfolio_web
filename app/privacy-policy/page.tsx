import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Parv Kaur portfolio website — data, cookies, local storage and your GDPR rights.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyClient />;
}
