// Experiência, formação e competências.

export const experience = [
  {
    role: "Desenvolvedor Full Stack",
    company: "ETS Assessoria e Soluções em Informática",
    period: "out/2025 – atual",
    place: "Fortaleza, CE · Remoto",
    points: [
      "APIs REST em NestJS + Prisma que integram o ERP (Firebird) a sistemas de clientes, com cálculo de ICMS, JWT e isolamento de dados entre clientes",
      "Deploy e sustentação em produção e homologação (PM2)",
      "Recursos fiscais no ERP em Delphi/Firebird: NFC-e, reforma tributária (IBS/CBS) e CNPJ alfanumérico",
      "Projetos web com Angular, NestJS e PostgreSQL, incluindo SaaS multi-tenant",
      "Monitoramento com Prometheus e Grafana e laboratórios de rede segura no Azure",
      "Conduzo projetos com estagiários: distribuo demandas, reviso entregas e aprovo ou peço ajustes",
      "Uso de agentes de IA para investigar problemas e documentar integrações",
    ],
  },
  {
    role: "Auxiliar Técnico de Fibra Óptica",
    company: "Authentic Soluções",
    period: "mar/2024 – abr/2025",
    place: "Fortaleza, CE",
    points: ["Instalação, configuração e diagnóstico de falhas em redes de fibra óptica"],
  },
];

export const education = {
  course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  school: "Multivix",
  period: "conclusão em dez/2026",
  extra: "Em preparação para a Microsoft Azure Fundamentals (AZ-900)",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "IA e LLMs",
    items: ["OpenAI API", "Agentes e subagentes", "Orquestração multiagente", "Prompt engineering", "Memória e contexto", "RAG", "Claude Code"],
  },
  { group: "Machine Learning", items: ["scikit-learn", "pandas", "Feature engineering", "Validação temporal", "Avaliação contra baseline"] },
  { group: "Backend", items: ["NestJS", "Node.js", "TypeScript", "Python", "Flask", "APIs REST", "JWT", "Prisma", "SSE"] },
  { group: "Frontend", items: ["Next.js", "React", "Angular", "Tailwind CSS"] },
  { group: "Dados", items: ["PostgreSQL", "Firebird", "MySQL", "SQLite", "SQL"] },
  { group: "ERP e fiscal", items: ["Delphi", "NF-e", "NFC-e", "IBS/CBS"] },
  { group: "Infra e cloud", items: ["Docker", "Git", "PM2", "Redes em nuvem", "Kubernetes (básico)"] },
];
