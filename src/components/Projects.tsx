import type { Dictionary } from "@/content/dictionary";
import { featuredProjects, otherProjects, type Project, statusLabel } from "@/content/projects";
import { type Locale, tx } from "@/lib/i18n";
import { ArrowRight, ArrowUpRight, Close, GitHub, Lock } from "./icons";
import { academicProjects } from "@/content/academic";
import { FleetArt, GlobeArt, PetArt, TerminalArt } from "./ProjectArt";

export function Projects({ d, locale }: { d: Dictionary; locale: Locale }) {
  const wide = featuredProjects.filter((p) => p.featured === "globe" || p.featured === "pet");
  const pair = featuredProjects.filter((p) => p.featured === "terminal" || p.featured === "fleet");
  const [first, second] = wide;

  return (
    <section id="projects" aria-labelledby="projects-title" className="shell py-20 md:py-28">
      <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-end">
        <h2 id="projects-title" className="text-3xl font-bold tracking-[-0.03em] md:text-[3.2rem] md:leading-none">
          {d.projects.title}
        </h2>
        <p className="measure text-muted md:justify-self-end">{d.projects.intro}</p>
      </div>

      {first && <LeadProject p={first} d={d} locale={locale} className="mt-14" />}

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {pair.map((p) => (
          <FeaturedProject key={p.slug} p={p} d={d} locale={locale} />
        ))}
      </div>

      {second && <LeadProject p={second} d={d} locale={locale} className="mt-5" reverse />}

      <h3 className="mt-20 text-xl font-semibold tracking-tight">{d.projects.more}</h3>
      <ul className="mt-5 border-t border-cable">
        {otherProjects.map((p) => (
          <li key={p.slug} className="border-b border-cable">
            <button
              type="button"
              popoverTarget={p.slug}
              className="row-trigger grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 px-1 py-5 text-left md:grid-cols-[19rem_minmax(0,1fr)_auto] md:px-4"
            >
              <span className="flex items-center gap-2.5 font-semibold">
                <StatusDot status={p.status} />
                {tx(p.name, locale)}
              </span>
              <span className="col-span-2 row-start-2 text-sm text-muted md:col-span-1 md:row-start-auto">
                {p.tagline[locale]}
              </span>
              <ArrowRight className="row-arrow col-start-2 row-start-1 text-faint md:col-start-auto md:row-start-auto" />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-20 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-end">
        <h3 className="text-xl font-semibold tracking-tight">{d.projects.academic}</h3>
        <p className="measure text-sm text-muted md:justify-self-end">{d.projects.academicIntro}</p>
      </div>
      <ul className="mt-6 grid gap-x-10 border-t border-cable md:grid-cols-2">
        {academicProjects.map((a) => (
          <li key={a.repo} className="border-b border-cable">
            <a
              href={a.repo}
              target="_blank"
              rel="noreferrer"
              className="row-trigger group grid h-full grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-2 px-1 py-5 md:px-3"
            >
              <span className="font-semibold">
                {a.name[locale]}
                {a.team && <span className="ml-2 text-xs font-normal text-faint">{d.projects.team}</span>}
              </span>
              <ArrowUpRight className="row-arrow text-faint" width={16} height={16} />
              <span className="col-span-2 text-sm text-muted">{a.summary[locale]}</span>
              <span className="col-span-2 font-mono text-[0.68rem] text-faint">{a.stack.join("  /  ")}</span>
            </a>
          </li>
        ))}
      </ul>

      {[...featuredProjects, ...otherProjects].map((p) => (
        <ProjectSheet key={p.slug} p={p} d={d} locale={locale} />
      ))}
    </section>
  );
}

function StatusDot({ status }: { status: Project["status"] }) {
  return <span className="status status-dot size-2 shrink-0 rounded-full" data-status={status} aria-hidden />;
}

function StatusTag({ p, locale }: { p: Project; locale: Locale }) {
  return (
    <span className="status inline-flex items-center gap-2 text-sm text-muted" data-status={p.status}>
      <span className="status-dot size-2 rounded-full" aria-hidden />
      {statusLabel[p.status][locale]}
      {p.visibility === "private" && (
        <>
          <span className="text-cable-2" aria-hidden>
            /
          </span>
          <Lock width={13} height={13} />
          <span>{locale === "pt" ? "privado" : "private"}</span>
        </>
      )}
    </span>
  );
}

function StackList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((s) => (
        <li key={s} className="rounded-md border border-cable bg-night/60 px-2 py-1 font-mono text-[0.68rem] text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function LeadProject({
  p,
  d,
  locale,
  className = "",
  reverse = false,
}: {
  p: Project;
  d: Dictionary;
  locale: Locale;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid overflow-hidden rounded-3xl border border-cable bg-rack md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] ${className}`}
    >
      <div className={`flex flex-col p-7 md:p-12 ${reverse ? "md:order-2" : ""}`}>
        <StatusTag p={p} locale={locale} />
        <h3 className="mt-6 text-3xl font-bold tracking-[-0.03em] md:text-[2.9rem] md:leading-[1.02]">{tx(p.name, locale)}</h3>
        <p className="mt-4 text-lg text-paper/90">{p.tagline[locale]}</p>
        <p className="mt-4 text-muted">{p.solution[locale]}</p>
        <StackList items={p.stack} className="mt-7" />
        <div className="mt-auto flex flex-wrap gap-3 pt-9">
          <button type="button" popoverTarget={p.slug} className="btn btn-primary cursor-pointer">
            {d.projects.open}
            <ArrowRight />
          </button>
          {p.links?.repo && (
            <a href={p.links.repo} className="btn btn-ghost" target="_blank" rel="noreferrer">
              <GitHub />
              GitHub
            </a>
          )}
        </div>
      </div>
      <div
        className={`relative grid place-items-center border-t border-cable bg-[radial-gradient(circle_at_50%_45%,#15243a,transparent_70%)] p-8 md:border-t-0 md:p-12 ${
          reverse ? "md:order-1 md:border-r" : "md:border-l"
        }`}
      >
        {p.featured === "pet" ? <PetArt locale={locale} /> : <GlobeArt />}
      </div>
    </article>
  );
}

function FeaturedProject({ p, d, locale }: { p: Project; d: Dictionary; locale: Locale }) {
  return (
    <article className="flex flex-col rounded-3xl border border-cable bg-rack p-7 md:p-9">
      <StatusTag p={p} locale={locale} />
      <h3 className="mt-5 text-2xl font-bold tracking-[-0.025em]">{tx(p.name, locale)}</h3>
      <p className="mt-3 text-muted">{p.tagline[locale]}</p>
      <div className="mt-7">{p.featured === "terminal" ? <TerminalArt locale={locale} /> : <FleetArt locale={locale} />}</div>
      <StackList items={p.stack} className="mt-6" />
      <div className="mt-auto flex flex-wrap gap-3 pt-8">
        <button type="button" popoverTarget={p.slug} className="btn btn-ghost cursor-pointer">
          {d.projects.open}
          <ArrowRight />
        </button>
        {p.links?.repo && (
          <a href={p.links.repo} className="btn btn-ghost" target="_blank" rel="noreferrer" aria-label={`GitHub: ${tx(p.name, locale)}`}>
            <GitHub />
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectSheet({ p, d, locale }: { p: Project; d: Dictionary; locale: Locale }) {
  const name = tx(p.name, locale);
  return (
    <div id={p.slug} popover="auto" className="sheet" role="dialog" aria-modal="true" aria-labelledby={`${p.slug}-title`}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-cable bg-rack/95 px-6 py-4 backdrop-blur md:px-10">
        <StatusTag p={p} locale={locale} />
        <button
          type="button"
          popoverTarget={p.slug}
          popoverTargetAction="hide"
          className="grid size-10 cursor-pointer place-items-center rounded-md text-muted hover:text-paper"
          aria-label={d.nav.close}
        >
          <Close width={22} height={22} />
        </button>
      </div>

      <div className="px-6 pt-8 pb-14 md:px-10">
        <h2 id={`${p.slug}-title`} className="text-3xl font-bold tracking-[-0.03em]">
          {name}
        </h2>
        <p className="mt-4 text-lg text-paper/90">{p.tagline[locale]}</p>

        <dl className="mt-10 grid gap-8">
          <div>
            <dt className="text-sm font-semibold text-signal">{d.projects.problem}</dt>
            <dd className="mt-2 text-muted">{p.problem[locale]}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-signal">{d.projects.solution}</dt>
            <dd className="mt-2 text-muted">{p.solution[locale]}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-signal">{d.projects.highlights}</dt>
            <dd className="mt-3">
              <ul className="grid gap-3">
                {p.highlights[locale].map((h) => (
                  <li key={h} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-2 text-paper/90">
                    <span className="mt-[0.7em] h-px w-2.5 bg-signal" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
              {p.next && <p className="mt-5 text-sm text-muted">{p.next[locale]}</p>}
            </dd>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold text-signal">{d.projects.runsOn}</dt>
              <dd className="mt-2 text-muted">{p.host[locale]}</dd>
            </div>
            {p.stack.length > 0 && (
              <div>
                <dt className="text-sm font-semibold text-signal">{d.projects.stack}</dt>
                <dd className="mt-3">
                  <StackList items={p.stack} />
                </dd>
              </div>
            )}
          </div>
        </dl>

        <div className="mt-10 border-t border-cable pt-8">
          {p.links?.repo ? (
            <a href={p.links.repo} className="btn btn-primary" target="_blank" rel="noreferrer">
              <GitHub />
              {d.projects.repo}
            </a>
          ) : (
            <p className="flex items-center gap-2 text-sm text-muted">
              <Lock width={15} height={15} />
              {d.projects.privateRepo}
            </p>
          )}
          {p.note && <p className="mt-4 text-sm text-muted">{p.note[locale]}</p>}
          {p.credit && (
            <p className="mt-6 text-sm text-muted">
              <a href={p.credit.href} className="link inline-flex items-center gap-1" target="_blank" rel="noreferrer">
                {p.credit.text[locale]}
                <ArrowUpRight width={14} height={14} />
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
