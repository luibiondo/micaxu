'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function GlassCard({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div id={id} className={cn('glass-card', className)} initial={reduced ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
