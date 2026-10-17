import type { MenuCategoryId } from '@/types/menu';

export interface RestaurantImage {
  id: string;
  src: string;
  alt: string;
  category: 'prato' | 'buffet' | 'bebida' | 'ambiente' | 'logo';
  orientation: 'portrait' | 'landscape' | 'square';
  width: number;
  height: number;
}

function image(
  id: string,
  alt: string,
  category: RestaurantImage['category'],
  width: number,
  height: number,
): RestaurantImage {
  return {
    id,
    src: `/images/optimized/${id}.webp`,
    alt,
    category,
    orientation: width === height ? 'square' : width > height ? 'landscape' : 'portrait',
    width,
    height,
  };
}

export const restaurantImages = {
  logo: image('logo', 'Logotipo branco do Restaurante Micaxu', 'logo', 447, 260),
  restaurante: {
    id: 'restaurante',
    src: '/images/restaurantemicaxu/cta.png',
    alt: 'Ambiente interno do Restaurante Micaxu com mesas e logotipo',
    category: 'ambiente' as const,
    orientation: 'square' as const,
    width: 447,
    height: 447,
  },
  iscasPeixe: image(
    'iscas-peixe',
    'Porção de iscas de peixe empanadas com limão no Restaurante Micaxu',
    'prato',
    1280,
    1600,
  ),
  buffetLegumes: image(
    'buffet-legumes',
    'Travessas do buffet com legumes e preparações ao molho',
    'buffet',
    1080,
    1080,
  ),
  buffetFrango: image(
    'buffet-frango',
    'Travessas de frango assado e batatas na cozinha do Micaxu',
    'buffet',
    480,
    854,
  ),
  buffetPeixes: image(
    'buffet-peixes',
    'Peixes e pratos gratinados no buffet do Micaxu, com arte promocional',
    'buffet',
    1280,
    1600,
  ),
  peixeEmpanado: image(
    'peixe-empanado',
    'Detalhe dos filés de peixe empanados e dourados do Micaxu',
    'prato',
    1280,
    1600,
  ),
  buffetCogumelos: image(
    'buffet-cogumelos',
    'Cogumelos com cebolinha e acompanhamentos no buffet',
    'buffet',
    1280,
    1600,
  ),
  buffetVariado: image(
    'buffet-variado',
    'Balcão do buffet Micaxu com carnes, legumes e acompanhamentos',
    'buffet',
    1280,
    1600,
  ),
  ambienteLago: {
    id: 'pure',
    src: '/images/restaurantemicaxu/pure.png',
    alt: 'Purê de batatas cremoso e filés de peixe empanados no buffet do Micaxu',
    category: 'buffet' as const,
    orientation: 'portrait' as const,
    width: 1280,
    height: 1600,
  },
  pure: {
    id: 'pure',
    src: '/images/restaurantemicaxu/pure.png',
    alt: 'Purê de batatas cremoso e filés de peixe empanados no buffet do Micaxu',
    category: 'buffet' as const,
    orientation: 'portrait' as const,
    width: 1280,
    height: 1600,
  },
  buffetEmpanados: image(
    'buffet-empanados',
    'Travessas de empanados, purê e batatas no buffet',
    'buffet',
    1280,
    1600,
  ),
  mesaPorcoes: {
    id: 'comida-de-primeira',
    src: '/images/restaurantemicaxu/comida-de-primeira.png',
    alt: 'Pratos quentes e travessas do buffet do Restaurante Micaxu',
    category: 'buffet' as const,
    orientation: 'portrait' as const,
    width: 1350,
    height: 1687,
  },
  comidaDePrimeira: {
    id: 'comida-de-primeira',
    src: '/images/restaurantemicaxu/comida-de-primeira.png',
    alt: 'Pratos quentes e travessas do buffet do Restaurante Micaxu',
    category: 'buffet' as const,
    orientation: 'portrait' as const,
    width: 1350,
    height: 1687,
  },
  buffetGratinado: image(
    'buffet-gratinado',
    'Buffet com prato gratinado, carnes aceboladas e acompanhamentos',
    'buffet',
    1280,
    1600,
  ),
  cervejas: {
    id: 'carne-e-salada',
    src: '/images/restaurantemicaxu/carne-e-salada.png',
    alt: 'Carnes grelhadas ao molho e brócolis com calabresa no buffet do Micaxu',
    category: 'buffet' as const,
    orientation: 'square' as const,
    width: 1080,
    height: 1080,
  },
  carneESalada: {
    id: 'carne-e-salada',
    src: '/images/restaurantemicaxu/carne-e-salada.png',
    alt: 'Carnes grelhadas ao molho e brócolis com calabresa no buffet do Micaxu',
    category: 'buffet' as const,
    orientation: 'square' as const,
    width: 1080,
    height: 1080,
  },
  sucoLaranja: image(
    'suco-laranja',
    'Copo de suco de laranja servido na mesa do Micaxu',
    'bebida',
    270,
    500,
  ),
} satisfies Record<string, RestaurantImage>;

export const heroImage: RestaurantImage = restaurantImages.restaurante;
export const buffetImage: RestaurantImage = restaurantImages.buffetVariado;
export const logoImage: RestaurantImage = restaurantImages.logo;

export const galleryImages: RestaurantImage[] = [
  restaurantImages.iscasPeixe,
  restaurantImages.buffetVariado,
  restaurantImages.ambienteLago,
  restaurantImages.peixeEmpanado,
  restaurantImages.buffetCogumelos,
  restaurantImages.buffetGratinado,
  restaurantImages.mesaPorcoes,
  restaurantImages.cervejas,
];

export const menuCategoryImages: Partial<Record<MenuCategoryId, RestaurantImage>> = {
  porcoes: restaurantImages.iscasPeixe,
  cervejas: restaurantImages.cervejas,
  'sucos-chas': restaurantImages.sucoLaranja,
};

// No real caipirinha photo was supplied; the UI must omit the photo rather than mislabel a drink.
export const caipirinhaImage: RestaurantImage | undefined = undefined;
