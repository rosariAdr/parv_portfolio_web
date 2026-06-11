import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/experience", priority: 0.8 },
    { path: "/teaching", priority: 0.8 },
    { path: "/voices", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/legal-notice", priority: 0.3 },
    { path: "/privacy-policy", priority: 0.3 },
  ];
  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
