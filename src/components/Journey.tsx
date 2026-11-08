import type { Dictionary } from "@/content/dictionary";
import { journey } from "@/content/journey";
import { type Locale, tx } from "@/lib/i18n";

export function Journey({ d, locale }: { d: Dictionary; locale: Locale }) {
  return (
    <section id="journey" aria-labelledby="journey-title" className="shell py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 id="journey-title" className="text-3xl font-bold tracking-[-0.03em] md:text-[3.2rem] md:leading-none">
            {d.journey.title}
          </h2>
          <p className="measure mt-6 text-muted">{d.journey.intro}</p>
        </div>

        <ol className="relative border-l border-cable">
          {journey.map((item, i) => (
            <li key={i} className="relative pb-12 pl-8 last:pb-0">
              <span
                className={`absolute top-[0.45rem] -left-[0.36rem] size-[0.7rem] rounded-full border-2 ${
                  item.current ? "border-ok bg-ok/30" : "border-cable-2 bg-night"
                }`}
                aria-hidden
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">{item.role[locale]}</h3>
                {item.current && (
                  <span className="rounded-full border border-ok/40 px-2 py-0.5 text-xs text-ok">{d.journey.now}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-signal">
                {tx(item.org, locale)}
                {item.period && <span className="text-faint"> {item.period}</span>}
              </p>
              <p className="measure mt-3 text-muted">{item.summary[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
