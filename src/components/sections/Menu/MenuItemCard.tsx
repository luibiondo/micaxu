'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import type { MenuItem } from '@/types/menu';
import { menuCategoryImages } from '@/data/images';
import { FoodImage } from '@/components/ui/FoodImage';
import { cn } from '@/utils/cn';
import { MenuCategoryIcon } from './MenuCategoryIcon';

export function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(25);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(340px circle at ${x}% ${y}%, var(--card-glow), transparent 75%)`;
  const pricing = item.pricing;
  const image = menuCategoryImages[item.categoryId];
  const serving = item.volumeOrServing ?? (item.categoryId === 'porcoes' ? pricing.type === 'dual' ? 'Média ou inteira' : 'Inteira' : undefined);
  const note = pricing.type === 'single' ? pricing.note : undefined;
  const hasDetails = Boolean(item.description || item.variants?.length || note);
  const detailsId = `details-${item.id}`;
  return (
    <motion.article layout={!reduced} className={cn('menu-item', item.highlight && 'highlighted', expanded && 'expanded')} data-category={item.categoryId}
      initial={reduced ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
      transition={{ opacity: { duration: 0.24, delay: reduced ? 0 : Math.min(index, 8) * 0.035 }, y: { duration: 0.3 }, layout: { duration: 0.3 } }}>
      <motion.div className="menu-card-surface" style={{ rotateX, rotateY, transformPerspective: 1000 }}
        whileHover={reduced ? undefined : { y: -5 }} whileTap={reduced ? undefined : { scale: 0.985 }}
        onPointerMove={(event) => {
          if (reduced || event.pointerType !== 'mouse') return;
          const rect = event.currentTarget.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          x.set(px * 100); y.set(py * 100); rotateX.set((0.5 - py) * 5); rotateY.set((px - 0.5) * 5);
        }}
        onPointerLeave={() => { rotateX.set(0); rotateY.set(0); x.set(50); y.set(25); }}>
        {image && <div className="menu-card-photo"><FoodImage image={image} decorative sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="menu-photo-shade" /></div>}
        <motion.div className="menu-card-spotlight" style={{ background: spotlight }} aria-hidden="true" />
        <div className="menu-card-body">
          <div className="menu-card-top"><span className="menu-card-icon"><MenuCategoryIcon category={item.categoryId} /></span><span className="menu-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
          <div className="menu-card-tags">{serving && <span className="menu-serving-pill">{serving}</span>}{item.highlight && <span className="menu-highlight-tag"><Sparkles size={12} />Destaque</span>}</div>
          <div className="item-heading"><h4>{item.name}</h4></div>
          {item.isAvailable === false && <span className="menu-unavailable" role="status">Indisponível no momento</span>}
          {hasDetails && <div className="menu-card-details">
            <button type="button" className="menu-details-toggle" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Fechar detalhes' : 'Ver detalhes'}<ChevronDown size={16} />
            </button>
            <AnimatePresence initial={false}>
              {expanded && <motion.div id={detailsId} className="menu-details-content" initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.22 }}>
                {item.description && <p>{item.description}</p>}
                {item.variants && <ul>{item.variants.map((variant) => <li key={variant}>{variant}</li>)}</ul>}
                {note && <p>{note}</p>}
              </motion.div>}
            </AnimatePresence>
          </div>}
        </div>
      </motion.div>
    </motion.article>
  );
}
