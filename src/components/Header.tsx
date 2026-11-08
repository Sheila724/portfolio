import type { Dictionary } from "@/content/dictionary";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { Close, Mark, MenuIcon } from "./icons";

export function Header({ d, locale }: { d: Dictionary; locale: Locale }) {
  const other: Locale = locale === "pt" ? "en" : "pt";
  const links = [
    { href: "#projects", label: d.nav.projects },
    { href: "#stack", label: d.nav.stack },
    { href: "#journey", label: d.nav.journey },
    { href: "#contact", label: d.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-cable/70 bg-night/80 backdrop-blur-md supports-[backdrop-filter]:bg-night/65">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3 rounded-md font-semibold tracking-tight">
          <Mark />
          <span>{site.shortName}</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="rounded-md px-3 py-2 transition-colors hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`../${other}/`}
            hrefLang={other === "pt" ? "pt-BR" : "en"}
            lang={other === "pt" ? "pt-BR" : "en"}
            aria-label={d.switchLabel}
            className="rounded-md border border-cable-2 px-3 py-1.5 text-sm text-muted transition-colors hover:border-signal hover:text-signal"
            data-lang-switch
          >
            {d.switchTo}
          </a>
          <button
            type="button"
            popoverTarget="menu"
            className="grid size-10 place-items-center rounded-md text-paper md:hidden"
            aria-label={d.nav.menu}
          >
            <MenuIcon width={22} height={22} />
          </button>
        </div>
      </div>

      <div id="menu" popover="auto" className="menu md:hidden" aria-label={d.nav.menu}>
        <div className="shell flex h-16 items-center justify-between">
          <span className="flex items-center gap-3 font-semibold tracking-tight">
            <Mark />
            {site.shortName}
          </span>
          <button
            type="button"
            popoverTarget="menu"
            popoverTargetAction="hide"
            className="grid size-10 place-items-center rounded-md"
            aria-label={d.nav.close}
          >
            <Close width={22} height={22} />
          </button>
        </div>
        <nav aria-label="Menu" className="shell pt-8">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-cable">
                <a href={l.href} data-close-menu className="block py-5 text-2xl font-semibold tracking-tight">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
