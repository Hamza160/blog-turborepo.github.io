import React from "react";

type Props = {
  totalPages: number;
  currentPage: number;
  pageNeighbours?: number;
  className?: string;
};
const Pagination = ({totalPages, currentPage, pageNeighbours = 2, className}: Props) => {

  return <div>Pagination</div>;
};

export default Pagination;
