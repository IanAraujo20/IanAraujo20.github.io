# Portfólio · Ian Araújo

Site pessoal publicado em **https://ianaraujo20.github.io**.

Feito com **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, exportado como site estático e publicado no GitHub Pages por GitHub Actions a cada push na `main`.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # fontes, metadados (SEO e Open Graph)
│   ├── page.tsx              # página inicial (ordem das seções)
│   ├── globals.css           # tema: cores, fontes, animações
│   ├── icon.svg              # favicon
│   └── projetos/nexus/       # estudo de caso do Nexus
├── components/               # Header, Hero, Projects, Career, Footer, NexusDiagram, ui
├── data/                     # TODO o conteúdo do site fica aqui
│   ├── profile.ts            # nome, contatos, textos do "sobre"
│   ├── projects.ts           # projetos (ordem = ordem na página)
│   └── career.ts             # experiência, formação e competências
└── fonts/                    # Inter e Poppins em woff2 (subset latino)
public/
└── curriculo-ian-araujo.pdf  # currículo para download
```

**Para atualizar o conteúdo, edite só os arquivos em `src/data/`.** Os componentes leem tudo dali.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/ (site estático)
```

## Publicação

O workflow `.github/workflows/deploy.yml` roda `npm ci` e `npm run build` e publica a pasta `out/` no GitHub Pages. No repositório, vá em **Settings → Pages → Source: GitHub Actions** (uma vez só).

## Decisões

- **Exportação estática** (`output: "export"`): sem servidor, hospedagem gratuita e carregamento rápido.
- **Fontes locais em woff2**: não dependem de serviços externos e pesam ~120 KB no total.
- **Conteúdo separado dos componentes**: mudar um texto não exige mexer em JSX.
- **Diagrama em SVG**: nítido em qualquer tela e acessível (`role="img"` + `aria-label`).
