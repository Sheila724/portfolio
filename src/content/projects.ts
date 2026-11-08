import type { T, TList } from "@/lib/i18n";

export type Status = "live" | "building" | "demo";

export type Project = {
  slug: string;
  name: string | T;
  /** Destaque na seção principal (com ilustração própria). */
  featured?: "globe" | "terminal" | "fleet";
  status: Status;
  /** Código público no GitHub ou repositório privado. */
  visibility: "public" | "private";
  /** Onde o projeto roda — aparece no painel de status do topo. */
  host: T;
  tagline: T;
  problem: T;
  solution: T;
  highlights: TList;
  next?: T;
  stack: string[];
  links?: { repo?: string; demo?: string };
  credit?: { text: T; href: string };
};

/** Versão curta usada no painel do topo. */
export const statusShort: Record<Status, T> = {
  live: { pt: "No ar", en: "Live" },
  building: { pt: "Construindo", en: "Building" },
  demo: { pt: "Demo", en: "Demo" },
};

export const statusLabel: Record<Status, T> = {
  live: { pt: "No ar", en: "Live" },
  building: { pt: "Em desenvolvimento", en: "In development" },
  demo: { pt: "Demo", en: "Demo" },
};

export const projects: Project[] = [
  {
    slug: "noc-horizon",
    name: "NOC Horizon",
    featured: "globe",
    status: "live",
    visibility: "public",
    host: { pt: "VPS na nuvem", en: "Cloud VPS" },
    tagline: {
      pt: "Central de operações com monitoramento global em tempo real, construída sobre a API do Zabbix.",
      en: "A real-time global operations center built on top of the Zabbix API.",
    },
    problem: {
      pt: "Os painéis padrão do Zabbix mostram muito dado e pouca leitura rápida. Numa central de operações, a pergunta é uma só: onde está o problema agora?",
      en: "Default Zabbix dashboards show a lot of data and very little at-a-glance reading. In an operations center there is only one question: where is the problem right now?",
    },
    solution: {
      pt: "Um globo interativo com o status de cada local e host, que detecta quando um equipamento parou de enviar dados e calcula SLO, orçamento de erro, MTTR e MTTA. Alertas de problema e de resolução também chegam pelo WhatsApp.",
      en: "An interactive globe showing the status of every site and host. It detects when a device stops sending data and tracks SLO, error budget, MTTR and MTTA. Problem and recovery alerts are also delivered over WhatsApp.",
    },
    highlights: {
      pt: [
        "Backend em Python com Flask e Gunicorn lendo a API do Zabbix 7.x; os locais vêm do inventário do próprio Zabbix",
        "Frontend em JavaScript puro com D3.js e TopoJSON",
        "Login OIDC no Apache e modo demo que sobe com um único docker compose",
        "CI no GitHub Actions com ruff, pytest, pip-audit, bandit, gitleaks e teste do compose, mais Dependabot",
        "Runbook e postmortem documentados no repositório",
      ],
      en: [
        "Python backend with Flask and Gunicorn reading the Zabbix 7.x API; sites come straight from the Zabbix inventory",
        "Vanilla JavaScript frontend with D3.js and TopoJSON",
        "OIDC login at the Apache layer and a demo mode that starts with a single docker compose",
        "GitHub Actions CI with ruff, pytest, pip-audit, bandit, gitleaks and a compose test, plus Dependabot",
        "Runbook and postmortem documented in the repository",
      ],
    },
    next: {
      pt: "Próximos passos: controle de acesso por papéis, outros provedores de monitoramento e histórico de uptime por local.",
      en: "Next up: role-based access control, more monitoring providers and per-site uptime history.",
    },
    stack: ["Python", "Flask", "Zabbix", "D3.js", "Docker", "Apache", "GitHub Actions"],
    links: { repo: "https://github.com/Sheila724/noc-horizon" },
  },
  {
    slug: "incidente-zero",
    name: "Incidente Zero",
    featured: "terminal",
    status: "building",
    visibility: "public",
    host: { pt: "VPS na nuvem", en: "Cloud VPS" },
    tagline: {
      pt: "Laboratório open source para quem está começando em DevOps e SRE treinar resposta a incidentes.",
      en: "An open source lab where people starting out in DevOps and SRE practice incident response.",
    },
    problem: {
      pt: "Quem estuda infraestrutura quase nunca tem onde errar com segurança. Incidente de verdade só aparece no plantão, quando já não dá para errar.",
      en: "People learning infrastructure rarely have a safe place to make mistakes. Real incidents only show up on call, when mistakes are no longer an option.",
    },
    solution: {
      pt: "Cenários isolados que quebram de propósito, como disco cheio ou serviço fora do ar, com explicação, dicas de estudo e uma trilha do iniciante ao avançado. Roda online ou na sua máquina.",
      en: "Isolated scenarios that break on purpose, such as a full disk or a service going down, each with an explanation, study tips and a path from beginner to advanced. Runs online or on your own machine.",
    },
    highlights: {
      pt: [
        "Cada cenário roda em um container isolado com Docker e Sysbox",
        "Primeiro cenário, disco cheio, validado em VM na nuvem",
        "Acesso à demo protegido por Traefik",
        "Também roda em localhost, para quem quiser estudar sem depender de servidor",
      ],
      en: [
        "Every scenario runs in an isolated container using Docker and Sysbox",
        "First scenario, a full disk, validated on a cloud VM",
        "Demo access protected through Traefik",
        "Also runs on localhost for anyone who wants to study without a server",
      ],
    },
    next: {
      pt: "Próximo passo: modo plantão, em que a pessoa define sua disponibilidade e recebe incidentes aleatórios com alerta, como no dia a dia.",
      en: "Next up: an on-call mode where you set your availability and get random incidents with alerts, just like a real rotation.",
    },
    stack: ["Docker", "Sysbox", "Traefik", "Linux"],
    links: { repo: "https://github.com/Sheila724/incidente-zero" },
  },
  {
    slug: "sentinela",
    name: "Sentinela",
    featured: "fleet",
    status: "demo",
    visibility: "private",
    host: { pt: "VPS + Windows", en: "VPS + Windows" },
    tagline: {
      pt: "Painel e agente que detectam e corrigem sozinhos falhas do Nextcloud Desktop nos computadores dos clientes.",
      en: "A dashboard and agent that detect and fix Nextcloud Desktop failures on customer machines on their own.",
    },
    problem: {
      pt: "Depois de uma atualização, o Nextcloud Desktop parou de abrir no Windows de um cliente. A correção exigiu acesso remoto manual, máquina por máquina.",
      en: "After an update, Nextcloud Desktop stopped opening on a customer's Windows machine. Fixing it took manual remote access, one machine at a time.",
    },
    solution: {
      pt: "Um sistema no estilo RMM, porém mais restrito: um vigia local detecta a falha e faz o reparo, e um painel mostra o estado de cada máquina. O agente só executa ações de um menu fixo, sem shell remoto aberto.",
      en: "An RMM-style system with a much smaller attack surface: a local watcher detects the failure and repairs it, and a dashboard shows the state of every machine. The agent only runs actions from a fixed menu, with no open remote shell.",
    },
    highlights: {
      pt: [
        "Começou como um vigia local, uma tarefa agendada de reparo, antes de virar painel com agente",
        "Ferramentas RMM prontas, como o Tactical RMM, foram avaliadas e descartadas por segurança e escopo",
        "Demo em VPS com Nextcloud de teste e uma VM Windows fazendo o papel de cliente",
        "Pingo, um pet de tela para a equipe, reage ao estado dos vigias",
      ],
      en: [
        "Started as a local watcher, a scheduled repair task, before growing into a dashboard with an agent",
        "Off-the-shelf RMM tools such as Tactical RMM were evaluated and ruled out for security and scope",
        "Demo running on a VPS with a test Nextcloud and a Windows VM acting as the customer",
        "Pingo, an on-screen pet for the team, reacts to the state of the watchers",
      ],
    },
    stack: ["Nextcloud", "Windows", "Docker", "Linux"],
  },
  {
    slug: "suporte-rag",
    name: { pt: "Assistente de suporte no WhatsApp", en: "WhatsApp support assistant" },
    status: "live",
    visibility: "private",
    host: { pt: "VPS na nuvem", en: "Cloud VPS" },
    tagline: {
      pt: "Bot com RAG que responde dúvidas técnicas a partir de 228 manuais internos.",
      en: "A RAG bot that answers technical questions from 228 internal manuals.",
    },
    problem: {
      pt: "A resposta para a maioria das dúvidas do suporte já estava documentada, mas espalhada em centenas de PDFs.",
      en: "Most support questions already had a documented answer, scattered across hundreds of PDFs.",
    },
    solution: {
      pt: "Os documentos foram indexados num banco vetorial e ligados a um modelo de linguagem rodando no próprio servidor, conversando pelo WhatsApp e guardando o histórico de cada conversa.",
      en: "The documents were indexed into a vector database and wired to a language model running on our own server, talking over WhatsApp and keeping each conversation's history.",
    },
    highlights: {
      pt: [
        "228 PDFs indexados no Qdrant com embeddings nomic-embed-text de 768 dimensões",
        "Orquestração no n8n e inferência local com Ollama",
        "WhatsApp via Z-API e histórico de conversa em PostgreSQL",
      ],
      en: [
        "228 PDFs indexed in Qdrant with 768-dimension nomic-embed-text embeddings",
        "Orchestration in n8n and local inference with Ollama",
        "WhatsApp through Z-API and conversation history in PostgreSQL",
      ],
    },
    stack: ["n8n", "Qdrant", "Ollama", "PostgreSQL", "Docker"],
  },
  {
    slug: "universo-prematuro",
    name: "Universo Prematuro",
    status: "live",
    visibility: "private",
    host: { pt: "Servidor dedicado", en: "Dedicated server" },
    tagline: {
      pt: "Site, sistema interno e infraestrutura de uma ONG que apoia famílias de bebês prematuros. Trabalho voluntário.",
      en: "Website, internal system and infrastructure for a nonprofit that supports families of premature babies. Volunteer work.",
    },
    problem: {
      pt: "Uma ONG pequena precisava de um site que a própria equipe pudesse editar, de agendamento de atendimentos e de acompanhamento clínico, sem orçamento de TI.",
      en: "A small nonprofit needed a website its own team could edit, appointment scheduling and clinical follow-up, with no IT budget.",
    },
    solution: {
      pt: "Site com CMS headless, um sistema interno de agendamento e acompanhamento em Google Apps Script e a infraestrutura que mantém tudo no ar.",
      en: "A website on a headless CMS, an internal scheduling and follow-up system in Google Apps Script, and the infrastructure that keeps it all running.",
    },
    highlights: {
      pt: [
        "Site com Strapi e PostgreSQL: notícias, eventos e indicadores editados pela equipe",
        "Agendamento com cadastro de pacientes e responsáveis e cerca de 20 formulários de avaliação",
        "Curva de crescimento da OMS de 0 a 24 meses por idade corrigida, com Chart.js",
        "APIs NestJS com PM2 atrás de Nginx e Cloudflare; CI/CD no GitHub Actions com aviso no Telegram e WhatsApp",
        "Termos de uso com consentimento versionado, SEO e ajustes de responsividade",
      ],
      en: [
        "Strapi and PostgreSQL website: news, events and indicators edited by the team",
        "Scheduling with patient and guardian records and around 20 assessment forms",
        "WHO growth charts from 0 to 24 months by corrected age, built with Chart.js",
        "NestJS APIs on PM2 behind Nginx and Cloudflare; GitHub Actions CI/CD with Telegram and WhatsApp notifications",
        "Terms of use with versioned consent, SEO and responsive fixes",
      ],
    },
    stack: ["Strapi", "PostgreSQL", "NestJS", "Google Apps Script", "Chart.js", "Nginx", "Cloudflare", "GitHub Actions"],
  },
  {
    slug: "pestinha-hermes",
    name: "Pestinha + Hermes",
    status: "live",
    visibility: "private",
    host: { pt: "VPS na nuvem", en: "Cloud VPS" },
    tagline: {
      pt: "Pet de desktop com um agente de IA por trás, que conversa e acompanha o dia a dia de uma equipe de suporte.",
      en: "A desktop pet backed by an AI agent that chats with and keeps a support team company through the day.",
    },
    problem: {
      pt: "O Pestinha original é um pet de tela divertido, mas sem memória nem conversa. A ideia era dar a ele uma cabeça própria.",
      en: "The original Pestinha is a fun on-screen pet, but it has no memory and can't hold a conversation. The idea was to give it a mind of its own.",
    },
    solution: {
      pt: "Um agente Hermes instalado do zero numa VPS própria, com instâncias separadas por pessoa, cada uma com memória e personalidade, e um pet compartilhado para a equipe toda. É para brincar: sem chamados nem dados de clientes.",
      en: "A Hermes agent installed from scratch on a dedicated VPS, with a separate instance per person, each with its own memory and personality, plus a shared pet for the whole team. It's for fun: no tickets and no customer data.",
    },
    highlights: {
      pt: [
        "Agente Hermes self-hosted, isolado dos outros projetos",
        "Instâncias independentes com memória e personalidade próprias",
        "Pet compartilhado para equipes de 6 a 15 pessoas",
        "Pesquisa na web e modelo de linguagem via Tavily e Gemini",
      ],
      en: [
        "Self-hosted Hermes agent, isolated from other projects",
        "Independent instances with their own memory and personality",
        "A shared pet for teams of 6 to 15 people",
        "Web search and language model through Tavily and Gemini",
      ],
    },
    stack: ["Hermes Agent", "Gemini", "Tavily", "Linux"],
    credit: {
      text: { pt: "Baseado no Pestinha, criado por mille-okws", en: "Based on Pestinha, created by mille-okws" },
      href: "https://github.com/mille-okws/pestinha",
    },
  },
  {
    slug: "agentes-hermes",
    name: { pt: "Agentes de IA para operações", en: "AI agents for operations" },
    status: "live",
    visibility: "private",
    host: { pt: "Homelab + VPS", en: "Homelab + VPS" },
    tagline: {
      pt: "Agentes self-hosted que fazem triagem de e-mail, resumem o dia e avisam sobre prazos vencidos.",
      en: "Self-hosted agents that triage email, summarize the day and flag overdue deadlines.",
    },
    problem: {
      pt: "Muita informação chegando por e-mail e por ferramentas de projeto, e pouca gente para acompanhar tudo a tempo.",
      en: "A lot of information arriving by email and project tools, and too few people to keep up with all of it in time.",
    },
    solution: {
      pt: "Uma camada de agentes sobre o framework Hermes, da Nous Research, rodando em homelab e VPS: triagem de e-mails de suporte, resumo diário, alertas do OpenProject e um bot no Discord que escolhe o modelo de linguagem conforme a tarefa.",
      en: "A layer of agents on Nous Research's Hermes framework, running across a homelab and a VPS: support email triage, a daily summary, OpenProject alerts and a Discord bot that picks the language model for each task.",
    },
    highlights: {
      pt: [
        "Agente de triagem de e-mail de suporte com detecção de mudança de assunto",
        "Avisos no WhatsApp por uma ponte Baileys e registros em Google Sheets",
        "Webhooks do OpenProject com responsáveis, tarefas atrasadas e alerta de prazo",
        "Bot no Discord com slash commands e roteamento entre Gemini Flash e Nous Portal",
      ],
      en: [
        "Support email triage agent with topic-change detection",
        "WhatsApp notifications through a Baileys bridge and logs in Google Sheets",
        "OpenProject webhooks with assignees, overdue tasks and deadline alerts",
        "Discord bot with slash commands and routing between Gemini Flash and Nous Portal",
      ],
    },
    stack: ["Python", "Hermes Agent", "Discord", "OpenProject", "Google Sheets"],
  },
  {
    slug: "homelab",
    name: "Homelab Proxmox",
    status: "live",
    visibility: "private",
    host: { pt: "Notebook em casa", en: "Laptop at home" },
    tagline: {
      pt: "Um notebook antigo transformado em servidor com vários serviços self-hosted.",
      en: "An old laptop turned into a server running a range of self-hosted services.",
    },
    problem: {
      pt: "Aprender infraestrutura de verdade exige ter infraestrutura de verdade, e um lugar para testar antes de levar para produção.",
      en: "Learning real infrastructure takes real infrastructure, and a place to test things before they reach production.",
    },
    solution: {
      pt: "Proxmox num Acer Aspire E1-572 com containers LXC e VMs, publicado com segurança pelo Cloudflare Tunnel no meu domínio, sem abrir portas no roteador.",
      en: "Proxmox on an Acer Aspire E1-572 with LXC containers and VMs, safely exposed through Cloudflare Tunnel on my own domain without opening router ports.",
    },
    highlights: {
      pt: [
        "Pi-hole, n8n, agente Hermes e um laboratório de BI com Metabase, Superset e Redash",
        "Monitoramento centralizado com Zabbix e alertas para WhatsApp e Discord",
        "Cada serviço em seu próprio LXC ou VM, fácil de recriar",
      ],
      en: [
        "Pi-hole, n8n, a Hermes agent and a BI lab with Metabase, Superset and Redash",
        "Centralized Zabbix monitoring with alerts to WhatsApp and Discord",
        "Each service in its own LXC or VM, easy to rebuild",
      ],
    },
    next: {
      pt: "Próximo passo: um cluster com mais máquinas e infraestrutura como código com Terraform e Ansible.",
      en: "Next up: a multi-node cluster and infrastructure as code with Terraform and Ansible.",
    },
    stack: ["Proxmox", "LXC", "Cloudflare", "Zabbix", "n8n", "Pi-hole", "Metabase"],
  },
  {
    slug: "onboard-lab",
    name: "Onboard Lab",
    status: "live",
    visibility: "private",
    host: { pt: "Servidor próprio", en: "Own server" },
    tagline: {
      pt: "Plataforma de treinamento para quem está entrando numa equipe de suporte técnico.",
      en: "A training platform for people joining a technical support team.",
    },
    problem: {
      pt: "O treinamento de quem chegava dependia de materiais soltos e de alguém disponível para explicar.",
      en: "Onboarding depended on scattered material and on someone being free to explain it.",
    },
    solution: {
      pt: "Um site com trilhas organizadas a partir dos materiais de apoio da equipe, feito por iniciativa própria e hoje usado no dia a dia do suporte.",
      en: "A website with learning paths built from the team's support material, created on my own initiative and now part of the support team's routine.",
    },
    highlights: {
      pt: ["Hospedado em servidor próprio", "Adotado pela equipe de suporte"],
      en: ["Hosted on my own server", "Adopted by the support team"],
    },
    stack: ["Linux"],
  },
  {
    slug: "kit-atendimento",
    name: { pt: "Kit de atendimento", en: "Support toolkit" },
    status: "live",
    visibility: "private",
    host: { pt: "Estação de trabalho", en: "Workstation" },
    tagline: {
      pt: "Atalhos de texto e registro automático de chamados para agilizar o suporte.",
      en: "Text shortcuts and automatic ticket logging to speed up support.",
    },
    problem: {
      pt: "Respostas repetidas digitadas à mão e chamados registrados depois, quando dava tempo.",
      en: "Repeated answers typed by hand and tickets logged later, whenever there was time.",
    },
    solution: {
      pt: "Mais de 131 modelos de resposta no Espanso, e um atalho que registra o chamado no Notion por um webhook do n8n no momento do atendimento.",
      en: "More than 131 reply templates in Espanso, plus a shortcut that logs the ticket in Notion through an n8n webhook while the call is still happening.",
    },
    highlights: {
      pt: ["Mais de 131 gatilhos de resposta no Espanso", "Registro de chamado no Notion via webhook do n8n"],
      en: ["More than 131 reply triggers in Espanso", "Ticket logging in Notion through an n8n webhook"],
    },
    stack: ["Espanso", "n8n", "Notion"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
