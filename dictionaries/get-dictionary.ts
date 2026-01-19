import 'server-only';
import type { Locale } from '@/i18n-config';

// We enumerate all dictionaries here for better type safety and to avoid dynamic imports issues in some environments if not careful.
// Although dynamic imports work fine in Next.js.
const dictionaries = {
  en: () => import('./en').then((module) => module.en),
  fr: () => import('./fr').then((module) => module.fr),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]?.() ?? dictionaries.en();
