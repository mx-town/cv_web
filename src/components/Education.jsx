import { GraduationCap } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { localize } from "@/lib/utils"

export function Education({ data }) {
  if (!data?.length) return null

  const ref = useScrollReveal()
  const { locale, t } = useLocale()

  return (
    <section ref={ref} className="animate-on-scroll">
      <SectionHeading icon={GraduationCap} title={t("education")} />
      <div className="grid gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="group rounded-xl border border-border bg-surface/50 p-5 hover:border-text-subtle hover:bg-surface transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
              <div>
                <h3 className="font-semibold text-[15px] md:text-base">{localize(item.degree, locale)}</h3>
                <p className="text-accent text-sm md:text-base font-medium mt-0.5">{item.institution}</p>
              </div>
              <span className="text-text-muted text-xs md:text-sm font-mono shrink-0 px-2 py-0.5 rounded-md bg-bg border border-border">
                {localize(item.period, locale)}
              </span>
            </div>
            {item.description && (
              <p className="text-text-muted text-sm md:text-base mt-3 leading-relaxed">{localize(item.description, locale)}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
