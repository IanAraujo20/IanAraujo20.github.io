import { projects, type Project } from "@/data/projects";
import { Reveal } from "./Reveal";
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

function Shot({ p }: { p: Project }) {
  if (!p.image) return null;
  return (
    <figure className="mb-5 overflow-hidden rounded-xl border border-line bg-surface-2">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={p.image.src} alt={p.image.alt} loading="lazy" className="w-full" />
    </figure>
  );
}

function Meta({ p }: { p: Project }) {
  const label = "projeto pessoal";
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
      <span>{label}</span>
      {p.status && (
        <span className="inline-flex items-center gap-1.5 text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          {p.status}
        </span>
      )}
    </div>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  return (
    <article className="rounded-3xl border border-accent/40 bg-gradient-to-br from-surface to-bg p-6 sm:p-8">
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

function ProjectCard({ p, n }: { p: Project; n?: number }) {
  return (
    <article className="lift flex h-full flex-col rounded-3xl border border-line bg-surface p-6 hover:border-accent/50 sm:p-7">
      <Shot p={p} />
      <div className="flex items-start justify-between gap-3">
        <Meta p={p} />
        {n !== undefined && <span className="font-mono text-sm text-muted">{String(n).padStart(2, "0")}</span>}
      </div>
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
  const featured = projects.filter((p) => p.tier === "featured");
  const others = projects.filter((p) => p.tier === "other");
  return (
    <div className="space-y-6">
      {featured.map((p) => (
        <Reveal key={p.slug}>
          <FeaturedProject p={p} />
        </Reveal>
      ))}
      <div className="grid gap-6 md:grid-cols-2">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 110}>
            <ProjectCard p={p} n={i + 1} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
