import { Beer, CupSoda, Fish, GlassWater, Martini, Wine, Zap, UtensilsCrossed } from 'lucide-react';
import type { MenuCategoryId } from '@/types/menu';

const icons = {
  porcoes: Fish,
  cervejas: Beer,
  refrigerantes: CupSoda,
  'sucos-chas': GlassWater,
  'drinks-doses': Wine,
  energeticos: Zap,
  caipirinhas: Martini,
};

export function MenuCategoryIcon({ category, size = 22 }: { category: MenuCategoryId | null; size?: number }) {
  const Icon = category ? icons[category] : UtensilsCrossed;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}
