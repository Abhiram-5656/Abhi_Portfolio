import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import { skillGroups } from '../data/skills'

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <div ref={ref}>
      <div className="flex justify-between text-xs mb-1">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="skillbar-track">
        <motion.div
          className="skillbar-fill"
          initial={{ width: '0%' }}
          animate={{ width: inView ? `${level}%` : '0%' }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">02 — Skills</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14">What I build with</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.06} className="glass rounded-2xl p-6 proj-card">
              <h3 className="font-heading font-semibold mb-4">{group.category}</h3>
              <div className="space-y-3">
                {group.items.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
