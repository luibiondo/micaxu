import { menuData } from '@/data/menuData';
import { Price } from '@/components/ui/Price';

export function PortionSaucesList() {
  return <aside className="sauces"><div><span className="eyebrow">O toque final</span><h4>Adicionais de molho</h4></div><ul>{menuData.sauces.map((sauce) => <li key={sauce.id}>{sauce.name}<span><Price value={sauce.price} /> / unidade</span></li>)}</ul></aside>;
}
