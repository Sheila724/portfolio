import { notFound } from "next/navigation";
import { Contact, Footer } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { dictionaries } from "@/content/dictionary";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { enhanceScript } from "@/lib/enhance";
import { isLocale, tx } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = dictionaries[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role[lang],
    url: `${site.url}/${lang}/`,
    address: { "@type": "PostalAddress", addressLocality: "Franca", addressRegion: "SP", addressCountry: "BR" },
    sameAs: [site.github, site.linkedin],
    alumniOf: { "@type": "CollegeOrUniversity", name: "FATEC Franca" },
    knowsAbout: Array.from(new Set(projects.flatMap((p) => p.stack))),
    subjectOf: projects.map((p) => ({
      "@type": "CreativeWork",
      name: tx(p.name, lang),
      description: p.tagline[lang],
      ...(p.links?.repo ? { url: p.links.repo } : {}),
    })),
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-signal px-4 py-2 font-semibold text-night focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {d.skip}
      </a>
      <Header d={d} locale={lang} />
      <main id="main">
        <Hero d={d} locale={lang} />
        <Projects d={d} locale={lang} />
        <Stack d={d} locale={lang} />
        <Journey d={d} locale={lang} />
        <Contact d={d} />
      </main>
      <Footer d={d} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script id="enhance" dangerouslySetInnerHTML={{ __html: enhanceScript }} />
    </>
  );
}
