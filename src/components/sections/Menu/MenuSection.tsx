'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, SearchX } from 'lucide-react';
import { menuData } from '@/data/menuData';
import { menuCategoryImages } from '@/data/images';
import { useMenuFilter } from '@/hooks/useMenuFilter';
import type { MenuCategoryId } from '@/types/menu';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { FoodImage } from '@/components/ui/FoodImage';
import { MenuTabs } from './MenuTabs';
import { MenuSearch } from './MenuSearch';
import { MenuItemCard } from './MenuItemCard';
import { PortionSaucesList } from './PortionSaucesList';

export function MenuSection() {
  const [active, setActive] = useState<MenuCategoryId | null>('porcoes');
  const [query, setQuery] = useState('');
  const filtered = useMenuFilter(menuData.items, active, query);
  const reduced = useReducedMotion();
  return (
    <section id="cardapio" className="section-pad menu-section">
      <div className="container">
        <GlassCard className="unboxed menu-intro"><SectionTitle eyebrow="Escolha seu próximo favorito" title="Um cardápio. Muitos encontros." description="Para dividir, brindar e deixar a conversa render. Encontre o que combina com o seu momento." /><span className="menu-intro-mark" aria-hidden="true"><ArrowDownRight size={52} /></span></GlassCard>
        <div className="menu-controls"><MenuSearch value={query} onChange={(value) => { setQuery(value); if (value.trim()) setActive(null); }} /><p>Explore. Escolha. Compartilhe.</p></div>
        <MenuTabs active={active} onChange={setActive} />
        <div className="menu-panel-meta"><p>Explore. Escolha. Compartilhe.</p><span role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}</span></div>
        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active ?? 'todos'}`} tabIndex={0}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={active ?? 'todos'} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
              {filtered.length === 0 ? <div className="empty-search"><SearchX size={30} /><h3>Nenhum sabor por aqui ainda.</h3><p>Tente outro nome ou explore todas as categorias.</p><button className="button button-outline" type="button" onClick={() => { setQuery(''); setActive(null); }}>Ver todo o cardápio</button></div> : menuData.categories.map((category) => {
                const items = filtered.filter((item) => item.categoryId === category.id);
                if (!items.length) return null;
                const image = menuCategoryImages[category.id];
                return <div className="menu-category" key={category.id}><div className={`menu-category-heading${false && image ? ' has-image' : ''}`}>{false && image ? <FoodImage image={image!} sizes="(max-width: 760px) 100vw, 1240px" /> : null}<h3><span aria-hidden="true">{category.icon}</span>{category.title}<span className="category-line" /></h3></div><div className="menu-grid">{items.map((item) => <MenuItemCard key={item.id} item={item} />)}</div>{category.id === 'porcoes' && <PortionSaucesList />}{category.id === 'caipirinhas' && <a className="text-link builder-link" href="#caipirinhas">Prefere criar a sua? Monte sua Caipirinha <ArrowDownRight size={18} /></a>}</div>;
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
