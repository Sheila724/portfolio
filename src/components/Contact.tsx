import type { Dictionary } from "@/content/dictionary";
import { site } from "@/content/site";
import { ArrowUpRight, Copy, GitHub, LinkedIn, Mail } from "./icons";

export function Contact({ d }: { d: Dictionary }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-cable">
      <div className="hero-grid" aria-hidden />
      <div className="shell py-24 md:py-32">
        <h2 id="contact-title" className="text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
          {d.contact.title}
        </h2>
        <p className="measure mt-6 text-lg text-muted">{d.contact.lead}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            <Mail />
            {d.contact.email}
          </a>
          <button
            type="button"
            className="btn btn-ghost cursor-pointer"
            data-copy={site.email}
            data-copied-label={d.contact.copied}
          >
            <Copy />
            <span data-copy-label>{site.email}</span>
          </button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-muted">
          <li>
            <a href={site.linkedin} className="inline-flex items-center gap-2 hover:text-paper" target="_blank" rel="noreferrer">
              <LinkedIn />
              LinkedIn
              <ArrowUpRight width={14} height={14} />
            </a>
          </li>
          <li>
            <a href={site.github} className="inline-flex items-center gap-2 hover:text-paper" target="_blank" rel="noreferrer">
              <GitHub />
              GitHub
              <ArrowUpRight width={14} height={14} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Footer({ d }: { d: Dictionary }) {
  return (
    <footer className="border-t border-cable">
      <div className="shell flex flex-col gap-3 py-8 text-sm text-faint md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          {d.footer.built}{" "}
          <a href={`${site.github}/portfolio`} className="link" target="_blank" rel="noreferrer">
            {d.footer.source}
          </a>
        </p>
      </div>
    </footer>
  );
}
