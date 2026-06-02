import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for combining Tailwind class names safely.
// Uses clsx for conditional classes and twMerge for deduplicating Tailwind tokens.
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
