import { createContext, useState } from "react";

export const filterContext = createContext({
  searchTerm: "null",
  selectedRadioBtn: "All",
});

const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);

  //state change handlers for all states
  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const radioChangeHandler = (e) => {
    setSelectedRadioBtn(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setSelectedPrice(+e.target.value);
  };

  const selectedRatingChangeHandler = (e) => {
    console.log(+e.target.value);
    setSelectedRating(+e.target.value);
  };

  return (
    <filterContext.Provider
      value={{
        searchTerm,
        searchTermChangeHandler,
        selectedRadioBtn,
        radioChangeHandler,
        selectedRating,
        selectedRatingChangeHandler,
        selectedPrice,
        priceChangeHandler,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
