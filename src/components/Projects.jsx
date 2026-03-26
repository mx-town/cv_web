import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { FolderGit2, Github } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { cn, localize } from "@/lib/utils"

function ProjectCard({ project, locale }) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-border bg-surface/50 p-5",
        "hover:border-text-subtle hover:bg-surface transition-all duration-300"
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-text-subtle shrink-0" />
          <h3 className="font-semibold text-sm">{localize(project.name, locale)}</h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          <span className="text-text-muted text-xs font-mono">{project.period}</span>
        </div>
      </div>

      {project.description && (
        <div className="markdown-content text-text-muted text-xs leading-relaxed mb-3">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{localize(project.description, locale)}</ReactMarkdown>
        </div>
      )}

      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border border-border bg-surface text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export function Projects({ projects }) {
  if (!projects?.length) return null

  const ref = useScrollReveal()
  const { locale, t } = useLocale()

  return (
    <section ref={ref} className="animate-on-scroll print-hide">
      <SectionHeading icon={FolderGit2} title={t("projects")} />
      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={localize(project.name, locale) || i} project={project} locale={locale} />
        ))}
      </div>
    </section>
  )
}
