import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"
    const stored = localStorage.getItem("cv-theme")
    if (stored) return stored
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("cv-theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"))

  return { theme, toggleTheme }
}
