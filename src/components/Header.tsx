"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

// Pílula flutuante: larga no topo da página, encolhe ao rolar e volta a abrir ao retornar ao topo.
export function Header() {
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção que está na tela
  useEffect(() => {
    // "stack" não tem item no menu, mas é observada para o destaque sair de "Experiência" ao chegar nela
    const sections = [...links.map((l) => l.id), "stack"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 sm:pt-4">
      <nav
        aria-label="Principal"
        data-compact={compact}
        className="pill pointer-events-auto flex w-full items-center justify-between gap-3 rounded-full border px-3 py-2 sm:px-4"
      >
        <a href="/" className="font-display text-[15px] font-bold tracking-wide text-ink" aria-label={profile.shortName}>
          <span className="pill-brand inline-block overflow-hidden whitespace-nowrap align-bottom">
            {profile.shortName.toUpperCase()}
          </span>
          <span className="pill-initials hidden">IA</span>
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm text-body sm:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`/#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors duration-300 hover:text-accent ${
                  active === l.id ? "bg-accent/10 text-accent" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          download=""
          className="rounded-full border border-accent/60 px-3.5 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent hover:text-bg"
        >
          Currículo
        </a>
      </nav>
    </header>
  );
}
