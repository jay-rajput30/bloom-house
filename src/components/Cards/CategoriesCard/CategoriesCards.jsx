import React, { useContext } from "react";
import "./index.css";
import { filterContext } from "../../../context/FilterProvider";
import { useNavigate } from "react-router-dom";
function CategoriesCards({ imgLink, text }) {
  const navigate = useNavigate();
  const { setselectedCategoryRadioBtn } = useContext(filterContext);
  const categoryClickHandler = () => {
    // console.log({ setselectedCategoryRadioBtn, text });
    // setselectedCategoryRadioBtn("Plants");
    navigate("/products");
  };
  return (
    <figure className="category-card-wrapper" onClick={categoryClickHandler}>
      <img src={imgLink} alt={text} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

export default CategoriesCards;
