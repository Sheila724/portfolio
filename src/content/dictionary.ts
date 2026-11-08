import type { Locale } from "@/lib/i18n";

const pt = {
  skip: "Pular para o conteúdo",
  nav: { projects: "Projetos", stack: "Stack", journey: "Trajetória", contact: "Contato", menu: "Menu", close: "Fechar" },
  switchTo: "English",
  switchLabel: "Read in English",
  hero: {
    lead: "Cuido de servidores, redes e suporte técnico, e construo as ferramentas que deixam esse trabalho mais rápido e previsível.",
    seeProjects: "Ver projetos",
    contact: "Falar comigo",
    availability: "Aberta a CLT, PJ e freelance. Remoto, híbrido ou mudança de cidade.",
  },
  board: {
    title: "Painel de projetos",
    summary: (live: number, total: number) => `${live} de ${total} no ar`,
    checking: "verificando",
    footnote: "Status atual de cada projeto e onde ele roda.",
    prompt: "sheila@lab:~$",
    command: "uptime",
    output: "disponível para novos desafios",
  },
  projects: {
    title: "Projetos",
    intro: "Ferramentas que nasceram de problemas reais de operação e suporte. Abra qualquer um para ver o problema, a solução e a stack.",
    more: "Outros projetos",
    open: "Ver detalhes",
    problem: "O problema",
    solution: "A solução",
    highlights: "Destaques técnicos",
    stack: "Stack",
    runsOn: "Onde roda",
    repo: "Ver código no GitHub",
    privateRepo: "Código privado. Posso mostrar numa conversa.",
    status: "Status",
  },
  stack: {
    title: "Stack",
    intro: "O que uso no dia a dia, agrupado pelo tipo de problema que resolve. O número indica em quantos projetos daqui a tecnologia aparece.",
    inProjects: (n: number) => (n === 1 ? "1 projeto" : `${n} projetos`),
  },
  journey: {
    title: "Trajetória",
    intro: "Do atendimento à infraestrutura: entender quem usa o sistema sempre veio antes de mexer nele.",
    now: "Atual",
  },
  contact: {
    title: "Vamos conversar?",
    lead: "Procuro vagas em infraestrutura, NOC, SRE, suporte N2/N3 e automação. Também aceito projetos freelance.",
    email: "Enviar e-mail",
    copy: "Copiar e-mail",
    copied: "E-mail copiado",
  },
  footer: {
    built: "Feito com Next.js e TypeScript, exportado como site estático.",
    source: "Código do site",
  },
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  skip: "Skip to content",
  nav: { projects: "Projects", stack: "Stack", journey: "Journey", contact: "Contact", menu: "Menu", close: "Close" },
  switchTo: "Português",
  switchLabel: "Ler em português",
  hero: {
    lead: "I look after servers, networks and technical support, and I build the tools that make that work faster and more predictable.",
    seeProjects: "See projects",
    contact: "Get in touch",
    availability: "Open to full-time, contract and freelance work. Remote, hybrid or relocation.",
  },
  board: {
    title: "Project board",
    summary: (live: number, total: number) => `${live} of ${total} live`,
    checking: "checking",
    footnote: "Current status of each project and where it runs.",
    prompt: "sheila@lab:~$",
    command: "uptime",
    output: "available for new challenges",
  },
  projects: {
    title: "Projects",
    intro: "Tools that grew out of real operations and support problems. Open any of them to see the problem, the solution and the stack.",
    more: "More projects",
    open: "View details",
    problem: "The problem",
    solution: "The solution",
    highlights: "Technical highlights",
    stack: "Stack",
    runsOn: "Runs on",
    repo: "View code on GitHub",
    privateRepo: "Private code. Happy to walk you through it on a call.",
    status: "Status",
  },
  stack: {
    title: "Stack",
    intro: "What I use day to day, grouped by the kind of problem it solves. The number shows how many projects on this page use it.",
    inProjects: (n: number) => (n === 1 ? "1 project" : `${n} projects`),
  },
  journey: {
    title: "Journey",
    intro: "From the help desk to infrastructure: understanding the people who use a system has always come before changing it.",
    now: "Current",
  },
  contact: {
    title: "Let's talk",
    lead: "I'm looking for roles in infrastructure, NOC, SRE, tier 2/3 support and automation. Freelance projects are welcome too.",
    email: "Send an email",
    copy: "Copy email",
    copied: "Email copied",
  },
  footer: {
    built: "Built with Next.js and TypeScript, exported as a static site.",
    source: "Site source",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { pt, en };
