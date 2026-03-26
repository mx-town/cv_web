export async function downloadPdf(locale) {
  const wrapper = document.getElementById("cv-pdf-wrapper")
  if (!wrapper) return

  const html2pdf = (await import("html2pdf.js")).default

  // Temporarily make visible for html2canvas (off-screen won't render)
  wrapper.style.position = "fixed"
  wrapper.style.left = "0"
  wrapper.style.top = "0"
  wrapper.style.zIndex = "-1"
  wrapper.style.opacity = "0"
  wrapper.style.pointerEvents = "none"

  const el = wrapper.firstElementChild

  const filename =
    locale === "de"
      ? "Niklas_Martinek_Lebenslauf.pdf"
      : "Niklas_Martinek_CV.pdf"

  await html2pdf()
    .set({
      margin: 0,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    })
    .from(el)
    .save()

  // Hide again
  wrapper.style.position = "absolute"
  wrapper.style.left = "-9999px"
  wrapper.style.opacity = ""
  wrapper.style.zIndex = ""
  wrapper.style.pointerEvents = ""
}
