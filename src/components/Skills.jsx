import { Wrench } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { cn, localize } from "@/lib/utils"

export function Skills({ data }) {
  if (!data?.length) return null

  const ref = useScrollReveal()
  const { locale, t } = useLocale()

  return (
    <section ref={ref} className="animate-on-scroll">
      <SectionHeading icon={Wrench} title={t("skills")} />
      <div className="grid sm:grid-cols-2 gap-6">
        {data.map((group, i) => (
          <div key={i} className="space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-[0.15em] text-text-muted flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {localize(group.category, locale)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <span
                  key={typeof skill === "string" ? skill : j}
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium",
                    "border border-accent/20 bg-accent-muted text-accent",
                    "hover:border-accent/40 hover:bg-accent-muted transition-all duration-200",
                    "cursor-default"
                  )}
                >
                  {localize(skill, locale)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
