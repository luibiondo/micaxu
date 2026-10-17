'use client';

import { motion } from 'framer-motion';
import { menuData } from '@/data/menuData';
import type { MenuCategoryId } from '@/types/menu';
import { cn } from '@/utils/cn';
import { MenuCategoryIcon } from './MenuCategoryIcon';

const tabs = [{ id: null, title: 'Tudo', icon: '' }, ...menuData.categories];

export function MenuTabs({ active, onChange }: { active: MenuCategoryId | null; onChange: (id: MenuCategoryId | null) => void }) {
  return (
    <div className="menu-tabs" role="tablist" aria-label="Categorias do cardápio">
      {tabs.map((tab, index) => <button key={tab.id ?? 'todos'} data-category={tab.id ?? 'todos'} id={`tab-${tab.id ?? 'todos'}`} role="tab" type="button" aria-selected={active === tab.id} aria-controls="menu-panel" tabIndex={active === tab.id ? 0 : -1} className={cn('menu-tab', active === tab.id && 'active')} onClick={() => onChange(tab.id)} onKeyDown={(event) => {
        let next: number | undefined;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); onChange(tabs[next].id); document.getElementById(`tab-${tabs[next].id ?? 'todos'}`)?.focus(); }
      }}>{active === tab.id && <motion.span layoutId="active-menu-tab" className="active-tab-bg" transition={{ type: 'spring', stiffness: 350, damping: 32 }} />}<span className="tab-content"><MenuCategoryIcon category={tab.id} size={17} />{tab.title}</span></button>)}
    </div>
  );
}
