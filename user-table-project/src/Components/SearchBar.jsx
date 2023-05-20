import React from "react";
import './Search.css';
const SearchBar = ({ searchTerm, onSearchTermChange }) => {


  return (
    <input className="inputStyles"
      type="text"
      placeholder="Search by title "
      value={searchTerm}
      onChange={onSearchTermChange}
      
    />
  );
};

export default SearchBar;
