import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Region..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
