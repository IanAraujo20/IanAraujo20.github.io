// Diagrama da arquitetura do Nexus, desenhado em SVG (escala sem perder nitidez).

const C = {
  box: "#111821",
  box2: "#16202b",
  line: "#2a3846",
  ink: "#f1f5f9",
  muted: "#7d8b99",
  accent: "#45c8d6",
};

function Box({ x, y, w, h, title, sub, hi = false }: { x: number; y: number; w: number; h: number; title: string; sub?: string; hi?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={hi ? "rgba(69,200,214,0.08)" : C.box} stroke={hi ? C.accent : C.line} strokeWidth={hi ? 1.6 : 1.2} />
      <text x={x + w / 2} y={sub ? y + h / 2 - 4 : y + h / 2 + 5} textAnchor="middle" fill={C.ink} fontSize={13.5} fontWeight={600}>
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 14} textAnchor="middle" fill={C.muted} fontSize={11}>
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ d }: { d: string }) {
  return <path d={d} fill="none" stroke={C.line} strokeWidth={1.4} markerEnd="url(#arrow)" />;
}

export function NexusDiagram() {
  const routes = [
    { t: "Memória", s: "salvar / consultar" },
    { t: "Pesquisa web", s: "autônoma" },
    { t: "Executor", s: "ações no sistema" },
    { t: "Dev Agent", s: "código" },
    { t: "Orquestrador", s: "subagentes" },
  ];
  const rw = 128;
  const gap = 14;
  const startX = (780 - (routes.length * rw + (routes.length - 1) * gap)) / 2;

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-bg p-4">
      <svg viewBox="0 0 780 470" role="img" aria-label="Arquitetura do Nexus: interface, API, classificador de modalidade, rotas, LLM e camada de memória" className="min-w-[620px]" style={{ fontFamily: "inherit" }}>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10z" fill={C.line} />
          </marker>
        </defs>

        <Box x={250} y={10} w={280} h={46} title="nexus-ui" sub="Next.js · React · ReactFlow" />
        <Arrow d="M390 56 V78" />
        <Box x={250} y={80} w={280} h={46} title="API Flask" sub="routes → services · REST + SSE" />
        <Arrow d="M390 126 V148" />
        <Box x={265} y={150} w={250} h={46} title="ModalityAnalyzer" sub="classifica a intenção" hi />

        {routes.map((r, i) => {
          const x = startX + i * (rw + gap);
          return (
            <g key={r.t}>
              <Arrow d={`M390 196 C390 214 ${x + rw / 2} 206 ${x + rw / 2} 226`} />
              <Box x={x} y={228} w={rw} h={50} title={r.t} sub={r.s} hi={r.t === "Orquestrador"} />
              <Arrow d={`M${x + rw / 2} 278 C${x + rw / 2} 296 390 292 390 308`} />
            </g>
          );
        })}

        <Box x={250} y={310} w={280} h={46} title="LLM" sub="OpenAI · com contexto da memória" />

        <rect x={40} y={378} width={700} height={82} rx={12} fill="none" stroke={C.accent} strokeDasharray="4 4" strokeOpacity={0.6} />
        <text x={58} y={398} fill={C.accent} fontSize={11} fontWeight={600} letterSpacing={1.5}>
          CAMADA DE MEMÓRIA
        </text>
        {["SQLite", "Peso + decay", "Consolidação 6 h", "Contradições", "Grafo de entidades"].map((t, i) => (
          <g key={t}>
            <rect x={58 + i * 135} y={410} width={124} height={36} rx={8} fill={C.box2} stroke={C.line} />
            <text x={58 + i * 135 + 62} y={433} textAnchor="middle" fill={C.ink} fontSize={12}>
              {t}
            </text>
          </g>
        ))}
        <path d="M390 356 V376" fill="none" stroke={C.accent} strokeWidth={1.4} strokeDasharray="3 3" markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
}
