import React, { useState } from "react";
import "./index.css";
import { X } from "react-feather";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
const MobileFilter = ({ setShowFilter }) => {
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
        <button type="submit" className="apply">
          apply
        </button>
      </form>
    </div>
  );
};

export default MobileFilter;
