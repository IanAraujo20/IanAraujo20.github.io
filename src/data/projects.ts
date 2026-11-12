// Projetos exibidos no site. A ordem aqui é a ordem na página.

export type Project = {
  slug: string;
  kind: "pessoal" | "trabalho";
  /** featured = card grande; other = card médio */
  tier: "featured" | "other";
  /** Meu papel no projeto */
  role?: string;
  /** Situação atual */
  status?: string;
  /** Imagem em /public (ex.: "/projetos/captura.png"), só com dados fictícios ou ocultados */
  image?: { src: string; alt: string };
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  caseStudy?: string;
  note?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nexus",
    kind: "pessoal",
    tier: "featured",
    featured: true,
    title: "Nexus",
    tagline: "Assistente de IA multiagente com memória persistente",
    description:
      "Um assistente pessoal que não é só um chat em cima de um LLM: cada mensagem passa por um pipeline que decide o que fazer com ela, e o sistema acumula conhecimento sobre o usuário ao longo do tempo.",
    highlights: [
      "Pipeline que classifica cada mensagem em 6 modalidades e roteia para memória, pesquisa web, execução de ações ou agentes especializados antes de chamar o LLM",
      "Memória com peso, confiança, reforço e decay, consolidação automática a cada 6 h e detecção de contradições",
      "Grafo de entidades e relações extraído das conversas e usado como contexto",
      "Orquestrador que divide tarefas entre subagentes em paralelo, com skills que evoluem por acerto e falha",
    ],
    stack: ["Python", "Flask", "SQLite", "OpenAI API", "Next.js", "React", "TypeScript", "SSE"],
    repo: "https://github.com/IanAraujo20/Nexus-Core",
    caseStudy: "/projetos/nexus/",
  },
  {
    slug: "eurusd-ml",
    kind: "pessoal",
    tier: "other",
    title: "Previsão do EUR/USD com ML",
    tagline: "Pipeline de ML com validação rigorosa",
    description:
      "Estudo de ponta a ponta sobre previsão de direção do câmbio em 25 minutos, da coleta dos dados à avaliação do modelo. O foco foi construir um experimento confiável, com avaliação contra baseline e sem vazamento de dados.",
    highlights: [
      "Coleta via MetaTrader 5 e Yahoo Finance (~16 mil candles de 5 min) e engenharia de features com RSI e EMA",
      "Split temporal sem vazamento de dados e comparação com um baseline, para uma avaliação honesta",
      "Random Forest avaliada contra baseline: o modelo (50,5%) não superou a classe majoritária (56,2%); documentei as causas e os próximos passos",
    ],
    stack: ["Python", "pandas", "scikit-learn", "pandas_ta"],
    repo: "https://github.com/IanAraujo20/ia-trading-eurusd",
  },
  {
    slug: "coletivo",
    kind: "pessoal",
    tier: "other",
    status: "em produção",
    title: "Coletivo D'Terreiro",
    tagline: "PWA de organização comunitária",
    description:
      "Aplicativo web que já tem pessoas usando em produção. Migrei de um app estático para uma base modular sem derrubar o que está no ar, e levei a sério a proteção de dados sensíveis.",
    highlights: [
      "Migração incremental de HTML/JS global para Vite + Vue 3, em paralelo ao app em produção",
      "Regras de segurança do Firestore revistas para leitura em camadas e dados sensíveis (LGPD)",
      "Testes sempre em emuladores locais do Firebase, nunca contra dados reais",
    ],
    stack: ["Vue 3", "Vite", "Firebase", "Firestore", "PWA", "Docker"],
    note: "Código privado",
  },
];
