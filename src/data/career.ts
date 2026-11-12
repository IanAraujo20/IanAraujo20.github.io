// Experiência, formação e competências.

export const experience = [
  {
    role: "Desenvolvedor Full Stack",
    company: "ETS Assessoria e Soluções em Informática",
    period: "out/2025 – atual",
    place: "Remoto",
    points: [
      "APIs REST em NestJS + Prisma que integram o ERP a sistemas de clientes",
      "Deploy e sustentação em produção e homologação",
      "Recursos fiscais no ERP em Delphi/Firebird (NFC-e, IBS/CBS)",
      "Condução técnica de projetos novos (Central, ClinOmni360, CimentOnline), orientando estagiários e revisando entregas",
      "Laboratórios de rede segura em nuvem (hub-and-spoke, firewall, VPN)",
      "Comecei no suporte ao ERP e passei para o desenvolvimento",
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
  { group: "Machine Learning", items: ["scikit-learn", "pandas", "Feature engineering", "Validação temporal"] },
  { group: "Backend", items: ["NestJS", "Node.js", "TypeScript", "Python", "Flask", "APIs REST", "JWT", "Prisma"] },
  { group: "Frontend", items: ["Next.js", "React", "Angular", "Tailwind CSS"] },
  { group: "Dados", items: ["PostgreSQL", "Firebird", "MySQL", "SQLite"] },
  { group: "Infra e cloud", items: ["Docker", "Git", "PM2", "Redes em nuvem"] },
];
