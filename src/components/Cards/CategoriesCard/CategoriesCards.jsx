import React from "react";
import "./index.css";
function CategoriesCards({ imgLink, text }) {
  return (
    <figure className="category-card-wrapper">
      <img src={imgLink} alt={text} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

export default CategoriesCards;
