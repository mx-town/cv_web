import { forwardRef, Fragment } from "react"
import { cvData } from "@/data/cv-data"
import { localize } from "@/lib/utils"

const s = {
  page: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: "9pt",
    lineHeight: 1.35,
    color: "#111",
    background: "#fff",
    padding: "28px 32px",
    width: "210mm",
    boxSizing: "border-box",
  },
  name: {
    fontSize: "18pt",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    margin: 0,
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: "10pt",
    color: "#444",
    fontWeight: 400,
    margin: "2px 0 0",
  },
  contactLine: {
    fontSize: "8.5pt",
    color: "#555",
    margin: "4px 0 0",
  },
  sectionTitle: {
    fontSize: "9.5pt",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    borderBottom: "1px solid #333",
    paddingBottom: "2px",
    marginTop: "12px",
    marginBottom: "6px",
  },
  entryHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "0px",
  },
  entryTitle: {
    fontSize: "9pt",
    fontWeight: 600,
    margin: 0,
  },
  period: {
    fontSize: "8pt",
    color: "#666",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  entryRole: {
    fontSize: "8.5pt",
    color: "#444",
    margin: "0 0 1px",
  },
  ul: {
    paddingLeft: "14px",
    margin: "2px 0 0",
    listStyleType: "disc",
  },
  li: {
    fontSize: "8.5pt",
    marginBottom: "0px",
    lineHeight: 1.3,
  },
  projectLine: {
    fontSize: "8.5pt",
    marginBottom: "2px",
    lineHeight: 1.3,
  },
  projectName: {
    fontWeight: 600,
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    gap: "2px 12px",
    fontSize: "8.5pt",
  },
  skillCategory: {
    fontWeight: 600,
    color: "#333",
  },
  skillItems: {
    color: "#444",
  },
  langLine: {
    fontSize: "8.5pt",
    marginBottom: "1px",
  },
  entryBlock: {
    marginBottom: "6px",
  },
}

function firstSentence(text) {
  if (!text) return ""
  const line = text.split("\n")[0]
  return line.replace(/\*\*/g, "").replace(/:$/, "").trim()
}

function bulletPoints(text) {
  if (!text) return []
  return text
    .split("\n")
    .filter((l) => l.trim().startsWith("-"))
    .map((l) => l.replace(/^-\s*/, "").replace(/\*\*/g, "").trim())
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
      {/* Header */}
      <h1 style={s.name}>{personal.name}</h1>
      <p style={s.subtitle}>{l(personal.title)}</p>
      <p style={s.contactLine}>
        {l(personal.location)}
        {personal.contact.email && ` · ${personal.contact.email}`}
        {personal.contact.github && ` · github.com/mx-town`}
      </p>

      {/* Experience */}
      <h2 style={s.sectionTitle}>{t.experience}</h2>
      {experience.map((exp, i) => {
        const bullets = bulletPoints(l(exp.description))
        return (
          <div key={i} style={s.entryBlock}>
            <div style={s.entryHeader}>
              <h3 style={s.entryTitle}>{exp.company}</h3>
              <span style={s.period}>{l(exp.period)}</span>
            </div>
            <p style={s.entryRole}>{l(exp.role)}</p>
            {bullets.length > 0 && (
              <ul style={s.ul}>
                {bullets.map((b, j) => (
                  <li key={j} style={s.li}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        )
      })}

      {/* Education */}
      <h2 style={s.sectionTitle}>{t.education}</h2>
      {education.map((edu, i) => (
        <div key={i} style={s.entryBlock}>
          <div style={s.entryHeader}>
            <h3 style={s.entryTitle}>{l(edu.degree)}</h3>
            <span style={s.period}>{l(edu.period)}</span>
          </div>
          <p style={s.entryRole}>{edu.institution}</p>
        </div>
      ))}

      {/* Projects */}
      <h2 style={s.sectionTitle}>{t.projects}</h2>
      {projects.map((proj, i) => (
        <p key={i} style={s.projectLine}>
          <span style={s.projectName}>{l(proj.name)}</span>
          {" — "}
          {firstSentence(l(proj.description))}
        </p>
      ))}

      {/* Skills */}
      <h2 style={s.sectionTitle}>{t.skills}</h2>
      <div style={s.skillsGrid}>
        {skills.map((group, i) => (
          <Fragment key={i}>
            <span style={s.skillCategory}>{l(group.category)}</span>
            <span style={s.skillItems}>
              {group.items.map((item) => l(item)).join(", ")}
            </span>
          </Fragment>
        ))}
      </div>

      {/* Languages */}
      <h2 style={s.sectionTitle}>{t.languages}</h2>
      {languages.map((lang, i) => (
        <p key={i} style={s.langLine}>
          {l(lang.language)} — {l(lang.level)}
        </p>
      ))}
    </div>
  )
})
