import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NexusDiagram } from "@/components/NexusDiagram";
import { ArrowIcon, ButtonLink, Tag } from "@/components/ui";
import { projects } from "@/data/projects";

const nexus = projects.find((p) => p.slug === "nexus")!;

export const metadata: Metadata = {
  title: "Nexus · Estudo de caso | Ian Araújo",
  description: "Como construí um assistente de IA multiagente com memória persistente: arquitetura, decisões técnicas e próximos passos.",
};

const modalities = [
  ["Afirmação pessoal", "Salva como memória e responde de forma natural"],
  ["Pergunta pessoal", "Responde a partir da memória local, nunca pesquisa na web"],
  ["Comando de sistema", "Gera e executa uma ação no sistema"],
  ["Pergunta temporal", "Pesquisa na web e sintetiza a resposta"],
  ["Código", "Encaminha para o agente de desenvolvimento"],
  ["Geral", "Orquestrador, subagentes e LLM com contexto de memória"],
];

const decisions = [
  {
    t: "Classificar antes de chamar o LLM",
    d: "Uma pergunta sobre o próprio usuário não deve virar pesquisa na web, e um comando não deve virar conversa. Decidir o caminho antes evita respostas erradas e chamadas desnecessárias ao modelo.",
  },
  {
    t: "Memória que envelhece",
    d: "Nem toda informação vale para sempre. Cada memória tem peso e confiança, ganha reforço quando reaparece e perde força com o tempo (decay). A consolidação em segundo plano mantém a base enxuta.",
  },
  {
    t: "Contradições tratadas explicitamente",
    d: "Quando o usuário diz algo que contradiz uma memória salva, o sistema detecta e resolve o conflito em vez de guardar as duas versões.",
  },
  {
    t: "Refatorar sem quebrar",
    d: "O projeto tem dependências cruzadas entre backend, memória, agentes e frontend. Registrei as decisões em ADRs e defini uma refatoração incremental: primeiro contratos e modularização lógica, depois mover arquivos.",
  },
];

const next = [
  "Testes automatizados (os scripts atuais ainda são manuais)",
  "Roteador central de LLMs com fallback e controle de custo",
  "Engine de ferramentas com registro e permissões",
  "Separar memória episódica e semântica",
  "Deploy em cloud",
];

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-14 font-display text-xl font-bold text-ink sm:text-2xl">{children}</h2>;
}

export default function NexusCaseStudy() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <a href="/#projetos" className="text-sm text-muted hover:text-accent">
          ← Voltar para projetos
        </a>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">Estudo de caso · projeto pessoal</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">Nexus</h1>
        <p className="mt-3 text-lg text-accent">{nexus.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {nexus.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>
        <div className="mt-6">
          <ButtonLink href={nexus.repo!} external variant="primary">
            Ver código no GitHub <ArrowIcon />
          </ButtonLink>
        </div>

        <H2>O problema</H2>
        <p className="mt-4">
          Assistentes baseados em LLM costumam esquecer tudo a cada conversa e tratam qualquer mensagem do mesmo jeito: mandam para o modelo e
          esperam o melhor. Eu queria um assistente que lembrasse do que importa, soubesse quando pesquisar e quando não, e conseguisse dividir
          tarefas maiores em partes.
        </p>

        <H2>Arquitetura</H2>
        <p className="mt-4">
          Toda mensagem passa primeiro por um classificador de modalidade. Ele decide o caminho; o LLM entra no fim, já com o contexto certo da
          memória.
        </p>
        <div className="mt-6">
          <NexusDiagram />
        </div>

        <H2>Pipeline de decisão</H2>
        <div className="mt-5 overflow-hidden rounded-xl border border-line">
          <table className="w-full text-left text-[14.5px]">
            <thead className="bg-surface-2 text-ink">
              <tr>
                <th className="px-4 py-2.5 font-semibold">Modalidade</th>
                <th className="px-4 py-2.5 font-semibold">O que o Nexus faz</th>
              </tr>
            </thead>
            <tbody>
              {modalities.map(([m, a]) => (
                <tr key={m} className="border-t border-line">
                  <td className="px-4 py-2.5 text-accent">{m}</td>
                  <td className="px-4 py-2.5">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>Multiagente</H2>
        <p className="mt-4">
          Para tarefas gerais, o orquestrador divide o trabalho entre subagentes executados em paralelo (threads) e sintetiza o resultado. O
          progresso aparece em tempo real na interface via Server-Sent Events. As skills têm ciclo de vida: começam latentes, passam a “em
          treino” e viram ativas conforme acertos e falhas.
        </p>

        <H2>Decisões técnicas</H2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {decisions.map((d) => (
            <div key={d.t} className="rounded-xl border border-line bg-surface p-5">
              <h3 className="font-display font-bold text-ink">{d.t}</h3>
              <p className="mt-2 text-[14.5px]">{d.d}</p>
            </div>
          ))}
        </div>

        <H2>O que eu faria diferente e próximos passos</H2>
        <p className="mt-4">
          Comecei rápido e o acoplamento cresceu junto. Hoje eu definiria os contratos entre os módulos desde o início. Os próximos passos já
          estão no roadmap:
        </p>
        <ul className="mt-4 space-y-2">
          {next.map((n) => (
            <li key={n} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
