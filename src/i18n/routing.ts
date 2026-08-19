import {defineRouting} from "next-intl/routing";

export const locales = ["en", "es", "de", "ru"] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  ru: "Русский",
};

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
