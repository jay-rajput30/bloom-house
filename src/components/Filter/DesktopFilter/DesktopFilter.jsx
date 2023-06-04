import React, { useContext } from "react";
import "./index.css";
import CategoriesFilter from "../MobileFilter/CategoriesFilter/CategoriesFilter";
import RatingFilter from "../MobileFilter/RatingFilter/RatingFilter";
import PriceFilter from "../MobileFilter/PriceFilter/PriceFilter";
import { filterContext } from "../../../context/FilterProvider";

const DesktopFilter = () => {
  const { resetFilterClickHandler } = useContext(filterContext);
  return (
    <section className="desktop-filter-wrapper">
      <fieldset>
        <legend>Filters</legend>
        <form onSubmit={(e) => e.preventDefault()}>
          <CategoriesFilter />
          <RatingFilter />
          <PriceFilter />
          <button onClick={resetFilterClickHandler}>reset</button>
        </form>
      </fieldset>
    </section>
  );
};

export default DesktopFilter;
