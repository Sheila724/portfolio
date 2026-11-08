import type { T } from "@/lib/i18n";

export type JourneyItem = {
  /** Período, ex.: "2024 — hoje". Deixe vazio para não exibir. */
  period?: string;
  current?: boolean;
  role: T;
  org: string | T;
  summary: T;
};

/** Trajetória do mais recente para o mais antigo. */
export const journey: JourneyItem[] = [
  {
    current: true,
    role: { pt: "Suporte técnico", en: "Technical support" },
    org: { pt: "Data center em Franca, SP", en: "Data center in Franca, Brazil" },
    summary: {
      pt: "Suporte a clientes de nuvem e VPS, troubleshooting de firewall e rede, e ferramentas internas que reduzem acesso remoto manual.",
      en: "Support for cloud and VPS customers, firewall and network troubleshooting, and internal tools that cut down on manual remote access.",
    },
  },
  {
    current: true,
    role: { pt: "Infraestrutura e desenvolvimento, voluntária", en: "Infrastructure and development, volunteer" },
    org: "Universo Prematuro",
    summary: {
      pt: "Mantenho o site, o servidor e o sistema interno de uma ONG que apoia famílias de bebês prematuros.",
      en: "I run the website, server and internal system for a nonprofit that supports families of premature babies.",
    },
  },
  {
    role: { pt: "Administração de sistemas", en: "Systems administration" },
    org: { pt: "Homelab e projetos próprios", en: "Homelab and personal projects" },
    summary: {
      pt: "Anos administrando infraestrutura Proxmox: VMs, containers, backups, monitoramento e publicação de serviços.",
      en: "Years running Proxmox infrastructure: VMs, containers, backups, monitoring and service publishing.",
    },
  },
  {
    role: { pt: "Assistente administrativa", en: "Administrative assistant" },
    org: "Unimed Franca",
    summary: {
      pt: "Autorização e auditoria de guias e suporte às secretárias, perto dos processos que a tecnologia precisa atender.",
      en: "Authorization and audit of medical claims and support to front-desk staff, close to the processes technology has to serve.",
    },
  },
  {
    role: {
      pt: "Tecnologia em Desenvolvimento de Software Multiplataforma",
      en: "Associate degree in Multiplatform Software Development",
    },
    org: "FATEC Franca",
    summary: {
      pt: "Formação em desenvolvimento web e mobile, banco de dados e engenharia de software.",
      en: "Training in web and mobile development, databases and software engineering.",
    },
  },
];
