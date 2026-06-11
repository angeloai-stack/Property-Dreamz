import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// twMerge resolves conflicting Tailwind tokens; clsx handles conditionals.
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
