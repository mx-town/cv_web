import { forwardRef, Fragment } from "react"
import { cvData } from "@/data/cv-data"
import { localize } from "@/lib/utils"

/* ── Font families ── */
const sans = '"Helvetica Neue", Arial, sans-serif'
const serif = 'Georgia, "Times New Roman", serif'

/* ── Inline styles ── */
const s = {
  page: {
    fontFamily: serif,
    fontSize: "9pt",
    lineHeight: 1.4,
    color: "#111",
    background: "#fff",
    padding: "24mm 30mm",
    width: "210mm",
    maxHeight: "297mm",
    overflow: "hidden",
    boxSizing: "border-box",
  },

  /* Name — light weight, wide tracking */
  name: {
    fontFamily: sans,
    fontSize: "24pt",
    fontWeight: 300,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    margin: 0,
    lineHeight: 1,
    color: "#111",
  },

  /* Title under name */
  subtitle: {
    fontFamily: serif,
    fontSize: "10pt",
    color: "#444",
    fontWeight: 400,
    fontStyle: "italic",
    margin: "4px 0 0",
  },

  /* Contact info */
  contactLine: {
    fontFamily: sans,
    fontSize: "8pt",
    color: "#888",
    letterSpacing: "0.03em",
    margin: "5px 0 0",
  },

  /* S E C T I O N   T I T L E S */
  sectionTitle: {
    fontFamily: sans,
    fontSize: "8pt",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: "#333",
    borderBottom: "0.5px solid #ccc",
    paddingBottom: "3px",
    marginTop: "22px",
    marginBottom: "9px",
  },

  /* Entry row: company/degree + period */
  entryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "1px",
  },
  entryTitle: {
    fontFamily: sans,
    fontSize: "9.5pt",
    fontWeight: 500,
    margin: 0,
    color: "#111",
  },
  period: {
    fontFamily: sans,
    fontSize: "8pt",
    color: "#888",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },

  /* Role / subtitle line */
  entryRole: {
    fontFamily: sans,
    fontSize: "8.5pt",
    color: "#555",
    fontStyle: "italic",
    margin: "0 0 2px",
  },

  /* Body text (serif, for descriptions) */
  bodyText: {
    fontFamily: serif,
    fontSize: "8.5pt",
    lineHeight: 1.4,
    color: "#333",
    margin: "1px 0 0",
  },

  /* Project entries */
  projectBlock: {
    marginBottom: "8px",
  },
  projectName: {
    fontFamily: sans,
    fontSize: "9pt",
    fontWeight: 500,
    color: "#111",
    margin: 0,
  },
  projectDesc: {
    fontFamily: serif,
    fontSize: "8.5pt",
    lineHeight: 1.35,
    color: "#333",
    margin: "0px 0 0",
  },

  /* Skills line */
  skillLine: {
    fontSize: "8.5pt",
    lineHeight: 1.35,
    color: "#333",
    marginBottom: "4px",
  },
  skillCategory: {
    fontFamily: sans,
    fontWeight: 600,
    color: "#111",
  },
  skillItems: {
    fontFamily: serif,
    color: "#444",
  },

  /* Languages */
  langLine: {
    fontFamily: serif,
    fontSize: "8.5pt",
    color: "#333",
    marginBottom: "1px",
  },

  /* Spacing between entries */
  entryBlock: {
    marginBottom: "12px",
  },
}

/** Add spaces between uppercase letters for section headings */
function spaceOut(text) {
  return text.toUpperCase().split("").join(" ")
}

/** Custom shorter descriptions for PDF (no bullet points, no projects mention) */
const pdfDescriptions = {
  "MELECS Holding": {
    en: "Transitioning into hardware development starting May 2026 (PCB design, automotive standards). Knowledge of the complete SMT manufacturing process: laser traceability, screen printing, reflow soldering, SPI, AOI, THT assembly through to finished product.",
    de: "Ab Mai 2026 Wechsel in die Hardwareentwicklung (Leiterplattendesign, Automotive-Normen). Erfahrung mit dem gesamten SMT-Prozess: Laser-Traceability, Pastendruck, Reflowlöten, SPI, AOI, THT-Bestückung bis zum Endprodukt.",
  },
  "Siemens / MELECS EWS GmbH": {
    en: "Soldering and rework of SMD components (0402 to 1206, ICs, electrolytic capacitors). PCB design and manufacturing (EasyEDA Pro, PCBWay). In parallel: vocational matriculation exam (BRP).",
    de: "Löten und Nacharbeit von SMD-Bauteilen (0402 bis 1206, ICs, Elkos). Leiterplattendesign und -fertigung (EasyEDA Pro, PCBWay). Begleitend: Berufsreifeprüfung (BRP).",
  },
}

/** Short category names for PDF skills section */
const shortSkillCategory = {
  "PCB & Hardware": "Hardware",
  "Leiterplatten & Hardware": "Hardware",
  "Manufacturing & Industrial": "Manufacturing",
  "Fertigung & Industrie": "Fertigung",
  "Software & Development": "Software",
  "Software & Entwicklung": "Software",
  "Embedded": "Embedded",
  "AI & Agentic Development": "AI",
  "KI & agentische Softwareentwicklung": "KI",
}

/** Override skill items for PDF to keep lines short */
const pdfSkillItems = {
  "Hardware": ["EasyEDA Pro", "KiCad", "Arduino IDE", "Löten & Nacharbeit", "SMT/THT"],
  "Manufacturing": ["TIA Portal (Siemens)", "FluidSim", "SMT-Prozesse", "Reflow / SPI / AOI"],
  "Fertigung": ["TIA Portal (Siemens)", "FluidSim", "SMT-Prozesse", "Reflow / SPI / AOI"],
}

/** Extract first line (intro sentence) from description, strip markdown */
function firstSentence(text) {
  if (!text) return ""
  return text.split("\n")[0].replace(/\*\*/g, "").replace(/:$/, "").trim()
}

export const CvPdf = forwardRef(function CvPdf({ locale }, ref) {
  const { personal, experience, education, projects, skills, languages } = cvData
  const l = (v) => localize(v, locale)

  const labels = {
    en: { experience: "Experience", education: "Education", projects: "Projects", skills: "Skills", languages: "Languages" },
    de: { experience: "Berufserfahrung", education: "Ausbildung", projects: "Projekte", skills: "Kenntnisse", languages: "Sprachen" },
  }
  const t = labels[locale] || labels.de

  return (
    <div ref={ref} style={s.page}>
      {/* ── Header ── */}
      <h1 style={s.name}>{personal.name}</h1>
      <p style={s.subtitle}>{l(personal.title)}</p>
      <p style={s.contactLine}>
        {l(personal.location)}
        {personal.contact.email && ` · ${personal.contact.email}`}
      </p>

      {/* ── Experience ── */}
      <h2 style={s.sectionTitle}>{spaceOut(t.experience)}</h2>
      {experience.map((exp, i) => {
        const customDesc = pdfDescriptions[exp.company]
        const desc = customDesc ? l(customDesc) : null
        return (
          <div key={i} style={s.entryBlock}>
            <div style={s.entryHeader}>
              <h3 style={s.entryTitle}>{exp.company}</h3>
              <span style={s.period}>{l(exp.period)}</span>
            </div>
            <p style={s.entryRole}>{l(exp.role)}</p>
            {desc && <p style={s.bodyText}>{desc}</p>}
          </div>
        )
      })}

      {/* ── Education ── */}
      <h2 style={s.sectionTitle}>{spaceOut(t.education)}</h2>
      {education.map((edu, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <div style={s.entryHeader}>
            <h3 style={s.entryTitle}>{l(edu.degree)}</h3>
            <span style={s.period}>{l(edu.period)}</span>
          </div>
          <p style={{ ...s.entryRole, fontStyle: "normal" }}>{edu.institution}</p>
        </div>
      ))}

      {/* ── Projects ── */}
      <h2 style={s.sectionTitle}>{spaceOut(t.projects)}</h2>
      {projects.map((proj, i) => (
        <div key={i} style={s.projectBlock}>
          <p style={s.projectName}>{l(proj.name)}</p>
          <p style={s.projectDesc}>{firstSentence(l(proj.description))}</p>
        </div>
      ))}

      {/* ── Skills ── */}
      <h2 style={s.sectionTitle}>{spaceOut(t.skills)}</h2>
      {skills.map((group, i) => {
        const catName = l(group.category)
        const shortName = shortSkillCategory[catName] || catName
        const items = pdfSkillItems[shortName] || group.items.map((item) => l(item))
        return (
          <p key={i} style={s.skillLine}>
            <span style={s.skillCategory}>{shortName}</span>
            <span style={s.skillItems}> — {items.join(", ")}</span>
          </p>
        )
      })}

      {/* ── Languages ── */}
      <h2 style={s.sectionTitle}>{spaceOut(t.languages)}</h2>
      {languages.map((lang, i) => (
        <p key={i} style={s.langLine}>
          {l(lang.language)} — {l(lang.level)}
        </p>
      ))}
    </div>
  )
})
