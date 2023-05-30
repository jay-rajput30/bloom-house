import React, { useContext } from "react";
import { filterContext } from "../../context/FilterProvider";
import { Filter, Sliders } from "react-feather";

const SearchFilter = ({ setShowFilter }) => {
  const { searchTerm, searchTermChangeHandler } = useContext(filterContext);
  return (
    <div className="search-filter-wrapper">
      <input
        type="text"
        value={searchTerm}
        className="mobile-product-search"
        placeholder="enter name to search..."
        onChange={searchTermChangeHandler}
      />

      <Filter
        color="hsl(36, 93%, 68%)"
        strokeWidth="3"
        fill="hsl(36, 93%, 68%)"
        size="20"
        onClick={() => setShowFilter(true)}
      />
    </div>
  );
};

export default SearchFilter;
