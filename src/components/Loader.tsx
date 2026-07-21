import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-bg z-[99999] flex flex-col items-center justify-center gap-4"
        >
          <div className="font-heading text-2xl tracking-tight">
            N. <span className="grad-text">Abhiram</span>
          </div>
          <div className="w-56 h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary))' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
          <p className="font-mono text-muted text-xs tracking-wide">compiling portfolio.tsx …</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
