import React from "react";
import "./index.css";
import { getCategories } from "../../../utils/utils";
import { useProducts } from "../../../hooks/useProducts";

const CategoriesFilter = ({ selectedRadioBtn, radioChangeHandler }) => {
  const { products } = useProducts();
  const allCategories = getCategories(products);
  return (
    <div className="categories-wrapper">
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
  );
};

export default CategoriesFilter;
