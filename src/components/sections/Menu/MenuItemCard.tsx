'use client';

import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import type { MenuItem } from '@/types/menu';
import { menuPlaceholderImage } from '@/data/images';
import { FoodImage } from '@/components/ui/FoodImage';
import { cn } from '@/utils/cn';
import { MenuCategoryIcon } from './MenuCategoryIcon';

export function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const pricing = item.pricing;
  const serving = item.volumeOrServing ?? (item.categoryId === 'porcoes' ? pricing.type === 'dual' ? 'Meia ou inteira' : 'Inteira' : undefined);
  const note = pricing.type === 'single' ? pricing.note : undefined;
  const hasDetails = Boolean(item.description || item.variants?.length || note);
  const detailsId = `details-${item.id}`;
  return (
    <article className={cn('menu-item', item.highlight && 'highlighted', expanded && 'expanded')} data-category={item.categoryId}>
      <div className="menu-card-surface">
        <div className="menu-card-photo"><FoodImage image={menuPlaceholderImage} sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="menu-photo-shade" /></div>
        <div className="menu-card-body">
          <div className="menu-card-top"><span className="menu-card-icon"><MenuCategoryIcon category={item.categoryId} /></span><span className="menu-card-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span></div>
          <div className="menu-card-tags">{serving && <span className="menu-serving-pill">{serving}</span>}{item.highlight && <span className="menu-highlight-tag"><Sparkles size={12} />Destaque</span>}</div>
          <div className="item-heading"><h4>{item.name}</h4></div>
          {item.isAvailable === false && <span className="menu-unavailable" role="status">Indisponível no momento</span>}
          {hasDetails && <div className="menu-card-details">
            <button type="button" className="menu-details-toggle" aria-expanded={expanded} aria-controls={detailsId} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Fechar detalhes' : 'Ver detalhes'}<ChevronDown size={16} />
            </button>
              {expanded && <div id={detailsId} className="menu-details-content">
                {item.description && <p>{item.description}</p>}
                {item.variants && <ul>{item.variants.map((variant) => <li key={variant}>{variant}</li>)}</ul>}
                {note && <p>{note}</p>}
              </div>}
          </div>}
        </div>
      </div>
    </article>
  );
}
