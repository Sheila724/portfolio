import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { "pt-BR": `${site.url}/pt/`, en: `${site.url}/en/` };
  return [
    { url: `${site.url}/pt/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${site.url}/en/`, changeFrequency: "monthly", priority: 0.8, alternates: { languages } },
  ];
}
