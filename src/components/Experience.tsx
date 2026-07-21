import { Briefcase } from 'lucide-react'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">04 — Experience</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14">Experience</h2>
        </Reveal>

        <Reveal delay={0.1} className="glass rounded-2xl p-10 text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Briefcase className="text-accent" size={24} />
          </div>
          <h3 className="font-heading font-semibold text-xl mb-2">
            Open to Internship & Full-Time Software Engineer Opportunities
          </h3>
          <p className="text-muted text-sm">
            No formal internship yet — I've been putting that time into projects, DSA practice, and backend
            fundamentals instead. Let's talk if you're hiring.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
