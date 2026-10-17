import { galleryImages } from '@/data/images';
import { restaurantInfo } from '@/data/restaurantInfo';

export interface InstagramPost {
  id: string;
  image: string;
  fallbackImage: string;
  caption: string;
  instagramUrl: string;
}

export const instagramPosts: InstagramPost[] = galleryImages.map((image) => ({
  id: image.id,
  image: image.src,
  fallbackImage: image.src,
  caption: image.alt,
  instagramUrl: restaurantInfo.instagramUrl,
}));
