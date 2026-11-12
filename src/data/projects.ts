// Projetos exibidos no site. A ordem aqui é a ordem na página.

export type Project = {
  slug: string;
  kind: "pessoal" | "trabalho";
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
    title: "Previsão do EUR/USD com ML",
    tagline: "Estudo de ponta a ponta com avaliação honesta",
    description:
      "Dá para prever se o EUR/USD sobe ou cai nos próximos 25 minutos com indicadores técnicos e uma Random Forest? Construí o pipeline completo para responder, e a resposta foi não.",
    highlights: [
      "Coleta via MetaTrader 5 e Yahoo Finance (~16 mil candles de 5 min)",
      "RSI e EMA como features, split temporal sem vazamento de dados",
      "Modelo com 50,5% de acurácia contra 56,2% do baseline: documentei por que e o que testar a seguir",
    ],
    stack: ["Python", "pandas", "scikit-learn", "pandas_ta"],
    repo: "https://github.com/IanAraujo20/ia-trading-eurusd",
  },
  {
    slug: "erp-api",
    kind: "trabalho",
    title: "Integração de ERP legado via API",
    tagline: "Projeto de cliente · em produção",
    description:
      "API que conecta um ERP em Delphi/Firebird a uma plataforma externa de pedidos, sem mexer no núcleo do sistema legado.",
    highlights: [
      "Endpoints de criação e consulta de pedidos, com cálculo de ICMS e busca de vendedores",
      "Autenticação JWT e isolamento de dados entre clientes",
      "Deploy em produção e homologação com PM2, incluindo diagnóstico de incidentes (versões do Node, triggers e chaves estrangeiras no banco)",
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "Firebird", "MySQL", "PM2"],
    note: "Código privado: projeto de cliente",
  },
  {
    slug: "erp-fiscal",
    kind: "trabalho",
    title: "Recursos fiscais no ERP",
    tagline: "NFC-e e reforma tributária",
    description:
      "Evolução de um ERP em Delphi/Firebird para acompanhar as mudanças fiscais brasileiras, com regras que precisam estar certas no primeiro envio.",
    highlights: [
      "Implementação da NFC-e (nota fiscal de consumidor eletrônica)",
      "Adaptação à reforma tributária (IBS/CBS) e ao CNPJ alfanumérico",
      "Otimização de consultas SQL e correção de bugs no Firebird",
    ],
    stack: ["Delphi", "Firebird", "SQL", "NF-e", "NFC-e"],
    note: "Código privado: produto da empresa",
  },
];
