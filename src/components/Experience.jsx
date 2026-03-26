import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Briefcase } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { localize } from "@/lib/utils"

function ExperienceItem({ item, index, locale }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`animate-on-scroll stagger-${index + 1} relative pl-8 pb-10 last:pb-0 group`}
    >
      {/* Timeline line */}
      <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gradient-to-b from-border to-transparent group-last:hidden" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-[10px] w-[7px] h-[7px] rounded-full bg-accent ring-4 ring-accent-muted" />

      <div className="rounded-xl border border-transparent hover:border-border hover:bg-surface/50 p-4 -ml-4 transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <div>
            <h3 className="font-semibold text-[15px] leading-snug">{localize(item.role, locale)}</h3>
            <p className="text-accent text-sm font-medium mt-0.5">{item.company}</p>
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs font-mono shrink-0 mt-1 sm:mt-0">
            <span className="px-2 py-0.5 rounded-md bg-surface border border-border">
              {localize(item.period, locale)}
            </span>
          </div>
        </div>

        {item.location && (
          <p className="text-text-muted text-xs mb-3 font-mono">{localize(item.location, locale)}</p>
        )}

        {item.description && (
          <div className="markdown-content text-text-muted text-sm leading-relaxed">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{localize(item.description, locale)}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}

export function Experience({ data }) {
  if (!data?.length) return null

  const sectionRef = useScrollReveal()
  const { locale, t } = useLocale()

  return (
    <section ref={sectionRef} className="animate-on-scroll">
      <SectionHeading icon={Briefcase} title={t("experience")} />
      <div>
        {data.map((item, i) => (
          <ExperienceItem key={i} item={item} index={i} locale={locale} />
        ))}
      </div>
    </section>
  )
}
