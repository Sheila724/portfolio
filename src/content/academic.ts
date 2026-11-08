import type { T } from "@/lib/i18n";

export type AcademicProject = {
  name: T;
  summary: T;
  stack: string[];
  repo: string;
  /** Trabalho em equipe. */
  team?: boolean;
};

/** Trabalhos da FATEC Franca (DSM), do mais recente para o mais antigo. */
export const academicProjects: AcademicProject[] = [
  {
    name: { pt: "Marketplace com mensageria", en: "Marketplace with messaging" },
    summary: {
      pt: "Consumer em Node.js que lê pedidos do GCP Pub/Sub e grava no PostgreSQL em transação, com ack e nack para reprocessar falhas. API em FastAPI e tela de consulta.",
      en: "A Node.js consumer that reads orders from GCP Pub/Sub and writes them to PostgreSQL in a transaction, using ack and nack to retry failures. FastAPI API and a lookup screen.",
    },
    stack: ["Node.js", "GCP Pub/Sub", "FastAPI", "PostgreSQL"],
    repo: "https://github.com/Sheila724/computacaoNuvem-II",
    team: true,
  },
  {
    name: { pt: "Mensageria com RabbitMQ", en: "Messaging with RabbitMQ" },
    summary: {
      pt: "Pedidos de marketplace processados de forma assíncrona pelo RabbitMQ, gravados no PostgreSQL e consultados por API FastAPI, com disparo em lote e monitor da fila para testar resiliência.",
      en: "Marketplace orders processed asynchronously through RabbitMQ, stored in PostgreSQL and queried via a FastAPI API, with batch load and a queue monitor to test resilience.",
    },
    stack: ["RabbitMQ", "FastAPI", "PostgreSQL", "Docker"],
    repo: "https://github.com/Sheila724/projeto-mensageria",
  },
  {
    name: { pt: "E-commerce com replicação MySQL", en: "E-commerce with MySQL replication" },
    summary: {
      pt: "Spring Boot que envia escrita ao banco primário e leitura às réplicas em round-robin só pela anotação de transação, com painel atualizado em tempo real.",
      en: "Spring Boot app that routes writes to the primary and reads to replicas in round-robin based only on the transaction annotation, with a live dashboard.",
    },
    stack: ["Java", "Spring Boot", "MySQL", "Docker"],
    repo: "https://github.com/Sheila724/BD6DSM",
    team: true,
  },
  {
    name: { pt: "TechBot, chatbot de suporte de TI", en: "TechBot, an IT support chatbot" },
    summary: {
      pt: "Chatbot em Rasa que entende dúvidas de TI em português, responde 19 tópicos, abre chamado por formulário e mostra o status dos sistemas.",
      en: "Rasa chatbot that understands IT questions in Portuguese, covers 19 topics, opens tickets through a form and shows system status.",
    },
    stack: ["Python", "Rasa", "PLN"],
    repo: "https://github.com/Sheila724/bot-PLN",
  },
  {
    name: { pt: "API de tarefas", en: "Task API" },
    summary: {
      pt: "API REST em Spring Boot com auditoria JPA, testes unitários com JUnit e Mockito e testes de integração com H2.",
      en: "Spring Boot REST API with JPA auditing, unit tests with JUnit and Mockito and integration tests on H2.",
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "JUnit"],
    repo: "https://github.com/Sheila724/lista-tarefas-backend",
  },
  {
    name: { pt: "VMs no Azure por script", en: "Scripted Azure VMs" },
    summary: {
      pt: "Script PowerShell que cria rede, NSG, IP público e VM Ubuntu no Azure, e depois liga, desliga ou remove tudo com um comando.",
      en: "PowerShell script that creates the network, NSG, public IP and Ubuntu VM on Azure, then starts, stops or removes everything with one command.",
    },
    stack: ["PowerShell", "Azure CLI"],
    repo: "https://github.com/Sheila724/AzureVM",
  },
  {
    name: { pt: "Ordens de serviço", en: "Service orders" },
    summary: {
      pt: "App Flutter offline para assistências técnicas, com SQLite, migração automática de esquema, busca e filtros por status.",
      en: "Offline Flutter app for repair shops, with SQLite, automatic schema migration, search and status filters.",
    },
    stack: ["Flutter", "SQLite"],
    repo: "https://github.com/Sheila724/trabalhoLddm",
  },
  {
    name: { pt: "Eventos Locais", en: "Local Events" },
    summary: {
      pt: "App Flutter para criar e gerenciar eventos, organizado em Clean Architecture com Material Design 3 e persistência local.",
      en: "Flutter app to create and manage events, structured with Clean Architecture, Material Design 3 and local storage.",
    },
    stack: ["Flutter", "Dart"],
    repo: "https://github.com/Sheila724/DSM5-DispovitosMoveis",
  },
  {
    name: { pt: "Fake Shop com CI/CD", en: "Fake Shop with CI/CD" },
    summary: {
      pt: "Loja em Flask com pipeline que publica a imagem no Docker Hub e roda análise do SonarQube no servidor via SSH.",
      en: "Flask shop with a pipeline that pushes the image to Docker Hub and runs a SonarQube analysis on the server over SSH.",
    },
    stack: ["Flask", "PostgreSQL", "Docker", "GitHub Actions", "SonarQube"],
    repo: "https://github.com/Sheila724/fake-shop",
  },
];
