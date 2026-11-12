import { profile } from "@/data/profile";
import { ArrowIcon, ButtonLink } from "./ui";

// Mini-visual do pipeline do Nexus: é a "assinatura" da página
const routes = [
  { label: "memória", hint: "afirmação pessoal" },
  { label: "web", hint: "pergunta temporal" },
  { label: "ação", hint: "comando de sistema" },
  { label: "agentes", hint: "tarefa geral" },
];

function PipelineCard() {
  return (
    <div className="fade-up rounded-2xl border border-line bg-surface/80 p-5 font-mono text-[12.5px] shadow-[0_0_60px_-20px] shadow-accent/30 [animation-delay:150ms]">
      <div className="flex items-center gap-1.5 pb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 text-muted">nexus / pipeline</span>
      </div>
      <p className="text-muted">
        <span className="text-accent">›</span> mensagem recebida
      </p>
      <div className="my-3 rounded-lg border border-accent/40 bg-accent/5 px-3 py-2 text-ink">
        ModalityAnalyzer<span className="text-muted">.classificar()</span>
      </div>
      <ul className="space-y-1.5">
        {routes.map((r) => (
          <li key={r.label} className="flex items-center gap-2">
            <span className="text-line">├─</span>
            <span className="w-16 text-accent">{r.label}</span>
            <span className="truncate text-muted">{r.hint}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-lg border border-line bg-surface-2 px-3 py-2 text-body">
        LLM <span className="text-muted">+ contexto da memória</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pt-36 md:grid-cols-[1.25fr_1fr] md:items-center">
        <div className="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-body">
            <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
            {profile.status}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl">
            {profile.shortName}
            <span className="mt-2 block text-2xl font-medium text-accent sm:text-3xl">{profile.role} · IA aplicada</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-body">{profile.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projetos" variant="primary">
              Ver projetos
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              GitHub <ArrowIcon />
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              LinkedIn <ArrowIcon />
            </ButtonLink>
          </div>
          <p className="mt-6 text-sm text-muted">{profile.location}</p>
        </div>
        <PipelineCard />
      </div>
    </section>
  );
}
