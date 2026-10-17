export type MenuCategoryId =
  | 'porcoes'
  | 'cervejas'
  | 'refrigerantes'
  | 'sucos-chas'
  | 'drinks-doses'
  | 'energeticos'
  | 'caipirinhas';

export interface MenuCategory {
  id: MenuCategoryId;
  title: string;
  icon: string;
  description?: string;
  note?: string;
}

export type PriceModel =
  | {
      type: 'dual';
      priceMedia: number;
      priceInteira: number;
    }
  | {
      type: 'single';
      price: number;
      note?: string;
    }
  | {
      type: 'consult';
      price?: number;
      note: string;
    };

export interface MenuItem {
  id: string;
  categoryId: MenuCategoryId;
  name: string;
  description?: string;
  volumeOrServing?: string;
  pricing: PriceModel;
  variants?: string[];
  highlight?: boolean;
  isAvailable?: boolean;
}

export interface SauceAddon {
  id: string;
  name: string;
  price: number;
}

export interface CaipirinhaFruit {
  id: string;
  name: string;
}

export interface CaipirinhaSpirit {
  id: string;
  name: string;
  price: number;
}

export interface CaipirinhaSpecial {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface CaipirinhaConfig {
  fruits: CaipirinhaFruit[];
  spirits: CaipirinhaSpirit[];
  specials: CaipirinhaSpecial[];
}

export interface RestaurantMenuData {
  categories: MenuCategory[];
  items: MenuItem[];
  sauces: SauceAddon[];
  caipirinhaBuilder: CaipirinhaConfig;
  buffetInfo: {
    pricePerKg: number;
    note: string;
    title: string;
    description: string;
  };
}
