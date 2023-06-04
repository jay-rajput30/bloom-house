import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../../context/FilterProvider";

const allPrices = ["High to Low", "Low to High"];
const PriceFilter = () => {
  const { selectedPrice, priceChangeHandler } = useContext(filterContext);
  return (
    <div className="price-filter-wrapper">
      <p>Sort (price): </p>
      <div>
        {allPrices.map((item, idx) => {
          return (
            <div key={idx} className="price-filter-wrapper-item">
              <input
                type="radio"
                name="price-radio-group"
                id={item}
                value={item}
                checked={item === selectedPrice}
                onChange={priceChangeHandler}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilter;
