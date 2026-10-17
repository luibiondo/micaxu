'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { RestaurantImage } from '@/data/images';
import { cn } from '@/utils/cn';

export function FoodImage({ image, priority = false, className, sizes = '(max-width: 640px) 100vw, 50vw', decorative = false }: { image: RestaurantImage; priority?: boolean; className?: string; sizes?: string; decorative?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="image-unavailable" role={decorative ? undefined : 'img'} aria-label={decorative ? undefined : image.alt}>Imagem indisponível</div>;
  return <Image src={image.src} alt={decorative ? '' : image.alt} fill unoptimized sizes={sizes} priority={priority} loading={priority ? 'eager' : 'lazy'} className={cn('food-image', className)} onError={() => setFailed(true)} />;
}
