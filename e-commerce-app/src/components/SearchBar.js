import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {

    return (
        <div>
            <input 
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
