import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import Nav from "@/components/Nav";
import ContactFooter from "@/components/ContactFooter";
import { SITE } from "@/lib/site";

// Serif headings (roman + italic), body sans, and mono labels — exposed as CSS
// variables that globals.css wires into --serif / --sans / --mono.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const DESCRIPTION =
  "Parv Kaur — Marketing & Management lecturer and Higher Education Consultant across French business schools. BI, digital marketing and organisational behaviour, taught in English & French.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Parv Kaur — Higher Education Consultant",
    template: "%s — Parv Kaur",
  },
  description: DESCRIPTION,
  applicationName: "Parv Kaur",
  authors: [{ name: "Parv Kaur" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Parv Kaur",
    locale: "en_US",
    url: SITE.url,
    title: "Parv Kaur — Higher Education Consultant",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Parv Kaur — Higher Education Consultant",
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8ff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <LocaleProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <ContactFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
