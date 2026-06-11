"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Locale } from "./dictionaries";

const STORAGE_KEY = "pk_lang";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Plain string lookup (text content + attributes/placeholders). */
  t: (key: string) => string;
  /**
   * For values that carry trusted, static inline HTML. Spread the result onto
   * an element with NO children, e.g. `<h1 {...rich("hero.title")} />`.
   * Re-renders on locale change — the React way, no imperative DOM mutation.
   */
  rich: (key: string) => { dangerouslySetInnerHTML: { __html: string } };
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Start at "en" so the server render and first client render agree (no
  // hydration mismatch); a saved "fr" is applied right after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    let saved: Locale = "en";
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "fr" || v === "en") saved = v;
    } catch {
      /* localStorage unavailable — keep default */
    }
    if (saved !== "en") setLocaleState(saved);
  }, []);

  // Keep <html lang> and storage in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const t = useCallback(
    (key: string) => dictionaries[locale][key] ?? dictionaries.en[key] ?? key,
    [locale],
  );

  const rich = useCallback(
    (key: string) => ({ dangerouslySetInnerHTML: { __html: t(key) } }),
    [t],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t, rich }),
    [locale, setLocale, t, rich],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <LocaleProvider>");
  return ctx;
}
