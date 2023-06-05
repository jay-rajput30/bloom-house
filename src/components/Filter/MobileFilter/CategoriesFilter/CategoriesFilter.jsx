import React, { useContext } from "react";
import "./index.css";

import { useProducts } from "../../../../hooks/useProducts";
import { filterContext } from "../../../../context/FilterProvider";
import { getCategories } from "../../../../utils/utils";

const CategoriesFilter = () => {
  const { products } = useProducts();
  const { selectedCategoryRadioBtn, radioChangeHandler } =
    useContext(filterContext);
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
                checked={item === selectedCategoryRadioBtn}
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
