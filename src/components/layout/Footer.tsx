import { ArrowUpRight, Clock3, Instagram, MapPin, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';

export function Footer() {
  const hours = restaurantInfo.openingHours;
  return (
    <footer id="localizacao" className="footer section-pad">
      <div className="container">
        <div className="footer-top"><div><p className="eyebrow"><span />A mesa está posta</p><h2>O próximo encontro<br />tem endereço certo.</h2></div><a className="button button-brand cta-glow" href={restaurantInfo.mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Como chegar <ArrowUpRight size={17} /></a></div>
        <div className="footer-grid">
          <div><a href="#inicio" className="brand footer-brand"><UtensilsCrossed size={24} /><span>micaxu<span className="brand-caption">RESTAURANTE · BOITUVA</span></span></a><p>Buffet por Kg & Porções / Bebidas.<br />Sabor brasileiro. Bons encontros.</p><p className="footer-notice">{restaurantInfo.serviceNotice}</p></div>
          <div><h3><MapPin size={16} /> Venha nos visitar</h3><address>{restaurantInfo.address}</address><a className="text-link" href={restaurantInfo.mapsUrl} target="_blank" rel="noopener noreferrer">Abrir no Google Maps <ArrowUpRight size={14} /></a></div>
          <div><h3><Clock3 size={16} /> Nossos horários</h3><dl className="hours"><div><dt>Terça à sexta</dt><dd>{hours.weekdays.opens.replace(':', 'h')}–{hours.weekdays.closes.replace(':00', 'h')}</dd></div><div><dt>Sábado, Domingo e Feriados</dt><dd>{hours.weekendsAndHolidays.opens.replace(':', 'h')}–{hours.weekendsAndHolidays.closes.replace(':00', 'h')}</dd></div><div><dt>Segunda-feira</dt><dd>Fechado</dd></div></dl><OpenStatusBadge /></div>
          <div><h3>Vamos conversar</h3><a className="footer-social button-whatsapp cta-glow" href={restaurantInfo.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />{restaurantInfo.phone}<ArrowUpRight size={14} /></a><a className="footer-social" href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} />@restaurantemicaxu<ArrowUpRight size={14} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {restaurantInfo.name}</span><span>Feito para compartilhar bons momentos.</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </div>
    </footer>
  );
}
