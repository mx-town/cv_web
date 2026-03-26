import { cn } from "@/lib/utils"

export function SectionHeading({ icon: Icon, title, className }) {
  return (
    <div className={cn("flex items-center gap-3 mb-8", className)}>
      {Icon && (
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent-muted">
          <Icon className="w-4 h-4 text-accent" />
        </div>
      )}
      <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
    </div>
  )
}
