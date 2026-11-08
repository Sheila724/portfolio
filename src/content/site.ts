import type { T } from "@/lib/i18n";

/**
 * Dados pessoais e links. Edite aqui — o resto do site lê deste arquivo.
 */
export const site = {
  name: "Sheila Alves Araújo",
  shortName: "Sheila Araújo",
  /** URL final do site, sem barra no fim. Usada no SEO e no Open Graph. */
  url: "https://sheila.gapsaa.com.br",
  location: { pt: "Franca, SP, Brasil", en: "Franca, SP, Brazil" } satisfies T,
  email: "sheila.araujo486@gmail.com",
  github: "https://github.com/Sheila724",
  linkedin: "https://www.linkedin.com/in/sheila-alvesaraujo",
  role: {
    pt: "Infraestrutura, monitoramento e automação",
    en: "Infrastructure, monitoring and automation",
  } satisfies T,
  description: {
    pt: "Portfólio de Sheila Alves Araújo: infraestrutura Linux e Proxmox, monitoramento com Zabbix, automação com n8n e IA self-hosted, e desenvolvimento de ferramentas para operações e suporte.",
    en: "Portfolio of Sheila Alves Araújo: Linux and Proxmox infrastructure, Zabbix monitoring, automation with n8n and self-hosted AI, and tooling for operations and support teams.",
  } satisfies T,
};
