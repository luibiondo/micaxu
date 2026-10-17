export interface InstagramPost {
  id: string;
  image: string;
  fallbackImage: string;
  caption: string;
  instagramUrl: string;
}

const instagramUrl = 'https://www.instagram.com/restaurantemicaxu/';

export const instagramPosts: InstagramPost[] = [
  {
    id: 'tilapia',
    image: '/images/instagram/post-tilapia.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    caption: 'Iscas de tilápia empanada, douradas e crocantes.',
    instagramUrl,
  },
  {
    id: 'camarao',
    image: '/images/instagram/post-camarao.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    caption: 'Camarão preparado para compartilhar.',
    instagramUrl,
  },
  {
    id: 'buffet',
    image: '/images/instagram/post-buffet.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    caption: 'Buffet variado, preparado diariamente.',
    instagramUrl,
  },
  {
    id: 'caipirinha',
    image: '/images/instagram/post-caipirinha.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=800&q=80',
    caption: 'Caipirinha com fruta fresca e gelo.',
    instagramUrl,
  },
  {
    id: 'torresmo',
    image: '/images/instagram/post-torresmo.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
    caption: 'Porções generosas para aproveitar à mesa.',
    instagramUrl,
  },
  {
    id: 'cerveja',
    image: '/images/instagram/post-cerveja.jpg',
    fallbackImage:
      'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800&q=80',
    caption: 'Cervejas geladas para acompanhar o cardápio.',
    instagramUrl,
  },
];
