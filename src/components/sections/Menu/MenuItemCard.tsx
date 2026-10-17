import { Sparkles } from 'lucide-react';
import type { MenuItem } from '@/types/menu';
import { Price } from '@/components/ui/Price';
import { cn } from '@/utils/cn';

export function MenuItemCard({ item }: { item: MenuItem }) {
  const pricing = item.pricing;
  return (
    <article className={cn('menu-item', item.highlight && 'highlighted')}>
      <div className="item-heading"><h4>{item.name}</h4>{item.highlight && <Sparkles size={14} className="item-sparkle" aria-label="Destaque" />}</div>
      {item.volumeOrServing && <p className="item-serving">{item.volumeOrServing}</p>}
      {item.variants && <p className="item-variants">{item.variants.join(' · ')}</p>}
      {item.description && <p className="item-description">{item.description}</p>}
      <div className="item-bottom">
        {pricing.type === 'dual' ? <div className="dual-price"><span><small>M</small><Price value={pricing.priceMedia} /></span><span><small>I</small><Price value={pricing.priceInteira} /></span></div> : <div className="single-price">{item.categoryId === 'porcoes' && <small>INTEIRA</small>}{pricing.type === 'single' ? <Price value={pricing.price} /> : pricing.price !== undefined && <Price value={pricing.price} />}</div>}
        {pricing.type === 'consult' && <span className="consult-note">{pricing.note}</span>}
        {pricing.type === 'single' && pricing.note && <span className="item-serving">{pricing.note}</span>}
        {item.isAvailable === false && <span className="consult-note">Indisponível no momento</span>}
      </div>
    </article>
  );
}
