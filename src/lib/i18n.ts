export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/** Texto com versão em cada idioma. */
export type T = Record<Locale, string>;
export type TList = Record<Locale, string[]>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };

/** Resolve texto que pode ser igual nos dois idiomas ou traduzido. */
export function tx(value: string | T, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}
