import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

export function transformTakeSkip({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) {
  return {
    skip: ((page ?? 1) - 1) * (pageSize ?? DEFAULT_PAGE_SIZE),
    take: pageSize ?? DEFAULT_PAGE_SIZE,
  };
}

export function calculatePageNumbers({
  pageNeighbours,
  totalPages,
  currentPage,
}: {
  pageNeighbours: number;
  totalPages: number;
  currentPage: number;
}) {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalPages + 2;

  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

    let pages: (number | string)[] = Array.from({
      length: endPage - startPage + 1,
    }).map((_, i) => startPage + i);

    if (startPage > 2) {
      pages = ["...", ...pages];
    }
    if (endPage < totalPages - 1) {
      pages = [...pages, "..."];
    }
    return [1, ...pages, totalPages];
  }

  return Array.from({ length: totalNumbers }, (_, i) => i + 1);
}
