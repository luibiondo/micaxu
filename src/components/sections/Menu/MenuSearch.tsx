import { Search, X } from 'lucide-react';

export function MenuSearch({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="menu-search"><Search size={19} aria-hidden="true" /><label className="sr-only" htmlFor="menu-search">Buscar no cardápio</label><input id="menu-search" type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder="O que vai bem hoje?" autoComplete="off" />{value && <button type="button" aria-label="Limpar busca" onClick={() => onChange('')}><X size={17} /></button>}</div>
  );
}
