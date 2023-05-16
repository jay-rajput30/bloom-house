import React, { useState } from "react";
import "./index.css";
import { X } from "react-feather";
import CategoriesFilter from "./CategoriesFilter/CategoriesFilter";

const MobileFilter = ({
  setShowFilter,
  selectedRadioBtn,
  radioChangeHandler,
}) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ selectedRadioBtn });
    setShowFilter(false);
  };
  return (
    <div className="mobile-filter-wrapper">
      <X className="close-filter" onClick={() => setShowFilter(false)} />
      <form onSubmit={formSubmitHandler} className="categories-form-wrapper">
        <CategoriesFilter
          selectedRadioBtn={selectedRadioBtn}
          radioChangeHandler={radioChangeHandler}
        />
        <div className="rating-filter">
          <label htmlFor="input-rating-filter">Rating: </label>
          <input
            type="range"
            min="0"
            max="4.5"
            id="input-rating-filter"
            step="0.5"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <button type="submit" className="apply">
          apply
        </button>
      </form>
    </div>
  );
};

export default MobileFilter;
