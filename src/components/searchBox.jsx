import React, { useState, useMemo } from "react";

const SearchInput = ({ items, input, setInput }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Search Input */}
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
