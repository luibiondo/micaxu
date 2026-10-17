import { Clock3, Scale, Users } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';
import { menuData } from '@/data/menuData';
import { OpenStatusBadge } from '@/components/ui/OpenStatusBadge';
import { Price } from '@/components/ui/Price';

export function InfoBanner() {
  const hours = restaurantInfo.openingHours;
  const weekdayHours = `${hours.weekdays.opens.replace(':', 'h')}–${hours.weekdays.closes.replace(':00', 'h')}`;
  const weekendHours = `${hours.weekendsAndHolidays.opens.replace(':', 'h')}–${hours.weekendsAndHolidays.closes.replace(':00', 'h')}`;
  return (
    <section className="info-banner" aria-label="Informações de atendimento">
      <div className="container info-grid">
        <div className="info-cell"><Users /><div><span className="info-label">Pode chegar!</span><strong>ORDEM DE CHEGADA</strong><span>Não fazemos RESERVAS!</span></div></div>
        <div className="info-cell"><Scale /><div><span className="info-label">Almoço por Kg</span><strong><Price value={menuData.buffetInfo.pricePerKg} /></strong><small>{menuData.buffetInfo.note}</small></div></div>
        <div className="info-cell"><Clock3 /><div><OpenStatusBadge /><span>Ter–Sex {weekdayHours}</span><span>Sáb, Dom e Feriados {weekendHours}</span></div></div>
      </div>
    </section>
  );
}
