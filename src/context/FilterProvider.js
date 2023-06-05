import { createContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const filterContext = createContext({
  searchTerm: "",
  selectedRadioBtn: "All",
});

const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [resetFilter, setResetFilter] = useState(false);

  //state change handlers for all states
  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const radioChangeHandler = (e) => {
    console.log(e.target.value);
    setSelectedRadioBtn(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setSelectedPrice(e.target.value);
  };

  const selectedRatingChangeHandler = (e) => {
    setSelectedRating(+e.target.value);
  };
  const resetFilterClickHandler = () => {
    setResetFilter(true);
    setSelectedPrice("");
    setSelectedRating(0);
    setSelectedRadioBtn("All");
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
        resetFilter,
        resetFilterClickHandler,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
