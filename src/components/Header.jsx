import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { MapPin, Mail, Globe, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { LocaleToggle } from "./LocaleToggle"
import { PdfButton } from "./PdfButton"
import { useLocale } from "@/lib/useLocale"
import { localize } from "@/lib/utils"

const contactConfig = [
  { key: "email", icon: Mail, label: (v) => v },
  { key: "phone", icon: Phone, label: (v) => v },
  { key: "website", icon: Globe, labelKey: "website" },
  { key: "github", icon: Github, labelKey: "github", printHide: true },
  { key: "linkedin", icon: Linkedin, label: () => "LinkedIn" },
]

function getHref(key, value) {
  if (key === "email") return `mailto:${value}`
  if (key === "phone") return `tel:${value.replace(/\s/g, "")}`
  return value
}

export function Header({ data, showPdf }) {
  const { name, title, location, bio, avatar, contact } = data
  const { locale, t } = useLocale()

  return (
    <header className="animate-fade-in-up">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10 no-print">
        <div />
        <div className="flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          {showPdf && <PdfButton />}
        </div>
      </div>

      {/* Name + Title */}
      <div className="flex items-start gap-5 mb-6">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-18 h-18 rounded-2xl border-2 border-accent/20 object-cover glow-accent-sm"
          />
        )}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-2">
            <span className="gradient-text">{name}</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-accent tracking-wide">{localize(title, locale)}</p>
        </div>
      </div>

      {/* Location */}
      {location && (
        <div className="flex items-center gap-1.5 text-text-muted text-sm md:text-base mb-5">
          <MapPin className="w-3.5 h-3.5 text-warm-lo" />
          <span>{localize(location, locale)}</span>
        </div>
      )}

      {/* Bio */}
      {bio && (
        <div className="markdown-content text-text-muted text-[15px] md:text-base leading-relaxed mb-8 max-w-2xl">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{localize(bio, locale)}</ReactMarkdown>
        </div>
      )}

      {/* Contact links */}
      {contact && (
        <div className="flex flex-wrap gap-2.5">
          {contactConfig.map(({ key, icon: Icon, label, labelKey, printHide }) => {
            const value = contact[key]
            if (!value) return null
            const displayLabel = labelKey ? t(labelKey) : label(value)
            return (
              <Button
                key={key}
                variant="outline"
                size="sm"
                asChild
                className={`gap-1.5 text-xs md:text-sm group hover:border-accent/40 hover:text-accent transition-all duration-300${printHide ? " print-hide" : ""}`}
              >
                <a href={getHref(key, value)} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-3.5 h-3.5" />
                  {displayLabel}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-60 transition-opacity" />
                </a>
              </Button>
            )
          })}
        </div>
      )}
    </header>
  )
}
