"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";

const FILE_NAME = "curriculo-ian-araujo.pdf";
const MAX_PAGE_WIDTH = 860;

const buttonBase =
  "inline-flex items-center whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-semibold transition";

type Link = { url: string; left: number; top: number; width: number; height: number };
type Status = "loading" | "ready" | "error";

// Desenha o PDF no próprio site (canvas), sem a barra do visualizador do navegador.
// A biblioteca só é baixada quando o currículo é aberto.
function ResumeViewer() {
  const holderRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [links, setLinks] = useState<Link[]>([]);
  const [ratio, setRatio] = useState(1.414);

  useEffect(() => {
    let cancelled = false;
    let renderTask: { cancel: () => void } | null = null;
    let observer: ResizeObserver | null = null;
    let timer: ReturnType<typeof setTimeout> | undefined;

    async function start() {
      try {
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();
        const doc = await pdfjs.getDocument(profile.resume).promise;
        const page = await doc.getPage(1);
        const base = page.getViewport({ scale: 1 });
        if (cancelled) return;
        setRatio(base.height / base.width);

        const annotations = await page.getAnnotations();

        async function draw() {
          const holder = holderRef.current;
          const canvas = canvasRef.current;
          if (!holder || !canvas || cancelled) return;
          const width = Math.min(holder.clientWidth, MAX_PAGE_WIDTH);
          const scale = width / base.width;
          const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
          const cssViewport = page.getViewport({ scale });
          const viewport = page.getViewport({ scale: scale * dpr });

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = `${cssViewport.width}px`;
          canvas.style.height = `${cssViewport.height}px`;

          renderTask?.cancel();
          const task = page.render({ canvas, viewport });
          renderTask = task;
          try {
            await task.promise;
          } catch {
            return; // render cancelado por um novo redimensionamento
          }
          if (cancelled) return;

          setLinks(
            annotations
              .filter((a) => a.subtype === "Link" && a.url)
              .map((a) => {
                const [x1, y1, x2, y2] = cssViewport.convertToViewportRectangle(a.rect);
                return {
                  url: a.url as string,
                  left: Math.min(x1, x2),
                  top: Math.min(y1, y2),
                  width: Math.abs(x2 - x1),
                  height: Math.abs(y2 - y1),
                };
              }),
          );
          setStatus("ready");
        }

        await draw();
        observer = new ResizeObserver(() => {
          clearTimeout(timer);
          timer = setTimeout(draw, 150);
        });
        if (holderRef.current) observer.observe(holderRef.current);
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    start();
    return () => {
      cancelled = true;
      clearTimeout(timer);
      observer?.disconnect();
      renderTask?.cancel();
    };
  }, []);

  if (status === "error") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
        <p className="max-w-sm text-sm text-body">
          Não consegui mostrar o currículo aqui. Você ainda pode abrir ou baixar o PDF.
        </p>
        <div className="flex gap-2">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} border-accent/60 text-accent hover:bg-accent hover:text-bg`}
          >
            Abrir em nova aba
          </a>
          <a
            href={profile.resume}
            download={FILE_NAME}
            className={`${buttonBase} border-accent bg-accent text-bg hover:bg-accent-deep hover:border-accent-deep`}
          >
            Baixar PDF
          </a>
        </div>
      </div>
    );
  }

  return (
    <div ref={holderRef} className="mx-auto w-full" style={{ maxWidth: MAX_PAGE_WIDTH }}>
      {status === "loading" && (
        <div
          role="status"
          aria-label="Carregando currículo"
          className="w-full animate-pulse rounded-md bg-surface-2"
          style={{ aspectRatio: `1 / ${ratio}` }}
        />
      )}
      <div className="relative mx-auto w-fit">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Currículo de Ian Araújo Uchoa"
          className={`block rounded-md ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] ${
            status === "ready" ? "" : "hidden"
          }`}
        />
        {status === "ready" &&
          links.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.url}
              className="absolute rounded-sm transition-colors hover:bg-accent/15"
              style={{ left: l.left, top: l.top, width: l.width, height: l.height }}
            />
          ))}
      </div>
    </div>
  );
}

// Mostra o currículo na própria página, com opção de baixar ou abrir em outra aba.
export function ResumeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/85 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Currículo de Ian Araújo"
        className="flex h-full max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div>
            <p className="font-display text-sm font-semibold text-ink">Currículo</p>
            <p className="hidden text-xs text-muted sm:block">{profile.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download={FILE_NAME}
              className={`${buttonBase} border-accent bg-accent text-bg hover:bg-accent-deep hover:border-accent-deep`}
            >
              Baixar PDF
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar currículo"
              className={`${buttonBase} border-line text-body hover:border-accent hover:text-accent`}
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-bg/60 p-3 sm:p-6">
          <ResumeViewer />
        </div>
      </div>
    </div>
  );
}
