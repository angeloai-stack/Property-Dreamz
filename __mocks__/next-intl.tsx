// Jest manual mock for `next-intl` — resolves real strings from messages/en/<namespace>.json
// synchronously, so components under test render actual English copy without needing a
// NextIntlClientProvider wrapper in every test file.
import React from "react";
import fs from "fs";
import path from "path";

function loadNamespaceRoot(root: string) {
  const filePath = path.join(process.cwd(), "messages", "en", `${root}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function getByPath(obj: unknown, parts: string[]): unknown {
  return parts.reduce<unknown>(
    (acc, part) => (acc == null ? undefined : (acc as Record<string, unknown>)[part]),
    obj
  );
}

function interpolate(str: string, values?: Record<string, unknown>) {
  if (!values) return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => (key in values ? String(values[key]) : `{${key}}`));
}

function createTranslator(namespace: string) {
  const parts = namespace.split(".");
  const root = loadNamespaceRoot(parts[0]);
  const base = parts.length > 1 ? getByPath(root, parts.slice(1)) : root;

  function t(key: string, values?: Record<string, unknown>) {
    const value = getByPath(base, key.split("."));
    if (typeof value === "string") return interpolate(value, values);
    return key;
  }
  t.raw = (key: string) => getByPath(base, key.split("."));
  t.rich = (key: string) => {
    const value = getByPath(base, key.split("."));
    if (typeof value !== "string") return value;
    // Minimal rich-text handling for tests: strip the <tag>...</tag> wrapper, keep inner text.
    return value.replace(/<(\w+)>(.*?)<\/\1>/g, "$2");
  };
  return t;
}

export function useTranslations(namespace: string) {
  return createTranslator(namespace);
}

export function useLocale() {
  return "en";
}

export function hasLocale(locales: string[], locale: unknown) {
  return typeof locale === "string" && locales.includes(locale);
}

export function NextIntlClientProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
