import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Button({ as: Tag = 'button', children, className = '', variant = 'primary', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:from-indigo-400 hover:to-violet-400 focus:ring-indigo-400/50',
    glass: 'backdrop-blur bg-white/10 text-white hover:bg-white/15 focus:ring-white/40 border border-white/20',
    subtle: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-600/50',
  };
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="inline-block">
      <Tag className={clsx(base, variants[variant], className)} {...props}>
        {children}
      </Tag>
    </motion.div>
  )
}
