import { MessageCircle } from 'lucide-react';
import { restaurantInfo } from '@/data/restaurantInfo';

export function WhatsAppFAB() {
  return <a className="whatsapp-fab" href={restaurantInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Fale com o Micaxu pelo WhatsApp (abre em nova aba)"><MessageCircle size={27} /><span className="fab-tooltip">Vamos conversar?</span></a>;
}
