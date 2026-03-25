import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { uiStrings } from "@/data/ui-strings"

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    if (typeof window === "undefined") return "de"
    return localStorage.getItem("cv-locale") || "de"
  })

  useEffect(() => {
    document.documentElement.lang = locale
    localStorage.setItem("cv-locale", locale)
  }, [locale])

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "de" ? "en" : "de"))
  }, [])

  const t = useCallback(
    (key) => uiStrings[locale]?.[key] ?? key,
    [locale]
  )

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider")
  return ctx
}
