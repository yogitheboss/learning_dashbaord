import React, { useState, useMemo } from "react";

const SearchInputWithSuggestions = ({ items }) => {
  const [query, setQuery] = useState(""); // State to hold the search query

  // Memoized filtered items based on query
  const filteredItems = useMemo(() => {
    if (!query) return []; // Return an empty array if the query is empty
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    ); // Filter items based on the query
  }, [query]); // Recompute filtered items only when the query changes

  // Function to handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update query state
  };

  // Function to handle item selection
  const handleSelectItem = (item) => {
    setQuery(item); // Set the input to the selected item
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Search Input */}
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />

      {/* Suggestions Dropdown */}
      {filteredItems.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelectItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInputWithSuggestions;
