import type { Metadata } from "next";
import VoicesClient from "./VoicesClient";

export const metadata: Metadata = {
  title: "Student Voices",
  description:
    "Feedback from students across French business schools — on data analytics, organisational behaviour and digital marketing.",
  alternates: { canonical: "/voices" },
  openGraph: {
    title: "Student Voices — Parv Kaur",
    description:
      "Feedback from students across French business schools — on data analytics, organisational behaviour and digital marketing.",
    url: "/voices",
  },
};

export default function Page() {
  return <VoicesClient />;
}
