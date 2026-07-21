import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const value = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setPct(Number.isFinite(value) ? value : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[9998]"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(90deg, var(--accent), var(--secondary))',
        transition: 'width 0.1s linear',
      }}
    />
  )
}
