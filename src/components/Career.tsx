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
        <div className="rounded-2xl border border-line bg-surface p-6">
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
    <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((s) => (
        <div key={s.group}>
          <h3 className="font-display text-sm font-bold text-ink">{s.group}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {s.items.map((i) => (
              <Tag key={i}>{i}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
