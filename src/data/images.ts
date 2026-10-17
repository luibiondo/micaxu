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
  logo: image('logo', 'Logotipo branco do Restaurante Micaxu', 'logo', 500, 500),
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
  ambienteLago: image(
    'ambiente-lago',
    'Mesas de madeira e vista para o lago no Restaurante Micaxu',
    'ambiente',
    1280,
    1600,
  ),
  buffetEmpanados: image(
    'buffet-empanados',
    'Travessas de empanados, purê e batatas no buffet',
    'buffet',
    1280,
    1600,
  ),
  mesaPorcoes: image(
    'mesa-porcoes',
    'Bastidores de uma sessão de fotos com porções, suco e cervejas à beira do lago',
    'ambiente',
    1200,
    1600,
  ),
  buffetGratinado: image(
    'buffet-gratinado',
    'Buffet com prato gratinado, carnes aceboladas e acompanhamentos',
    'buffet',
    1280,
    1600,
  ),
  cervejas: image(
    'cervejas',
    'Balde com garrafas de cerveja e taça servida à beira do lago',
    'bebida',
    500,
    800,
  ),
  sucoLaranja: image(
    'suco-laranja',
    'Copo de suco de laranja servido na mesa do Micaxu',
    'bebida',
    270,
    500,
  ),
} satisfies Record<string, RestaurantImage>;

export const heroImage: RestaurantImage = restaurantImages.iscasPeixe;
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
