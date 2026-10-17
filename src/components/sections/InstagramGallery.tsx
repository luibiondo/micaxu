import { ArrowUpRight, Instagram } from 'lucide-react';
import { galleryImages } from '@/data/images';
import { restaurantInfo } from '@/data/restaurantInfo';
import { FoodImage } from '@/components/ui/FoodImage';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function InstagramGallery() {
  return (
    <section className="section-pad instagram-section" id="instagram">
      <div className="container"><GlassCard className="unboxed instagram-heading"><SectionTitle eyebrow="Um gostinho do que espera você" title="Da nossa mesa para o seu feed." /><a className="button button-outline" href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @restaurantemicaxu <ArrowUpRight size={16} /></a></GlassCard>
        <div className="instagram-grid">{galleryImages.map((image, index) => <GlassCard key={image.id} className="instagram-tile"><a href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${image.alt} Veja @restaurantemicaxu no Instagram (abre em nova aba)`}><FoodImage image={image} sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 25vw" /><span className="instagram-overlay"><Instagram size={23} /><span>{image.alt}</span><ArrowUpRight size={20} /></span><span className="image-index">{String(index + 1).padStart(2, '0')}</span></a></GlassCard>)}</div>
        <div className="instagram-caption"><p>Um convite para chegar mais perto.</p><span>Fotos reais do Micaxu · acompanhe o restaurante no Instagram.</span><a className="text-link" href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer">Siga-nos no Instagram <ArrowUpRight size={15} /></a></div>
      </div>
    </section>
  );
}
