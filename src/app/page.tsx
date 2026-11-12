import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience, Skills } from "@/components/Career";
import { Contact, Footer } from "@/components/Footer";
import { Section } from "@/components/ui";
import { about } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section id="projetos" eyebrow="01 · projetos" title="O que eu construí." muted="Projetos pessoais, de ponta a ponta." stagger>
          <Projects />
        </Section>

        <Section id="experiencia" eyebrow="02 · trajetória" title="Experiência e formação." muted="Do suporte ao desenvolvimento.">
          <Experience />
        </Section>

        <Section id="stack" eyebrow="03 · stack" title="Ferramentas do dia a dia." muted="De APIs a agentes de IA.">
          <Skills />
        </Section>

        <Section id="sobre" eyebrow="04 · sobre" title="Como eu trabalho." muted="Entender antes de implementar.">
          <div className="max-w-3xl space-y-4 text-[16px]">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="contato" eyebrow="05 · contato" title="Fale comigo." muted="Vamos conversar.">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
