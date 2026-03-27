import { cvData } from "@/data/cv-data"
import { LocaleProvider, useLocale } from "@/lib/useLocale"
import { Header } from "@/components/Header"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Languages } from "@/components/Languages"
import { GithubRepos } from "@/components/GithubRepos"

function AppContent() {
  const { personal, experience, education, skills, projects, languages, github, settings } = cvData
  const { t } = useLocale()

  return (
    <div className="min-h-screen bg-bg relative">
      <div
        id="cv-content"
        className="relative max-w-3xl lg:max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-20"
      >
        <div className="space-y-16">
          <Header data={personal} showPdf={settings.enablePdfDownload} />

          {settings.showExperience && <Experience data={experience} />}
          {settings.showEducation && <Education data={education} />}
          {settings.showProjects && <Projects projects={projects} />}
          {settings.showSkills && <Skills data={skills} />}
          {languages?.length > 0 && <Languages data={languages} />}
          {github?.username && <GithubRepos githubConfig={github} />}
        </div>

        <footer className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} {personal.name}</p>
            <p className="font-mono text-[11px] md:text-xs opacity-60">{t("builtWith")}</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  )
}

export default App
