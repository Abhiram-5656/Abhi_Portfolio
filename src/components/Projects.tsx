import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Search } from 'lucide-react'
import Reveal from './Reveal'
import { projects, projectFilters } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return projects.filter((p) => {
      const matchesFilter = filter === 'all' || p.tags.includes(filter)
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.join(' ').toLowerCase().includes(q)
      return matchesFilter && matchesSearch
    })
  }, [filter, query])

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">03 — Projects</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-8">Things I've shipped</h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative w-full sm:w-72">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search projects…"
              className="glass rounded-xl pl-10 pr-4 py-2.5 text-sm w-full bg-transparent placeholder:text-muted"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className="text-xs px-4 py-2 rounded-full glass transition-colors"
                style={
                  filter === f.value
                    ? { borderColor: 'var(--accent)', color: 'var(--accent)' }
                    : undefined
                }
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 && (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-muted col-span-full text-center py-10"
              >
                No projects match your search.
              </motion.p>
            )}
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="glass rounded-2xl p-6 proj-card flex flex-col"
              >
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted text-sm mb-4 flex-1">{p.description}</p>
                {p.features.length > 0 && (
                  <ul className="text-xs text-muted mb-4 space-y-1">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.demoUrl && (
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2 rounded-lg font-semibold flex items-center gap-1.5"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs px-4 py-2 rounded-lg font-semibold flex items-center gap-1.5"
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
