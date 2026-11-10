import type { Dictionary } from "@/content/dictionary";
import { academicProjects } from "@/content/academic";
import { projects } from "@/content/projects";
import { stackGroups } from "@/content/stack";
import type { Locale } from "@/lib/i18n";

const allStacks = [...projects.map((p) => [...p.stack, ...(p.tooling ?? [])]), ...academicProjects.map((a) => a.stack)];

function usage(tech: string) {
  return allStacks.filter((stack) => stack.some((s) => s.toLowerCase() === tech.toLowerCase())).length;
}

export function Stack({ d, locale }: { d: Dictionary; locale: Locale }) {
  return (
    <section id="stack" aria-labelledby="stack-title" className="border-y border-cable bg-rack/40">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:items-end">
          <h2 id="stack-title" className="text-3xl font-bold tracking-[-0.03em] md:text-[3.2rem] md:leading-none">
            {d.stack.title}
          </h2>
          <p className="measure text-muted md:justify-self-end">{d.stack.intro}</p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((g) => (
            <div key={g.id}>
              <h3 className="text-lg font-semibold tracking-tight">{g.title[locale]}</h3>
              <p className="mt-1 text-sm text-muted">{g.note[locale]}</p>
              <ul className="mt-5 border-t border-cable">
                {g.items.map((item) => {
                  const n = usage(item);
                  return (
                    <li key={item} className="flex items-baseline justify-between gap-4 border-b border-cable py-2.5">
                      <span>{item}</span>
                      {n > 0 && (
                        <span className="font-mono text-[0.68rem] text-faint" title={d.stack.inProjects(n)}>
                          {d.stack.inProjects(n)}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
