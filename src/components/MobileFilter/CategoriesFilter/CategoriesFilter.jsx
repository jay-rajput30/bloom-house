import React, { useContext } from "react";
import "./index.css";
import { getCategories } from "../../../utils/utils";
import { useProducts } from "../../../hooks/useProducts";
import { filterContext } from "../../../context/FilterProvider";

const CategoriesFilter = () => {
  const { products } = useProducts();
  const { selectedRadioBtn, radioChangeHandler } = useContext(filterContext);
  const allCategories = getCategories(products);
  return (
    <div className="categories-wrapper">
      <p>Categories: </p>
      <div>
        {allCategories?.map((item, idx) => {
          return (
            <div key={idx} className="category-item">
              <input
                type="radio"
                name="categories-radio-group"
                id={item}
                value={item}
                checked={item === selectedRadioBtn}
                onChange={radioChangeHandler}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesFilter;
