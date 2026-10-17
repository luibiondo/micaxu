'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { InstagramPost } from '@/data/instagramPosts';
import { cn } from '@/utils/cn';

export function FoodImage({ post, priority = false, className, sizes = '(max-width: 640px) 100vw, 50vw', fallbackOnly = false }: { post: InstagramPost; priority?: boolean; className?: string; sizes?: string; fallbackOnly?: boolean }) {
  const [source, setSource] = useState(fallbackOnly ? post.fallbackImage : post.image);
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="image-unavailable" role="img" aria-label={post.caption}>Imagem indisponível · {post.caption}</div>;
  return <Image src={source} alt={post.caption} fill sizes={sizes} priority={priority} className={cn('food-image', className)} onError={() => source === post.fallbackImage ? setFailed(true) : setSource(post.fallbackImage)} />;
}
