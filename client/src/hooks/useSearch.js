import { useState } from "react";

const useSearch = (items, searchField) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.snippet[searchField].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { filteredItems, searchQuery, setSearchQuery };
};

export default useSearch;
