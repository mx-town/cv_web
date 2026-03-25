import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { downloadPdf } from "@/lib/downloadPdf"
import { useLocale } from "@/lib/useLocale"

export function PdfButton() {
  const { t } = useLocale()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={downloadPdf}
      className="no-print gap-2 hover:border-accent/40 hover:text-accent transition-all duration-300"
    >
      <Download className="w-3.5 h-3.5" />
      {t("pdf")}
    </Button>
  )
}
