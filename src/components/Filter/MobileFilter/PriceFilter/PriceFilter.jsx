import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../../context/FilterProvider";

const PriceFilter = () => {
  const { selectedPrice, priceChangeHandler } = useContext(filterContext);
  return (
    <div className="price-filter">
      <label htmlFor="input-price-filter">Price: </label>
      <div>
        <span>0</span>
        <input
          type="range"
          min="0"
          max="20"
          id="input-rating-filter"
          step="1"
          value={selectedPrice}
          onChange={priceChangeHandler}
        />
        <span>20</span>
      </div>
    </div>
  );
};

export default PriceFilter;
