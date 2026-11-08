import type { T } from "@/lib/i18n";

export type StackGroup = { id: string; title: T; note: T; items: string[] };

/**
 * Tecnologias agrupadas por área. O número de projetos ao lado de cada uma
 * é calculado a partir de `projects.ts`, então não precisa manter à mão.
 */
export const stackGroups: StackGroup[] = [
  {
    id: "infra",
    title: { pt: "Infraestrutura e redes", en: "Infrastructure and networking" },
    note: { pt: "Servidores, virtualização e publicação de serviços.", en: "Servers, virtualization and service delivery." },
    items: ["Linux", "Proxmox", "LXC", "Docker", "Nginx", "Apache", "Traefik", "Cloudflare", "Pi-hole"],
  },
  {
    id: "observability",
    title: { pt: "Observabilidade", en: "Observability" },
    note: { pt: "Saber que algo quebrou antes do cliente.", en: "Knowing something broke before the customer does." },
    items: ["Zabbix", "Grafana", "SLO e MTTR"],
  },
  {
    id: "backend",
    title: { pt: "Backend e dados", en: "Backend and data" },
    note: { pt: "APIs, bancos e ferramentas internas.", en: "APIs, databases and internal tools." },
    items: ["Python", "Flask", "Node.js", "TypeScript", "NestJS", "PostgreSQL", "MySQL", "Strapi", "Google Apps Script"],
  },
  {
    id: "automation",
    title: { pt: "Automação e IA", en: "Automation and AI" },
    note: { pt: "Tirar trabalho repetitivo das pessoas.", en: "Taking repetitive work off people's plates." },
    items: ["n8n", "Ollama", "Qdrant", "Hermes Agent", "Gemini", "Espanso"],
  },
  {
    id: "delivery",
    title: { pt: "Entrega e segurança", en: "Delivery and security" },
    note: { pt: "Código versionado, testado e verificado antes de subir.", en: "Code that is versioned, tested and checked before it ships." },
    items: ["Git", "GitHub Actions", "Dependabot", "gitleaks", "bandit"],
  },
  {
    id: "frontend",
    title: { pt: "Interfaces e BI", en: "Interfaces and BI" },
    note: { pt: "Painéis que se leem de relance.", en: "Dashboards you can read at a glance." },
    items: ["JavaScript", "D3.js", "Chart.js", "Next.js", "Metabase"],
  },
];
