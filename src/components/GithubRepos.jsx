import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { SectionHeading } from "./SectionHeading"
import { useGithubRepos } from "@/lib/useGithubRepos"
import { useScrollReveal } from "@/lib/useScrollReveal"
import { useLocale } from "@/lib/useLocale"
import { cn } from "@/lib/utils"

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Vue: "#41b883",
  Shell: "#89e051",
  "C++": "#f34b7d",
  C: "#555555",
}

function RepoSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-4">
      <div className="shimmer h-4 rounded w-2/3 mb-3" />
      <div className="shimmer h-3 rounded w-full mb-2" />
      <div className="shimmer h-3 rounded w-1/3" />
    </div>
  )
}

export function GithubRepos({ githubConfig }) {
  const { username, maxRepos, featured, exclude } = githubConfig || {}
  const { repos, loading, error } = useGithubRepos(username, maxRepos)
  const ref = useScrollReveal()
  const { t } = useLocale()

  // Filter out excluded repos, then prioritize featured ones
  const displayRepos = (() => {
    if (!repos.length) return []
    const filtered = exclude?.length
      ? repos.filter((r) => !exclude.includes(r.name))
      : repos
    if (featured?.length) {
      const featuredRepos = featured
        .map((name) => filtered.find((r) => r.name === name))
        .filter(Boolean)
      const rest = filtered.filter((r) => !featured.includes(r.name))
      return [...featuredRepos, ...rest].slice(0, maxRepos || 6)
    }
    return filtered
  })()

  if (!username) return null

  return (
    <section ref={ref} className="animate-on-scroll print-hide">
      <SectionHeading icon={Github} title={t("github")} />

      {error && (
        <p className="text-text-muted text-sm text-center py-4">
          {t("repoError")} — {error}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        {loading
          ? Array.from({ length: maxRepos || 4 }).map((_, i) => <RepoSkeleton key={i} />)
          : displayRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex flex-col rounded-xl border border-border bg-surface/50 p-4",
                  "hover:border-accent/30 hover:bg-surface transition-all duration-300"
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-semibold text-sm group-hover:text-accent transition-colors truncate">
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                </div>
                <p className="text-text-muted text-xs leading-relaxed line-clamp-2 flex-1 mb-2">
                  {repo.description || t("noDescription")}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || "#888" }}
                      />
                      {repo.language}
                    </span>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" /> {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" /> {repo.forks_count}
                    </span>
                  )}
                </div>
              </a>
            ))}
      </div>
    </section>
  )
}
