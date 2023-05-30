import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../../context/FilterProvider";

const allPrices = [5, 10, 15, 20, 25];
const PriceFilter = () => {
  const { selectedPrice, priceChangeHandler } = useContext(filterContext);
  return (
    <div className="price-filter-wrapper">
      <p>Price Range: </p>
      <div>
        {allPrices.map((item, idx) => {
          return (
            <div key={idx}>
              <input
                type="radio"
                name="price-radio-group"
                id={item}
                value={item}
                checked={item === selectedPrice}
                onChange={priceChangeHandler}
              />
              <label htmlFor={item}>{"<$" + item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceFilter;
