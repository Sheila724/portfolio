import type { NextConfig } from "next";

/**
 * Export 100% estático: o site inteiro vira HTML/CSS em `out/`
 * e pode ser servido por Nginx, Apache, Cloudflare Pages ou Vercel.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
