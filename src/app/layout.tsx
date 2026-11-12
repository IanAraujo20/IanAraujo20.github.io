import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./globals.css";

// Fontes locais (subset latino em woff2): carregam rápido e não dependem do Google Fonts no build
const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "../fonts/Poppins-Medium.woff2", weight: "500" },
    { path: "../fonts/Poppins-Bold.woff2", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const title = `${profile.shortName} · ${profile.role} | IA aplicada`;
const description =
  "Desenvolvedor full stack que constrói APIs em produção e sistemas de IA com LLMs: agentes, memória persistente e pipelines de decisão.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  authors: [{ name: profile.name }],
  keywords: ["Desenvolvedor Full Stack", "IA aplicada", "LLM", "Agentes de IA", "NestJS", "TypeScript", "Python", "Next.js", "Fortaleza"],
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.shortName,
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans text-[15px] leading-relaxed">{children}</body>
    </html>
  );
}
