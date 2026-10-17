import { ArrowUpRight, Leaf, Utensils } from 'lucide-react';
import { menuData } from '@/data/menuData';
import { instagramPosts } from '@/data/instagramPosts';
import { FoodImage } from '@/components/ui/FoodImage';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Price } from '@/components/ui/Price';

export function Buffet() {
  const buffet = menuData.buffetInfo;
  return (
    <section id="buffet" className="section-pad buffet-section">
      <div className="container buffet-grid">
        <GlassCard className="buffet-visual"><FoodImage post={instagramPosts[2]} fallbackOnly /><div className="buffet-photo-note"><Leaf size={18} /><span>Fresco, todos os dias.<br /><strong>Do nosso cuidado à sua mesa.</strong></span></div><span className="photo-number">01 / NOSSA COZINHA</span></GlassCard>
        <GlassCard className="buffet-copy unboxed"><SectionTitle eyebrow="Feito com cuidado" title={buffet.title} /><p>{buffet.description}</p><div className="buffet-price"><Utensils size={24} /><div><span>Almoço por KG</span><strong><Price value={buffet.pricePerKg} /><small>/ kg</small></strong><small>{buffet.note}</small></div></div><a className="text-link" href="#cardapio">E tem muito mais para descobrir <ArrowUpRight size={17} /></a></GlassCard>
      </div>
    </section>
  );
}
