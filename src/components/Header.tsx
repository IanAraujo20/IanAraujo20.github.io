import { profile } from "@/data/profile";

const links = [
  { href: "/#projetos", label: "Projetos" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="/" className="font-display text-[15px] font-bold tracking-wide text-ink">
          {profile.shortName.toUpperCase()}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-body sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          download=""
          className="rounded-lg border border-accent/60 px-3 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-bg"
        >
          Currículo
        </a>
      </nav>
    </header>
  );
}
