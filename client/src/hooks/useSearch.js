import { useState } from "react";

const useSearch = (items, searchField) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle filtering safely by checking if 'items' and 'searchField' exist
  const filteredItems = items
    .filter(item => item?.snippet?.[searchField]?.toLowerCase().includes(searchQuery.toLowerCase()));

  return { filteredItems, searchQuery, setSearchQuery };
};

export default useSearch;
