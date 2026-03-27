import { cn } from "@/lib/utils"

export function SectionHeading({ icon: Icon, title, className }) {
  return (
    <div className={cn("flex items-center gap-3 mb-8", className)}>
      {Icon && (
        <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-lg bg-accent-muted">
          <Icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
        </div>
      )}
      <h2 className="font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  )
}
