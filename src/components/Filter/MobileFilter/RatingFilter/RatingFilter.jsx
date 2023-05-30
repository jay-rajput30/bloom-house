import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../../context/FilterProvider";

const allRatings = [1, 2, 3, 4];

const RatingFilter = () => {
  const { selectedRating, selectedRatingChangeHandler } =
    useContext(filterContext);
  return (
    <div className="rating-filter-wrapper">
      <p>Rating: </p>
      <div>
        {allRatings.map((item, idx) => {
          return (
            <div className="rating-item" key={idx}>
              <input
                type="radio"
                name="rating-radio-group"
                id={item}
                value={item}
                checked={item === selectedRating}
                onChange={selectedRatingChangeHandler}
              />
              <label htmlFor={item}>{item}⭐</label>
            </div>
          );
        })}
      </div>
      {/* <label htmlFor="input-rating-filter">Rating: </label> */}
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default RatingFilter;
