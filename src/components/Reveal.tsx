"use client";

import { useEffect, useRef, useState } from "react";

// Faz o conteúdo surgir (fade + subida + desfoque) quando entra na tela.
// Sem JavaScript, ou com "reduzir movimento" ativo, o conteúdo aparece normalmente.
export function Reveal({
  children,
  delay = 0,
  threshold = 0.12,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: "div" | "li" | "article" | "p" | "h2";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // O que já está visível ao carregar não anima (evita piscar)
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setState("shown");
      return;
    }
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const Component = Tag as React.ElementType;
  return (
    <Component
      ref={ref}
      data-reveal={state}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : undefined }}
      className={`reveal ${className}`}
    >
      {children}
    </Component>
  );
}
