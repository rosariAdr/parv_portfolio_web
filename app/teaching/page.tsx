import type { Metadata } from "next";
import TeachingClient from "./TeachingClient";

export const metadata: Metadata = {
  title: "Teaching",
  description:
    "Curriculums designed for impact — courses taught across French business schools, filterable by level, discipline and institution.",
  alternates: { canonical: "/teaching" },
  openGraph: {
    title: "Teaching — Parv Kaur",
    description:
      "Courses taught across French business schools, filterable by level, discipline and institution.",
    url: "/teaching",
  },
};

export default function Page() {
  return <TeachingClient />;
}
