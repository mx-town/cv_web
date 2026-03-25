import { Globe } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { localize } from "@/lib/utils"

export function Languages({ data }) {
  if (!data?.length) return null

  const ref = useScrollReveal()
  const { locale, t } = useLocale()

  return (
    <section ref={ref} className="animate-on-scroll">
      <SectionHeading icon={Globe} title={t("languages")} />
      <div className="flex flex-wrap gap-4">
        {data.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="font-medium text-sm">{localize(item.language, locale)}</span>
            <span className="text-text-muted text-xs font-mono px-2 py-0.5 rounded-md bg-surface border border-border">
              {localize(item.level, locale)}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
