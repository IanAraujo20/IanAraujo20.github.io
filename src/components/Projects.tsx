import { projects, type Project } from "@/data/projects";
import { ArrowIcon, Tag } from "./ui";

function ProjectLinks({ p }: { p: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
      {p.caseStudy && (
        <a href={p.caseStudy} className="inline-flex items-center gap-1.5 text-accent hover:text-white">
          Estudo de caso <ArrowIcon />
        </a>
      )}
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
          Código no GitHub <ArrowIcon />
        </a>
      )}
      {p.note && <span className="font-normal text-muted">{p.note}</span>}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((h) => (
        <li key={h} className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="rounded-2xl border border-accent/40 bg-gradient-to-br from-surface to-bg p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-bg">Destaque</span>
        <span className="font-mono text-xs text-muted">projeto pessoal</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">{p.title}</h3>
      <p className="mt-1 text-accent">{p.tagline}</p>
      <p className="mt-4 max-w-3xl">{p.description}</p>
      <Highlights items={p.highlights} />
      <div className="mt-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
      <ProjectLinks p={p} />
    </article>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-accent/50">
      <span className="font-mono text-xs text-muted">{p.kind === "trabalho" ? "trabalho · estudo de caso" : "projeto pessoal"}</span>
      <h3 className="mt-3 font-display text-lg font-bold text-ink">{p.title}</h3>
      <p className="text-sm text-accent">{p.tagline}</p>
      <p className="mt-3 text-[14.5px]">{p.description}</p>
      <div className="text-[14.5px]">
        <Highlights items={p.highlights} />
      </div>
      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <ProjectLinks p={p} />
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <div className="space-y-6">
      {featured.map((p) => (
        <FeaturedProject key={p.slug} p={p} />
      ))}
      <div className="grid gap-6 md:grid-cols-3">
        {rest.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  );
}
