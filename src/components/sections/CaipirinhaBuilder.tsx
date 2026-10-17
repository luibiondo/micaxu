'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, GlassWater, Sparkles } from 'lucide-react';
import { menuData } from '@/data/menuData';
import { caipirinhaImage } from '@/data/images';
import { FoodImage } from '@/components/ui/FoodImage';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/utils/cn';

export function CaipirinhaBuilder() {
  const config = menuData.caipirinhaBuilder;
  const [fruitId, setFruitId] = useState<string | null>(null);
  const [spiritId, setSpiritId] = useState<string | null>(null);
  const fruit = config.fruits.find((item) => item.id === fruitId);
  const spirit = config.spirits.find((item) => item.id === spiritId);
  const reduced = useReducedMotion();
  return (
    <section id="caipirinhas" className="section-pad caipirinha-section">
      <div className="container">
        <GlassCard className="unboxed"><SectionTitle eyebrow="Do seu jeito, no seu ritmo" title="Um brinde à sua combinação." description="Fruta fresca, seu destilado favorito e aquele toque de Micaxu. O próximo brinde é você quem monta." /></GlassCard>
        <GlassCard className="builder">
          <div className={cn('builder-visual', !caipirinhaImage && 'builder-illustration')}>{caipirinhaImage ? <FoodImage image={caipirinhaImage} /> : <GlassWater className="builder-glass-mark" size={180} strokeWidth={0.6} aria-hidden="true" />}<div className="builder-photo-copy"><GlassWater size={30} /><span>FRESCOR EM CADA GOLE</span><p>Seu momento.<br /><em>Sua caipirinha.</em></p></div></div>
          <div className="builder-content"><h3>Monte sua Caipirinha</h3><p className="builder-subtitle">Duas escolhas. Uma boa combinação.</p>
            <fieldset className="builder-step"><legend><span>01</span> Passo 1 — Fruta</legend><div className="fruit-options">{config.fruits.map((option) => <label key={option.id} className={cn('choice fruit-choice', fruitId === option.id && 'selected')}><input type="radio" name="fruta" value={option.id} checked={fruitId === option.id} onChange={() => setFruitId(option.id)} /><span>{option.name}</span>{fruitId === option.id && <Check size={15} />}</label>)}</div></fieldset>
            <fieldset className="builder-step" disabled={!fruit}><legend><span>02</span> Passo 2 — Destilado</legend><div className="spirit-options">{config.spirits.map((option) => <label key={option.id} className={cn('choice spirit-choice', spiritId === option.id && 'selected')}><input type="radio" name="destilado" value={option.id} checked={spiritId === option.id} onChange={() => setSpiritId(option.id)} /><span>{option.name}</span>{spiritId === option.id && <Check size={15} />}</label>)}</div></fieldset>
            <div className="builder-total" role="status" aria-live="polite"><div><span>SUA COMBINAÇÃO</span><AnimatePresence mode="wait" initial={false}><motion.p key={`${fruitId}-${spiritId}`} initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>{fruit && spirit ? `${fruit.name} + ${spirit.name}` : fruit ? 'Agora, escolha o destilado.' : 'Comece pela sua fruta favorita.'}</motion.p></AnimatePresence></div></div>
          </div>
        </GlassCard>
        <div className="specials-heading"><Sparkles size={18} /><h3>Ou deixe a surpresa por nossa conta.</h3><span>CAIPIRINHAS ESPECIAIS</span></div><div className="specials-grid">{config.specials.map((special) => <GlassCard key={special.id} className="special-card"><div><span className="eyebrow">Especial Micaxu</span><h4>{special.name}</h4>{special.description && <p>{special.description}</p>}</div></GlassCard>)}</div>
      </div>
    </section>
  );
}
