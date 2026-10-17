'use client';

import { useMemo } from 'react';
import type { MenuCategoryId, MenuItem } from '@/types/menu';

export function useMenuFilter(
  items: readonly MenuItem[],
  categoryId: MenuCategoryId | null,
  searchTerm: string,
): MenuItem[] {
  return useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR');

    return items.filter((item) => {
      const matchesCategory = categoryId === null || item.categoryId === categoryId;
      const searchableText = [item.name, item.description, item.volumeOrServing, ...(item.variants ?? [])]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('pt-BR');

      return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch));
    });
  }, [items, categoryId, searchTerm]);
}
