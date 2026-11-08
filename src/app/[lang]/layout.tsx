import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { htmlLang, isLocale, locales } from "@/lib/i18n";
import "../globals.css";

const sans = localFont({
  src: "../../fonts/SchibstedGrotesk-Variable.woff2",
  weight: "400 900",
  variable: "--font-schibsted",
  display: "swap",
});

const mono = localFont({
  src: [
    { path: "../../fonts/MartianMono-400.woff2", weight: "400" },
    { path: "../../fonts/MartianMono-500.woff2", weight: "500" },
  ],
  variable: "--font-martian",
  display: "swap",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const title = `${site.name} | ${site.role[lang]}`;
  return {
    metadataBase: new URL(site.url),
    title,
    description: site.description[lang],
    applicationName: site.shortName,
    authors: [{ name: site.name, url: site.linkedin }],
    alternates: {
      canonical: `/${lang}/`,
      languages: { "pt-BR": "/pt/", en: "/en/", "x-default": "/pt/" },
    },
    openGraph: {
      type: "profile",
      title,
      description: site.description[lang],
      url: `/${lang}/`,
      siteName: site.name,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description: site.description[lang], images: ["/og.png"] },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: "/icons/apple-touch-icon.png",
    },
    appleWebApp: { capable: true, title: site.shortName, statusBarStyle: "black-translucent" },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0c131c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={htmlLang[lang]} className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
