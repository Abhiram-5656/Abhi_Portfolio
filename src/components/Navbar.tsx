import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      let current = 'home'
      NAV_ITEMS.forEach((item) => {
        const el = document.querySelector(item.href) as HTMLElement | null
        if (el && window.scrollY >= el.offsetTop - 140) current = item.href.slice(1)
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle('light')
    setIsLight((v) => !v)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass mt-4 rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="font-heading font-bold text-lg tracking-tight">
            N.<span className="grad-text">Abhiram</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-muted">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:border-accent"
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
              aria-label="Open menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="glass mt-2 rounded-2xl px-5 py-4 flex flex-col gap-4 text-sm text-muted md:hidden">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
