import type { NextConfig } from "next";

// Site 100% estático (pasta out/) para publicar no GitHub Pages.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
