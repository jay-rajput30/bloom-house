import { createContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { sortProductByPrice } from "../pages/Products/products.helper";

export const filterContext = createContext({
  searchTerm: "",
  selectedCategoryRadioBtn: "All",
});

const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryRadioBtn, setselectedCategoryRadioBtn] =
    useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState("High to Low");
  const [resetFilter, setResetFilter] = useState(false);

  //state change handlers for all states
  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const radioChangeHandler = (e) => {
    e.target.value;
    setselectedCategoryRadioBtn(e.target.value);
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
    setselectedCategoryRadioBtn("All");
  };

  return (
    <filterContext.Provider
      value={{
        searchTerm,
        searchTermChangeHandler,
        selectedCategoryRadioBtn,
        radioChangeHandler,
        selectedRating,
        selectedRatingChangeHandler,
        selectedPrice,
        priceChangeHandler,
        resetFilter,
        resetFilterClickHandler,
        setselectedCategoryRadioBtn,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
