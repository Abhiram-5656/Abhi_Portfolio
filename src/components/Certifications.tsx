import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Reveal from './Reveal'

// Set your GitHub username to pull live repo count, followers, and latest repos.
const GITHUB_USERNAME = 'Abhiram-5656'

interface GithubUser {
  public_repos: number
  followers: number
  following: number
}
interface GithubRepo {
  name: string
  html_url: string
  stargazers_count: number
}

const CERTS = [
  { code: 'AWS', title: 'AWS Cloud Practitioner', desc: 'Foundational cloud concepts, AWS services, security & pricing.' },
  { code: 'RH', title: 'Red Hat EX183', desc: 'Red Hat Certified System Administrator fundamentals.' },
 
]

const ACHIEVEMENTS = [
  { value: '9.26', label: 'Current CGPA' },
  { value: '3+', label: 'Major Projects' },
  { value: '2', label: 'Professional Certifications' },
  { value: '2026', label: 'Graduation Year' },
]

export default function Certifications() {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [ghError, setGhError] = useState(false)

  useEffect(() => {
    if (!GITHUB_USERNAME) return
    ;(async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`),
        ])
        setUser(await userRes.json())
        const reposData = await reposRes.json()
        setRepos(Array.isArray(reposData) ? reposData : [])
      } catch {
        setGhError(true)
      }
    })()
  }, [])

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">05 — Certifications</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14">Certifications & Achievements</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="glass rounded-2xl p-6 proj-card">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent font-heading font-bold text-sm">
                {c.code}
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-muted text-sm">{c.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-heading font-semibold text-xl mb-6">Achievements</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.05} className="glass rounded-2xl p-6 text-center">
              <p className="font-heading font-bold text-2xl text-accent">{a.value}</p>
              <p className="text-muted text-xs mt-1">{a.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold">GitHub Stats</h3>
              <a
  href="https://github.com/Abhiram-5656"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 px-4 py-2 rounded-lg bg-accent text-white hover:opacity-90 transition"
>
  View GitHub Profile
</a>
              <span className="text-xs text-muted font-mono">
                {GITHUB_USERNAME ? `@${GITHUB_USERNAME}` : '@your-github-username'}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm mb-4">
              <div className="glass rounded-xl py-3">
                <p className="font-bold text-accent">{user?.public_repos ?? '—'}</p>
                <p className="text-muted text-xs">Repos</p>
              </div>
              <div className="glass rounded-xl py-3">
                <p className="font-bold text-accent">{user?.followers ?? '—'}</p>
                <p className="text-muted text-xs">Followers</p>
              </div>
              <div className="glass rounded-xl py-3">
                <p className="font-bold text-accent">{user?.following ?? '—'}</p>
                <p className="text-muted text-xs">Following</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              {!GITHUB_USERNAME && (
                <p className="text-muted text-xs">Add your GitHub username in Certifications.tsx to load live repos.</p>
              )}
              {ghError && <p className="text-muted text-xs">Couldn't load GitHub data right now.</p>}
              {repos.map((r) => (
                <a
                  key={r.name}
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-xl px-4 py-2.5 flex items-center justify-between hover:border-accent transition-colors"
                >
                  <span className="truncate">{r.name}</span>
                  <span className="text-muted text-xs flex items-center gap-1">
                    <Star size={11} /> {r.stargazers_count}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="glass rounded-2xl p-6">
           <h3 className="font-heading font-semibold mb-4">
  LeetCode Statistics
</h3>

<div className="grid grid-cols-4 gap-3 text-center text-sm">
  <div className="glass rounded-xl py-3">
    <p className="font-bold text-accent">241</p>
    <p className="text-muted text-xs">Problems Solved</p>
  </div>

  <div className="glass rounded-xl py-3">
    <p className="font-bold text-accent">35</p>
    <p className="text-muted text-xs">Max Streak</p>
  </div>

  <div className="glass rounded-xl py-3">
    <p className="font-bold text-accent">218</p>
    <p className="text-muted text-xs">Active Days</p>
  </div>

  <div className="glass rounded-xl py-3">
    <p className="font-bold text-accent">5</p>
    <p className="text-muted text-xs">Badges</p>
  </div>
</div>

<div className="mt-6 glass rounded-2xl p-5">
  <div className="flex items-center justify-between">
    <div>
      <h4 className="font-semibold">LeetCode Profile</h4>

      <p className="text-muted text-sm mt-1">
        Rank: <span className="text-white">619,591</span>
      </p>

      <p className="text-muted text-sm">
        Java • 215 Problems | C++ • 16 | C • 10
      </p>
    </div>

    <a
      href="https://leetcode.com/u/2200031123/"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-xl bg-accent text-white hover:bg-accent/90 transition"
    >
      View Profile
    </a>
  </div>
</div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
