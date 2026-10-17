'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { heroImage } from '@/data/images';
import { restaurantInfo } from '@/data/restaurantInfo';
import { FoodImage } from '@/components/ui/FoodImage';

export function Hero() {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="hero">
      <div className="hero-grain" aria-hidden="true" />
      <div className="container hero-grid">
        <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow"><span />Boituva, São Paulo</p>
          <h1>Tem sabor.<br />Tem encontro.<br /><em>Tem Micaxu.</em></h1>
          <p className="hero-description">Da primeira garfada ao último brinde. Buffet fresquinho, porções generosas e bons momentos para compartilhar.</p>
          <div className="hero-buttons"><a href="#cardapio" className="button button-outline">Explore o cardápio <ArrowUpRight size={18} /></a><a href={restaurantInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="button button-brand cta-glow"><MapPin size={17} /> Como chegar</a></div>
          <div className="hero-notice"><span className="tiny-star" aria-hidden="true">✳</span><span>Atendimento por <strong>ORDEM DE CHEGADA</strong><br /><strong>Não fazemos RESERVAS!</strong></span></div>
        </motion.div>
        <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: 1.045 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3 }}>
          <FoodImage image={heroImage} priority sizes="(max-width: 760px) 100vw, 55vw" />
          <div className="hero-image-shade" />
          <div className="hero-stamp"><span>COMIDA BOA</span><UtensilMark /><span>BOA COMPANHIA</span></div>
          <div className="hero-image-caption"><span>À MESA, A VIDA É MELHOR.</span><span>Buffet · Porções · Drinks</span></div>
        </motion.div>
      </div>
      <a href="#buffet" className="hero-scroll"><span>Um convite ao sabor</span><ArrowDown size={16} /></a>
    </section>
  );
}

function UtensilMark() {
  return <span className="stamp-m" aria-hidden="true">m.</span>;
}
