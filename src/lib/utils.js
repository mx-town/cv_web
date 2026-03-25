import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function localize(value, locale) {
  if (value && typeof value === "object" && (value.en || value.de)) {
    return value[locale] ?? value.de
  }
  return value
}
