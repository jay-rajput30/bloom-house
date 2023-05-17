import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../context/FilterProvider";
const RatingFilter = () => {
  const { selectedRating, selectedRatingChangeHandler } =
    useContext(filterContext);
  return (
    <div className="rating-filter">
      <label htmlFor="input-rating-filter">Rating: </label>
      <div>
        <span>0</span>
        <input
          type="range"
          min="0"
          max="4.5"
          id="input-rating-filter"
          step="0.5"
          value={selectedRating}
          onChange={selectedRatingChangeHandler}
        />
        <span>4.5</span>
      </div>
    </div>
  );
};

export default RatingFilter;
