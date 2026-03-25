import { useState, useEffect } from "react"

export function useGithubRepos(username, maxRepos = 6) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) {
      setLoading(false)
      return
    }

    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${maxRepos}&type=owner`,
          { signal: controller.signal }
        )
        if (!res.ok) {
          throw new Error(res.status === 403 ? "GitHub API rate limit exceeded" : `GitHub API error: ${res.status}`)
        }
        const data = await res.json()
        setRepos(data)
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
    return () => controller.abort()
  }, [username, maxRepos])

  return { repos, loading, error }
}
