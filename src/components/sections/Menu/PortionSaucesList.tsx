import { menuData } from '@/data/menuData';

export function PortionSaucesList() {
  return <aside className="sauces"><div><span className="eyebrow">O toque final</span><h4>Adicionais de molho</h4></div><ul>{menuData.sauces.map((sauce) => <li key={sauce.id}>{sauce.name}</li>)}</ul></aside>;
}
