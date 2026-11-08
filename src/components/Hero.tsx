import type { Dictionary } from "@/content/dictionary";
import { projects, statusShort } from "@/content/projects";
import { site } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ArrowRight, Lock } from "./icons";

export function Hero({ d, locale }: { d: Dictionary; locale: Locale }) {
  const live = projects.filter((p) => p.status === "live").length;

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="hero-grid" aria-hidden />
      <div className="shell grid gap-14 pt-14 pb-20 md:pt-24 md:pb-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div>
          <h1 className="text-[clamp(3.1rem,8.4vw,6.4rem)] leading-[0.9] font-extrabold tracking-[-0.045em] text-balance">
            Sheila
            <br />
            Alves Araújo
          </h1>
          <p className="mt-6 text-xl font-medium tracking-tight text-paper md:text-2xl">{site.role[locale]}</p>
          <p className="measure mt-5 text-lg text-muted">{d.hero.lead}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              {d.hero.seeProjects}
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              {d.hero.contact}
            </a>
          </div>

          <p className="mt-8 flex items-start gap-2.5 text-sm text-muted">
            <span className="mt-[0.45em] size-2 shrink-0 rounded-full bg-ok shadow-[0_0_0_3px_rgb(63_217_154/0.2)]" aria-hidden />
            <span>
              {site.location[locale]}. {d.hero.availability}
            </span>
          </p>
        </div>

        <StatusBoard d={d} locale={locale} live={live} />
      </div>
    </section>
  );
}

function StatusBoard({ d, locale, live }: { d: Dictionary; locale: Locale; live: number }) {
  return (
    <figure
      className="rounded-2xl border border-cable bg-rack/90 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.8)] backdrop-blur-sm"
      style={{ "--count": projects.length } as React.CSSProperties}
      aria-label={d.board.title}
    >
      <div className="flex items-center justify-between gap-4 border-b border-cable px-5 py-3.5">
        <span className="hidden items-center gap-2 sm:flex" aria-hidden>
          <span className="size-2.5 rounded-full bg-cable-2" />
          <span className="size-2.5 rounded-full bg-cable-2" />
          <span className="size-2.5 rounded-full bg-cable-2" />
        </span>
        <span className="text-sm font-semibold whitespace-nowrap">{d.board.title}</span>
        <span className="board-summary font-mono text-xs whitespace-nowrap text-ok">{d.board.summary(live, projects.length)}</span>
      </div>

      <ul className="py-2 font-mono text-[0.74rem] leading-none">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <button
              type="button"
              popoverTarget={p.slug}
              className="board-row grid w-full cursor-pointer text-left grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-5 py-[0.7rem] transition-colors hover:bg-rack-2 sm:grid-cols-[auto_minmax(0,1fr)_9rem_6.5rem]"
              data-status={p.status}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className="board-dot size-2 rounded-full" aria-hidden />
              <span className="flex min-w-0 items-center gap-2 truncate text-paper">
                <span className="truncate">{p.slug}</span>
                {p.visibility === "private" && <Lock width={12} height={12} className="shrink-0 text-faint" />}
              </span>
              <span className="hidden truncate text-faint sm:block">{p.host[locale]}</span>
              <span className="relative text-right">
                <span className="board-check absolute inset-0 text-faint">{d.board.checking}</span>
                <span className="board-state">{statusShort[p.status][locale]}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <figcaption className="border-t border-cable px-5 py-4 font-mono text-[0.74rem] leading-relaxed">
        <span className="text-signal">{d.board.prompt}</span> <span className="text-paper">{d.board.command}</span>
        <br />
        <span className="text-muted">{d.board.output}</span>
        <span className="caret ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.18em] bg-signal" aria-hidden />
      </figcaption>
    </figure>
  );
}
