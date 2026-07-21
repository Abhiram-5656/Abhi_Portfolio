import Reveal from './Reveal'
import CountUp from './CountUp'

const TIMELINE = [
  {
    year: '2022',
    title: 'Started B.Tech CSE',
    desc: 'Laid the fundamentals — data structures, OOP, and a lot of first programs.',
    color: 'bg-accent',
  },
  {
    year: '2024',
    title: 'MERN Development',
    desc: 'Built full-stack apps with React, Node.js, Express and MongoDB.',
    color: 'bg-accent',
  },
  {
    year: '2025',
    title: 'Java Backend + Spring Boot',
    desc: 'Shifted focus to REST APIs, layered architecture and production-style backends.',
    color: 'bg-accent',
  },
  {
    year: '2026',
    title: 'Looking for Software Engineer opportunities',
    desc: 'Ready to bring all of the above to a product team.',
    color: 'bg-secondary',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-accent text-sm mb-2">01 — About</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-14">A bit about how I got here</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14">
          <Reveal className="space-y-4 text-muted leading-relaxed">
            <div>
              <p>
                I'm a <span className="text-white font-medium">final-year B.Tech CSE student</span> who's spent the
                last couple of years narrowing in on one thing:{' '}
                <span className="text-white font-medium">backend development</span>.
              </p>
              <p className="mt-4">
                I'm comfortable across <span className="text-white font-medium">Java, Spring Boot, Node.js</span>{' '}
                and the full <span className="text-white font-medium">MERN stack</span> — and I genuinely enjoy
                sitting with a hard DSA problem until it clicks.
              </p>
              <p className="mt-4">
                Lately I've been going deeper into{' '}
                <span className="text-white font-medium">scalable backend systems and cloud technologies</span>,
                because that's the layer I want to keep building my career on.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center glass rounded-2xl py-5">
                  <div className="font-heading font-bold text-2xl text-accent">
                    <CountUp target={250} suffix="+" />
                  </div>
                  <div className="text-xs text-muted mt-1">DSA problems solved</div>
                </div>
                <div className="text-center glass rounded-2xl py-5">
                  <div className="font-heading font-bold text-2xl text-accent">
                    <CountUp target={9.26} />
                  </div>
                  <div className="text-xs text-muted mt-1">CGPA (out of 10)</div>
                </div>
                <div className="text-center glass rounded-2xl py-5">
                  <div className="font-heading font-bold text-2xl text-accent">
                    <CountUp target={4} suffix="+" />
                  </div>
                  <div className="text-xs text-muted mt-1">Projects built</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="relative pl-8" delay={0.1}>
            <div className="timeline-line absolute left-2 top-1 bottom-1 w-[2px]" />
            <div className="space-y-10">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative">
                  <span className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full ${item.color}`} />
                  <p className={`font-mono text-sm mb-1 ${item.color === 'bg-secondary' ? 'text-secondary' : 'text-accent'}`}>
                    {item.year}
                  </p>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
