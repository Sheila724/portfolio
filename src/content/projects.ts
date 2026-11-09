import type { T, TList } from "@/lib/i18n";

export type Status = "live" | "building" | "demo";

export type Project = {
  slug: string;
  name: string | T;
  /** Destaque na seção principal (com ilustração própria). */
  featured?: "globe" | "terminal" | "fleet" | "pet";
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
  /** Observação curta exibida junto ao link do código. */
  note?: T;
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
    host: { pt: "Na sua máquina", en: "On your machine" },
    tagline: {
      pt: "Simulador open source de incidentes para quem está começando em DevOps, SRE e infraestrutura.",
      en: "An open source incident simulator for people starting out in DevOps, SRE and infrastructure.",
    },
    problem: {
      pt: "Quem estuda infraestrutura quase nunca tem onde errar com segurança. Incidente de verdade só aparece no plantão, quando já não dá para errar.",
      en: "People learning infrastructure rarely have a safe place to make mistakes. Real incidents only show up on call, when mistakes are no longer an option.",
    },
    solution: {
      pt: "Você recebe o alerta, entra num Linux real com a falha já injetada e só passa se corrigir a causa raiz, não só o sintoma. Cada cenário tem uma armadilha, dicas progressivas e um postmortem com linha do tempo e 5 porquês. Tudo em português.",
      en: "You get the alert, land on a real Linux box with the failure already injected, and only pass by fixing the root cause, not just the symptom. Every scenario has a trap, progressive hints and a postmortem with a timeline and five whys.",
    },
    highlights: {
      pt: [
        "8 incidentes na trilha iniciante: disco cheio, nginx quebrado, permissão negada por hardening, CPU a 100%, porta ocupada, cron, SSH e inodes esgotados",
        "Terminal real no navegador (WebSocket + PTY), monitoramento ao vivo, verificação automática, pontuação e MTTR pessoal",
        "Labs Ubuntu com systemd isolados em containers Sysbox, com limite de CPU, memória e processos",
        "Binário único com os cenários embutidos, instalador com checksum, release multiarquitetura e imagem no GHCR via GitHub Actions",
        "Instala com um comando e roda em Linux, macOS ou WSL2",
      ],
      en: [
        "8 incidents on the beginner track: full disk, broken nginx, permission denied by hardening, 100% CPU, port in use, cron, SSH and inode exhaustion",
        "Real terminal in the browser (WebSocket + PTY), live monitoring, automatic verification, scoring and personal MTTR",
        "Ubuntu labs with systemd isolated in Sysbox containers, with CPU, memory and process limits",
        "Single binary with embedded scenarios, checksum-verified installer, multi-arch releases and a GHCR image via GitHub Actions",
        "One-command install, runs on Linux, macOS or WSL2",
      ],
    },
    next: {
      pt: "Próximos passos: trilhas intermediária e avançada e um modo plantão, com incidentes aleatórios e alertas, como no dia a dia.",
      en: "Next up: intermediate and advanced tracks and an on-call mode with random incidents and alerts, just like a real rotation.",
    },
    stack: ["Go", "Svelte", "xterm.js", "Docker", "Sysbox", "Bash", "GitHub Actions"],
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
    slug: "monitor-atendimento",
    name: { pt: "Monitor de atendimento por e-mail", en: "Email support monitor" },
    status: "live",
    visibility: "private",
    host: { pt: "VPS na nuvem", en: "Cloud VPS" },
    tagline: {
      pt: "Garante que nenhum e-mail de cliente fique sem resposta: avisa a equipe no WhatsApp, cobra por prazo e mostra tudo num painel.",
      en: "Makes sure no customer email goes unanswered: it alerts the team on WhatsApp, escalates by deadline and shows everything on a dashboard.",
    },
    problem: {
      pt: "Os pedidos de clientes chegavam em listas de e-mail compartilhadas pela equipe inteira. Não dava para saber o que já tinha sido respondido, por quem, nem há quanto tempo o cliente estava esperando.",
      en: "Customer requests arrived on email lists shared by the whole team. There was no way to know what had been answered, by whom, or how long the customer had been waiting.",
    },
    solution: {
      pt: "Um serviço que lê as caixas por IMAP sem marcar nada como lido, liga cada conversa ao seu atendimento, identifica quem respondeu pela assinatura e só considera respondido quando o cliente está nos destinatários. Avisos e cobranças vão para o grupo da equipe no WhatsApp, e um painel web mostra a fila, os indicadores e um modo TV.",
      en: "A service that reads the mailboxes over IMAP without marking anything as read, links each conversation to its ticket, identifies who replied from the email signature and only counts a reply when the customer is among the recipients. Alerts and reminders go to the team's WhatsApp group, and a web dashboard shows the queue, metrics and a TV mode.",
    },
    highlights: {
      pt: [
        "Cobrança escalonada por prazo, em 30 min, 1 h, 2 h e 4 h; urgentes, como serviço fora do ar ou invasão, a partir de 10 min",
        "Classificação de tipo e urgência por palavras-chave, com IA opcional que recebe só o texto novo, devolve JSON validado e volta ao modo local se falhar",
        "Comandos em linguagem natural no WhatsApp por um servidor MCP ligado ao Hermes Agent, tratando o conteúdo dos e-mails como dado, nunca como instrução",
        "Painel com quatro perfis de acesso e filtro aplicado no servidor, indicadores clicáveis com exportação CSV e assistente de IA que sugere respostas sem enviar nada sozinho",
        "Avisos em fila no banco: se a ponte do WhatsApp cair, nada se perde",
        "92 testes automatizados, deploy pelo GitHub Actions via SSH, PostgreSQL, Caddy com HTTPS e backup diário",
      ],
      en: [
        "Escalating reminders at 30 min, 1 h, 2 h and 4 h; urgent cases, such as an outage or a breach, start at 10 min",
        "Type and urgency classification by keywords, with optional AI that only sees the new text, returns validated JSON and falls back to local rules on failure",
        "Natural-language commands on WhatsApp through an MCP server connected to the Hermes Agent, treating email content as data, never as instructions",
        "Dashboard with four access roles and server-side filtering, clickable metrics with CSV export and an AI assistant that drafts replies without sending anything",
        "Alerts queued in the database: if the WhatsApp bridge goes down, nothing is lost",
        "92 automated tests, GitHub Actions deploy over SSH, PostgreSQL, Caddy with HTTPS and daily backups",
      ],
    },
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "MCP", "Hermes Agent", "Gemini", "Caddy", "Docker", "GitHub Actions"],
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
    featured: "pet",
    status: "live",
    visibility: "public",
    host: { pt: "VPS + Windows", en: "VPS + Windows" },
    tagline: {
      pt: "Um pet de tela que ganhou um cérebro na nuvem: conversa, lembra compromissos, avisa da chuva e escreve um diário.",
      en: "A desktop pet that got a brain in the cloud: it chats, keeps reminders, warns you about rain and writes a diary.",
    },
    problem: {
      pt: "Ligar um pet de desktop a um agente de IA rodando num computador de trabalho, atrás de firewall e proxy, sem VPN, sem porta aberta no PC e sem deixar o agente exposto na internet.",
      en: "Connecting a desktop pet to an AI agent from a work computer behind a firewall and proxy, with no VPN, no open port on the PC and without exposing the agent to the internet.",
    },
    solution: {
      pt: "Uma ponte em FastAPI na VPS atende o pet por HTTPS e conversa com o Hermes Agent, que só escuta em localhost. A rede neural original continua decidindo o humor; o agente conversa e pede ações ao corpo, e o instinto decide se obedece.",
      en: "A FastAPI bridge on the VPS serves the pet over HTTPS and talks to the Hermes Agent, which only listens on localhost. The original neural network still decides the mood; the agent chats and asks the body to act, and instinct decides whether to obey.",
    },
    highlights: {
      pt: [
        "Polling HTTPS a cada 5 segundos em vez de WebSocket: passa em qualquer rede corporativa e é fácil de depurar",
        "Fila com id crescente em SQLite: nada se perde nem aparece duas vezes, mesmo com o pet fechado",
        "Agente com o mínimo de ferramentas, só pesquisa e memória; lembretes, clima e diário são código da ponte",
        "VPS endurecida: login só por chave, firewall em 22, 80 e 443, Caddy com Let's Encrypt e token comparado em tempo constante",
        "Instâncias separadas por pessoa, cada uma com memória e personalidade próprias",
        "CI em Windows, macOS e Linux, executável com PyInstaller e instalador com Inno Setup",
      ],
      en: [
        "HTTPS polling every 5 seconds instead of WebSockets: works on any corporate network and is easy to debug",
        "Monotonic-id queue in SQLite: nothing is lost or shown twice, even while the pet is closed",
        "Agent with the bare minimum of tools, only search and memory; reminders, weather and the diary live in the bridge",
        "Hardened VPS: key-only SSH, firewall on 22, 80 and 443, Caddy with Let's Encrypt and constant-time token checks",
        "Separate instances per person, each with its own memory and personality",
        "CI on Windows, macOS and Linux, a PyInstaller executable and an Inno Setup installer",
      ],
    },
    stack: ["Python", "PySide6", "FastAPI", "SQLite", "Caddy", "Hermes Agent", "Gemini", "GitHub Actions"],
    links: { repo: "https://github.com/Sheila724/pestinha-hermes" },
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
      pt: "Agentes self-hosted que acompanham projetos, avisam prazos vencidos e respondem no Discord.",
      en: "Self-hosted agents that track projects, flag overdue deadlines and answer on Discord.",
    },
    problem: {
      pt: "Muita informação chegando por ferramentas de projeto e canais diferentes, e pouca gente para acompanhar tudo a tempo.",
      en: "A lot of information arriving through project tools and different channels, and too few people to keep up with it in time.",
    },
    solution: {
      pt: "Uma camada de agentes sobre o framework Hermes, da Nous Research, rodando em homelab e VPS: alertas de projetos do OpenProject, avisos no WhatsApp e um bot no Discord que escolhe o modelo de linguagem conforme a tarefa. A parte de e-mail evoluiu para o Monitor de atendimento por e-mail.",
      en: "A layer of agents on Nous Research's Hermes framework, running across a homelab and a VPS: OpenProject alerts, WhatsApp notifications and a Discord bot that picks the language model for each task. The email part grew into the Email support monitor.",
    },
    highlights: {
      pt: [
        "Webhooks do OpenProject com responsáveis, tarefas atrasadas e alerta de prazo",
        "Bot no Discord com slash commands e roteamento entre Gemini Flash e Nous Portal",
        "Avisos no WhatsApp por uma ponte Baileys",
        "Tarefas agendadas pelo scheduler do próprio Hermes",
      ],
      en: [
        "OpenProject webhooks with assignees, overdue tasks and deadline alerts",
        "Discord bot with slash commands and routing between Gemini Flash and Nous Portal",
        "WhatsApp notifications through a Baileys bridge",
        "Jobs scheduled with Hermes' own scheduler",
      ],
    },
    stack: ["Python", "Hermes Agent", "Discord", "OpenProject", "Gemini"],
  },
  {
    slug: "homelab",
    name: "Homelab Proxmox",
    status: "live",
    visibility: "public",
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
        "Pi-hole, n8n, Dolibarr, Anytype, agente Hermes e um laboratório de BI com Metabase, Superset e Redash",
        "Monitoramento centralizado com Zabbix e alertas para WhatsApp e Discord",
        "Cada serviço em seu próprio LXC ou VM, fácil de recriar",
      ],
      en: [
        "Pi-hole, n8n, Dolibarr, Anytype, a Hermes agent and a BI lab with Metabase, Superset and Redash",
        "Centralized Zabbix monitoring with alerts to WhatsApp and Discord",
        "Each service in its own LXC or VM, easy to rebuild",
      ],
    },
    next: {
      pt: "Próximo passo: um cluster com mais máquinas e infraestrutura como código com Terraform e Ansible.",
      en: "Next up: a multi-node cluster and infrastructure as code with Terraform and Ansible.",
    },
    stack: ["Proxmox", "LXC", "Cloudflare", "Zabbix", "n8n", "Pi-hole", "Metabase"],
    links: { repo: "https://github.com/Sheila724/homelab" },
  },
  {
    slug: "onboard-lab",
    name: "Onboard Lab",
    status: "live",
    visibility: "private",
    host: { pt: "Servidor próprio", en: "Own server" },
    tagline: {
      pt: "Plataforma de integração e treinamento de equipes de atendimento, com correção por IA e simulação de ligações e chats.",
      en: "An onboarding and training platform for support teams, with AI grading and simulated calls and chats.",
    },
    problem: {
      pt: "O treinamento de quem chegava dependia de materiais soltos e de alguém disponível para explicar, e não havia como praticar um atendimento antes de falar com um cliente de verdade.",
      en: "Onboarding depended on scattered material and on someone being free to explain it, and there was no way to practice a call before talking to a real customer.",
    },
    solution: {
      pt: "Trilhas de estudo com atividades corrigidas por IA ponto a ponto, um simulador em que a IA faz o papel do cliente por voz e por chat, acompanhamento do tutor e modo prova. Feita por iniciativa própria e hoje usada no dia a dia da equipe de suporte.",
      en: "Learning paths with activities graded point by point by AI, a simulator where AI plays the customer by voice and chat, tutor follow-up and an exam mode. Built on my own initiative and now part of the support team's routine.",
    },
    highlights: {
      pt: [
        "Cliente simulado por IA em ligações por voz e em atendimentos por chat, com níveis de dificuldade e protocolo de inatividade conferido pelo código",
        "Respostas abertas corrigidas ponto a ponto, citando o trecho, com validação humana obrigatória nas provas",
        "Assistente que tira dúvidas só com a base de conhecimento interna e mostra de onde veio a resposta",
        "Multiempresa com Row-Level Security no PostgreSQL: uma empresa não vê dados de outra nem direto no banco",
        "Modo prova com acesso único, prazo, tentativas e rascunho salvo sozinho se a rede ou a energia cair",
        "Quatro perfis de acesso e mais de 140 testes de ponta a ponta rodando contra um PostgreSQL real",
      ],
      en: [
        "AI-simulated customers on voice calls and chat, with difficulty levels and an inactivity protocol checked in code",
        "Open answers graded point by point with quotes from the answer, and mandatory human validation on exams",
        "An assistant that answers questions only from the internal knowledge base and shows the source",
        "Multi-tenant with PostgreSQL Row-Level Security: one company cannot see another's data, not even directly in the database",
        "Exam mode with single-session access, deadlines, attempts and drafts saved automatically if the network or power drops",
        "Four access roles and more than 140 end-to-end tests running against a real PostgreSQL",
      ],
    },
    stack: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "Gemini", "Docker", "Nginx"],
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
