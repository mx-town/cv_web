import { useLocale } from "@/lib/useLocale"
import { cn } from "@/lib/utils"

export function LocaleToggle() {
  const { locale, toggleLocale } = useLocale()

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "no-print relative h-9 w-9 rounded-full",
        "flex items-center justify-center",
        "border border-border bg-surface hover:bg-surface-hover",
        "transition-all duration-300 cursor-pointer",
        "hover:border-accent/40 hover:glow-accent-sm",
        "active:scale-95",
        "text-xs font-mono font-semibold"
      )}
      aria-label={`Switch to ${locale === "de" ? "English" : "German"}`}
    >
      {locale === "de" ? "EN" : "DE"}
    </button>
  )
}
