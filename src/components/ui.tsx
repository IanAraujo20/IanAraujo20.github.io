// Peças pequenas reaproveitadas no site inteiro.
import { Reveal } from "./Reveal";

/** Fundos decorativos das seções (definidos em globals.css); cada seção usa um diferente. */
export type SectionBackground = "grid" | "dots" | "cross" | "glow" | "grid-bottom";

export function Section({
  id,
  eyebrow,
  title,
  muted,
  children,
  stagger = false,
  bg,
}: {
  id: string;
  eyebrow: string;
  title: string;
  /** continuação do título, em tom mais apagado */
  muted?: string;
  children: React.ReactNode;
  /** true quando o conteúdo já revela cada item por conta própria */
  stagger?: boolean;
  bg?: SectionBackground;
}) {
  return (
    <section id={id} className="relative overflow-hidden">
      {bg && <div aria-hidden="true" className={`section-bg section-bg-${bg} pointer-events-none absolute inset-0`} />}
      <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal className="section-line mb-14">{null}</Reveal>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            {title}
            {muted && <span className="text-muted"> {muted}</span>}
          </h2>
        </Reveal>
        {stagger ? (
          <div className="mt-8">{children}</div>
        ) : (
          <Reveal className="mt-8" delay={120} threshold={0.01}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[12px] text-body">
      {children}
    </span>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`h-3.5 w-3.5 ${className}`}>
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "ghost",
  external = false,
  download = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-white"
      : "border border-line bg-surface text-ink hover:border-accent hover:text-accent";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download: "" } : {})}
    >
      {children}
    </a>
  );
}
