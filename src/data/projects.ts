// Projetos exibidos no site. A ordem aqui é a ordem na página.

export type Project = {
  slug: string;
  kind: "pessoal" | "trabalho";
  /** Agrupamento na página */
  group: "destaque" | "lideranca" | "pessoal" | "trabalho";
  /** Meu papel no projeto */
  role?: string;
  /** Situação atual */
  status?: string;
  /** Imagem em /public (ex.: "/projetos/central.png"), só com dados fictícios ou ocultados */
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
    group: "destaque",
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
    slug: "central",
    kind: "trabalho",
    group: "lideranca",
    role: "Desenvolvimento e orquestração · ideia do supervisor",
    status: "em desenvolvimento",
    title: "Central",
    tagline: "Gestão de cota de nuvem multi-cliente",
    description:
      "Plataforma em que cada cliente acompanha o que consome do que contratou em clusters Kubernetes e pede mais capacidade sem abrir chamado. A equipe interna aprova e o sistema provisiona sozinho.",
    highlights: [
      "Portal do cliente (CPU, memória, disponibilidade e histórico) e console do gerente com fila de aprovação",
      "Isolamento multi-tenant: cada cliente enxerga só o próprio ambiente",
      "Consumo consolidado por hora, dia e mês em TimescaleDB, processado por filas com BullMQ",
      "Worker que provisiona o recurso aprovado direto no cluster, via API do Kubernetes",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Drizzle", "PostgreSQL", "TimescaleDB", "BullMQ", "Redis", "Kubernetes", "Turborepo"],
    note: "Código privado: produto interno",
  },
  {
    slug: "clinomni360",
    kind: "trabalho",
    group: "lideranca",
    role: "Líder técnico · orientando estagiários",
    status: "em desenvolvimento",
    title: "ClinOmni360",
    tagline: "Sistema de gestão para clínicas (SaaS multi-tenant)",
    description:
      "Plataforma de agenda, atendimento e cadastros para clínicas. Desenvolvida em lotes pequenos, com demandas escritas para estagiários e revisão de cada entrega antes de integrar.",
    highlights: [
      "Clean Architecture: o domínio não conhece banco nem framework",
      "Isolamento por tenant no nível do acesso a dados, com teste que prova que um tenant não lê outro",
      "Permissões por perfil e refresh token com detecção de reutilização",
      "Planejamento em lotes, demandas com critérios de aceite e guia de onboarding para estagiários",
    ],
    stack: ["NestJS", "Angular", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Tailwind", "Docker"],
    note: "Código privado: produto da empresa",
  },
  {
    slug: "cimentonline",
    kind: "trabalho",
    group: "lideranca",
    role: "Condução do desenvolvimento · orientando estagiários",
    status: "em desenvolvimento",
    title: "CimentOnline",
    tagline: "Portal B2B de cotação de cimento",
    description:
      "Reescrita de um sistema legado: o cliente pede a cotação, os fornecedores da região respondem com preço e prazo, e ele compara as propostas, aprova uma e conversa com o fornecedor.",
    highlights: [
      "Levantamento de requisitos do sistema legado e corte de escopo decidido com o negócio",
      "Monorepo Nx com front Angular e API NestJS, divididos em bibliotecas por funcionalidade",
      "Fluxo de revisão de branches e hooks de qualidade (lint, testes e varredura de segredos)",
      "Planos de fornecedor, anúncios e back-office de moderação",
    ],
    stack: ["Angular", "NestJS", "TypeScript", "Prisma", "PostgreSQL", "Nx", "Tailwind"],
    note: "Código privado: projeto de cliente",
  },
  {
    slug: "coletivo",
    kind: "pessoal",
    group: "pessoal",
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
  {
    slug: "infra",
    kind: "trabalho",
    group: "trabalho",
    title: "Infraestrutura Kubernetes e base DevOps",
    tagline: "Plataforma como código e conhecimento da equipe",
    description:
      "Participo da infraestrutura de clusters por cliente e da base de conhecimento DevOps da equipe, com versões fixadas e decisões registradas.",
    highlights: [
      "Kustomize com um cluster por cliente: PostgreSQL com CloudNativePG, backup, TLS e borda com Traefik",
      "Observabilidade com Prometheus e Grafana",
      "Runbooks e laboratórios de rede em nuvem (Azure, AWS e OVHcloud)",
    ],
    stack: ["Kubernetes", "Kustomize", "CloudNativePG", "Traefik", "Grafana", "Terraform", "Azure"],
    note: "Repositórios privados",
  },
  {
    slug: "eurusd-ml",
    kind: "pessoal",
    group: "pessoal",
    title: "Previsão do EUR/USD com ML",
    tagline: "Pipeline de ML com validação rigorosa",
    description:
      "Estudo de ponta a ponta sobre previsão de direção do câmbio em 25 minutos, da coleta dos dados à avaliação do modelo. O foco foi construir um experimento confiável, que mede o que realmente importa e não se deixa enganar por resultados otimistas.",
    highlights: [
      "Coleta via MetaTrader 5 e Yahoo Finance (~16 mil candles de 5 min) e engenharia de features com RSI e EMA",
      "Split temporal sem vazamento de dados e comparação com um baseline, para uma avaliação honesta",
      "Random Forest com 50,5% de acurácia contra 56,2% do baseline: o experimento mostrou que esses indicadores sozinhos não bastam, e deixei documentado o que testar a seguir",
    ],
    stack: ["Python", "pandas", "scikit-learn", "pandas_ta"],
    repo: "https://github.com/IanAraujo20/ia-trading-eurusd",
  },
  {
    slug: "erp-api",
    kind: "trabalho",
    group: "trabalho",
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
    group: "trabalho",
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
