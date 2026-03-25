import { Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/useTheme"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "no-print relative h-9 w-9 rounded-full",
        "flex items-center justify-center",
        "border border-border bg-surface hover:bg-surface-hover",
        "transition-all duration-300 cursor-pointer",
        "hover:border-accent/40 hover:glow-accent-sm",
        "active:scale-95"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun
        className={cn(
          "absolute w-4 h-4 transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        )}
      />
      <Moon
        className={cn(
          "absolute w-4 h-4 transition-all duration-300",
          isDark ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
      />
    </button>
  )
}
