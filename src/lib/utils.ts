// Shared utility — cn() is the only helper; import it wherever Tailwind class merging is needed.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// twMerge resolves conflicting Tailwind tokens; clsx handles conditionals.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
