import React, { useContext, useState } from "react";
import "./index.css";
import { X } from "react-feather";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import { filterContext } from "../../../context/FilterProvider";
const MobileFilter = ({ setShowFilter }) => {
  const { resetFilterClickHandler } = useContext(filterContext);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setShowFilter(false);
  };
  return (
    <div className="mobile-filter-wrapper">
      <X className="close-filter" onClick={() => setShowFilter(false)} />

      <form onSubmit={formSubmitHandler} className="mobile-form-wrapper">
        <CategoriesFilter />
        <RatingFilter />
        <PriceFilter />
        <div className="mobile-form-buttons">
          <button type="submit" className="apply">
            apply
          </button>
          <button onClick={resetFilterClickHandler}>reset</button>
        </div>
      </form>
    </div>
  );
};

export default MobileFilter;
