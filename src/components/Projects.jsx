import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { FolderGit2, Github, RotateCcw, X } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { cn, localize } from "@/lib/utils"

function ImageLightbox({ src, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>
      <div
        className="w-[90vw] max-w-6xl aspect-video bg-black/60 rounded-lg overflow-hidden flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

function FlipCard({ project, locale, onImageClick }) {
  const [flipped, setFlipped] = useState(false)
  const name = localize(project.name, locale)
  const hasImage = !!project.image

  const toggle = () => setFlipped((f) => !f)
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <div
      className={cn("flip-card h-72 sm:h-56 cursor-pointer", flipped && "flipped")}
      onClick={toggle}
      onKeyDown={handleKey}
      role="button"
      tabIndex={0}
    >
      <div className="flip-card-inner">
        {/* ── Front ── */}
        <div className="flip-card-front border border-border flex flex-col sm:flex-row">
          {/* Image section */}
          {hasImage ? (
            <div
              className="relative aspect-video sm:aspect-auto sm:h-full sm:w-[55%] shrink-0 cursor-zoom-in"
              onClick={(e) => { e.stopPropagation(); onImageClick(project.image) }}
            >
              <img
                src={project.image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          ) : (
            <div className="relative aspect-video sm:aspect-auto sm:h-full sm:w-[55%] shrink-0 bg-gradient-to-br from-accent-muted via-surface to-surface-hover" />
          )}

          {/* Info section */}
          <div className="flex flex-col justify-center flex-1 px-4 sm:px-5 py-3 sm:py-0">
            <h3 className="font-semibold text-base sm:text-base mb-1">{name}</h3>
            <span className="text-text-muted text-xs font-mono">
              {localize(project.period, locale)}
            </span>
          </div>

          {/* Flip hint */}
          <div className="absolute top-3 right-3 text-text-muted opacity-60 p-1">
            <RotateCcw className="w-6 h-6 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* ── Back ── */}
        <div className="flip-card-back border border-border bg-surface flex flex-col p-4 sm:p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-semibold text-sm">{name}</h3>
              <span className="text-text-muted text-xs font-mono">
                {localize(project.period, locale)}
              </span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); toggle() }}
              className="text-text-muted hover:text-accent transition-colors shrink-0"
              aria-label="Flip back"
            >
              <RotateCcw className="w-6 h-6 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Description — scrollable */}
          {project.description && (
            <div className="markdown-content text-text-muted text-xs leading-relaxed overflow-y-auto flex-1 min-h-0 mb-3">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {localize(project.description, locale)}
              </ReactMarkdown>
            </div>
          )}

          {/* Tech + GitHub — pinned bottom */}
          <div className="mt-auto flex items-end justify-between gap-3">
            {project.tech?.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border border-border bg-bg text-text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors shrink-0"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects({ projects }) {
  if (!projects?.length) return null

  const ref = useScrollReveal()
  const { locale, t } = useLocale()
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section ref={ref} className="animate-on-scroll print-hide">
      <SectionHeading icon={FolderGit2} title={t("projects")} />
      <div className="grid gap-6 sm:gap-4">
        {projects.map((project, i) => (
          <FlipCard
            key={localize(project.name, locale) || i}
            project={project}
            locale={locale}
            onImageClick={(src) => setLightboxSrc(src)}
          />
        ))}
      </div>
      {lightboxSrc && createPortal(
        <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />,
        document.body
      )}
    </section>
  )
}
