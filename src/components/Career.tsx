import { education, experience, skills } from "@/data/career";
import { Tag } from "./ui";

export function Experience() {
  return (
    <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
      <ol className="relative border-l border-line pl-6">
        {experience.map((e) => (
          <li key={e.company} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="font-mono text-xs text-muted">
              {e.period} · {e.place}
            </p>
            <h3 className="mt-1 font-display text-lg font-bold text-ink">{e.role}</h3>
            <p className="text-sm text-accent">{e.company}</p>
            <ul className="mt-3 space-y-1.5 text-[14.5px]">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="text-line">—</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="space-y-6">
        <div className="rounded-3xl border border-line bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Formação</p>
          <h3 className="mt-3 font-display font-bold text-ink">{education.course}</h3>
          <p className="text-sm">
            {education.school} · {education.period}
          </p>
          <p className="mt-3 text-sm text-muted">{education.extra}</p>
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s, i) => (
        <div key={s.group} className="lift rounded-3xl border border-line bg-surface p-6 hover:border-accent/50">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-bold text-ink">{s.group}</h3>
            <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.items.map((it) => (
              <Tag key={it}>{it}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
