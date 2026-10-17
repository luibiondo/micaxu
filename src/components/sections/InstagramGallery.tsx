import { ArrowUpRight, Instagram } from 'lucide-react';
import { instagramPosts } from '@/data/instagramPosts';
import { restaurantInfo } from '@/data/restaurantInfo';
import { FoodImage } from '@/components/ui/FoodImage';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';

export function InstagramGallery() {
  return (
    <section className="section-pad instagram-section" id="instagram">
      <div className="container"><GlassCard className="unboxed instagram-heading"><SectionTitle eyebrow="Um gostinho do que espera você" title="Da nossa mesa para o seu feed." /><a className="button button-outline" href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @restaurantemicaxu <ArrowUpRight size={16} /></a></GlassCard>
        <div className="instagram-grid">{instagramPosts.map((post, index) => <GlassCard key={post.id} className="instagram-tile"><a href={post.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${post.caption} Veja @restaurantemicaxu no Instagram (abre em nova aba)`}><FoodImage post={post} sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 17vw" /><span className="instagram-overlay"><Instagram size={23} /><span>{post.caption}</span><ArrowUpRight size={20} /></span><span className="image-index">0{index + 1}</span></a></GlassCard>)}</div>
        <div className="instagram-caption"><p>Um convite para chegar mais perto.</p><span>Imagens ilustrativas · acompanhe o restaurante no Instagram.</span><a className="text-link" href={restaurantInfo.instagramUrl} target="_blank" rel="noopener noreferrer">Siga-nos no Instagram <ArrowUpRight size={15} /></a></div>
      </div>
    </section>
  );
}
