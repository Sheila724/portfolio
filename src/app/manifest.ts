import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} | Portfólio`,
    short_name: site.shortName,
    description: site.description.pt,
    lang: "pt-BR",
    start_url: "/pt/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0c131c",
    theme_color: "#0c131c",
    categories: ["portfolio", "developer", "productivity"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Projetos", url: "/pt/#projects" },
      { name: "Projects (English)", url: "/en/#projects" },
    ],
  };
}
