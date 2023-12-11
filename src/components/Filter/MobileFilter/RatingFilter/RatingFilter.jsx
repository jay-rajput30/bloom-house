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
      <input
        type="range"
        name="rating-radio-group"
        list="tickmarks"
        value={selectedRating}
        onChange={selectedRatingChangeHandler}
        min="1"
        max="5"
      />
      <datalist id="tickmarks">
        <option value="1" style={{ color: "red" }}>
          1
        </option>
        <option value="2" label="2" style={{ color: "red" }} />
        <option value="3" label="3" />
        <option value="4" label="4" />
        <option value="5" label="5" />
      </datalist>
      <div>
        <p>1+</p>
        <p>2+</p>
        <p>3+</p>
        <p>4+</p>
        <p>5+</p>
      </div>
      <div></div>
    </div>
  );
};

export default RatingFilter;
