import { Sparkles } from 'lucide-react';
import type { MenuItem } from '@/types/menu';
import { cn } from '@/utils/cn';

export function MenuItemCard({ item }: { item: MenuItem }) {
  const pricing = item.pricing;
  return (
    <article className={cn('menu-item', item.highlight && 'highlighted')}>
      <div className="item-heading"><h4>{item.name}</h4>{item.highlight && <Sparkles size={14} className="item-sparkle" aria-label="Destaque" />}</div>
      {item.volumeOrServing && <p className="item-serving">{item.volumeOrServing}</p>}
      {item.variants && <p className="item-variants">{item.variants.join(' · ')}</p>}
      {item.description && <p className="item-description">{item.description}</p>}
      {(item.categoryId === 'porcoes' || (pricing.type === 'single' && pricing.note) || item.isAvailable === false) && <div className="item-bottom">
        {item.categoryId === 'porcoes' && <span className="item-serving">{pricing.type === 'dual' ? 'Porção média ou inteira' : 'Porção inteira'}</span>}
        {pricing.type === 'single' && pricing.note && <span className="item-serving">{pricing.note}</span>}
        {item.isAvailable === false && <span className="consult-note">Indisponível no momento</span>}
      </div>}
    </article>
  );
}
