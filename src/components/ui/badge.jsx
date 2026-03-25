import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-accent text-black",
        secondary: "border-border bg-surface text-text-muted",
        outline: "border-border text-text-muted",
        accent: "border-accent/30 bg-accent-muted text-accent",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
