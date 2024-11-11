import { useMemo } from 'react';

export const usePagination = <T>(items: T[], currentPage: number, itemsPerPage: number) => {
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return {
    paginatedItems,
    totalPages,
  };
};
