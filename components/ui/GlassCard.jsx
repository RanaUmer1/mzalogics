import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={clsx('rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-6 shadow-[0_8px_35px_rgba(0,0,0,0.2)]', className)}
    >
      {children}
    </motion.div>
  )
}
