import React from "react";
import "./index.css";
import CategoriesFilter from "../MobileFilter/CategoriesFilter/CategoriesFilter";
import RatingFilter from "../MobileFilter/RatingFilter/RatingFilter";
import PriceFilter from "../MobileFilter/PriceFilter/PriceFilter";
const DesktopFilter = () => {
  return (
    <section className="desktop-filter-wrapper">
      <fieldset>
        <legend>Filters</legend>
        <form onSubmit={(e) => e.preventDefault()}>
          <CategoriesFilter />
          <RatingFilter />
          <PriceFilter />
        </form>
      </fieldset>
    </section>
  );
};

export default DesktopFilter;
