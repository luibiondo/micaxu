'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';

const links = [['#buffet', 'Nosso buffet'], ['#cardapio', 'Cardápio'], ['#caipirinhas', 'Caipirinhas'], ['#localizacao', 'Como chegar']] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); button.current?.focus(); }
    };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [open]);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href="#inicio" aria-label={`${restaurantInfo.name} — início`} onClick={() => setOpen(false)}>
          <img
            src="/images/restaurantemicaxu/logo.png"
            alt="Logo do Restaurante Micaxu"
            className="brand-logo"
            width={150}
            height={87}
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}</nav>
        <div className="nav-actions"><OpenStatusBadge compact /><a className="nav-contact button-whatsapp cta-glow" href={restaurantInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">Fale com a gente <ArrowUpRight size={15} /></a></div>
        <button ref={button} className="menu-toggle" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação móvel">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}<OpenStatusBadge /><a className="button button-whatsapp" href={restaurantInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={16} /></a></nav>}
    </header>
  );
}
