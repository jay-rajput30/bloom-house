import { createContext, useState } from "react";

export const filterContext = createContext({
  searchTerm: "null",
  selectedRadioBtn: "All",
});

const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const [selectedRadioBtn, setSelectedRadioBtn] = useState("All");
  const radioChangeHandler = (e) => {
    setSelectedRadioBtn(e.target.value);
  };

  return (
    <filterContext.Provider
      value={{
        searchTerm,
        searchTermChangeHandler,
        selectedRadioBtn,
        radioChangeHandler,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;
