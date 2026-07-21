import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const step = Math.max(1, Math.round(target / 40))
    const id = setInterval(() => {
      setValue((v) => {
        const next = v + step
        if (next >= target) {
          clearInterval(id)
          return target
        }
        return next
      })
    }, 30)
    return () => clearInterval(id)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}
