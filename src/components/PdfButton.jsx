import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CvPdf } from "./CvPdf"
import { downloadPdf } from "@/lib/downloadPdf"
import { useLocale } from "@/lib/useLocale"

export function PdfButton() {
  const { locale, t } = useLocale()

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => downloadPdf(locale)}
        className="no-print gap-2 hover:border-accent/40 hover:text-accent transition-all duration-300"
      >
        <Download className="w-3.5 h-3.5" />
        {t("pdf")}
      </Button>

      {/* Hidden off-screen container for PDF generation */}
      <div
        id="cv-pdf-wrapper"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      >
        <CvPdf locale={locale} />
      </div>
    </>
  )
}
