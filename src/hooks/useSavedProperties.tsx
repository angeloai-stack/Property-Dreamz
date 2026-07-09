"use client";
// Cross-page "saved properties" store — persisted to localStorage so a heart tapped on the
// map (or any listing card) actually shows up on /saved.
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SavedProperty = {
  id: string;
  title: string;
  zone: string;
  priceUSD: number;
  beds: number;
  baths: number;
  sqm: number;
  status: string;
  image: string;
};

type SavedPropertiesContextValue = {
  saved: SavedProperty[];
  isSaved: (id: string) => boolean;
  toggleSaved: (property: SavedProperty) => void;
  removeSaved: (id: string) => void;
};

const STORAGE_KEY = "pd-saved-properties";
const SavedPropertiesContext = createContext<SavedPropertiesContextValue | null>(null);

export function SavedPropertiesProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<SavedProperty[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted favourites after mount only — keeps SSR markup (always empty) in sync with
  // the first client render, then swaps in whatever was saved on a previous visit.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      // Corrupted or inaccessible storage — fall back to an empty list.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved, hydrated]);

  function isSaved(id: string) {
    return saved.some((p) => p.id === id);
  }

  function toggleSaved(property: SavedProperty) {
    setSaved((prev) =>
      prev.some((p) => p.id === property.id)
        ? prev.filter((p) => p.id !== property.id)
        : [...prev, property]
    );
  }

  function removeSaved(id: string) {
    setSaved((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <SavedPropertiesContext.Provider value={{ saved, isSaved, toggleSaved, removeSaved }}>
      {children}
    </SavedPropertiesContext.Provider>
  );
}

export function useSavedProperties() {
  const ctx = useContext(SavedPropertiesContext);
  if (!ctx) throw new Error("useSavedProperties must be used within a SavedPropertiesProvider");
  return ctx;
}
