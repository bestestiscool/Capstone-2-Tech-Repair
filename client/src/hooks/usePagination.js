import { useState } from "react";

const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Set the new page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return { currentItems, paginate, totalPages, currentPage };
};

export default usePagination;
