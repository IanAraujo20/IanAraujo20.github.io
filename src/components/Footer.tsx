import { profile } from "@/data/profile";
import { ArrowIcon, ButtonLink } from "./ui";

export function Contact() {
  return (
    <div className="rounded-3xl border border-line bg-gradient-to-br from-surface to-bg p-8 sm:p-10">
      <h3 className="max-w-2xl font-display text-2xl font-bold text-ink sm:text-3xl">
        Vamos conversar sobre IA aplicada, integrações ou o próximo projeto?
      </h3>
      <p className="mt-3 max-w-xl">O jeito mais rápido de falar comigo é por e-mail ou pelo LinkedIn.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={`mailto:${profile.email}`} variant="primary">
          {profile.email}
        </ButtonLink>
        <ButtonLink href={profile.linkedin} external>
          LinkedIn <ArrowIcon />
        </ButtonLink>
        <ButtonLink href={profile.github} external>
          GitHub <ArrowIcon />
        </ButtonLink>
        <ButtonLink href={profile.resume} download>
          Baixar currículo (PDF)
        </ButtonLink>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Feito com Next.js e Tailwind CSS · publicado no GitHub Pages</p>
      </div>
    </footer>
  );
}
