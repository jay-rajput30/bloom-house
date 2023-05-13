import React from "react";
import "./index.css";
import CategoriesCards from "../../components/Cards/CategoriesCard/CategoriesCards";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const shopBtnClickHandler = () => {
    navigate("/products");
  };
  return (
    <div className="homepage-wrapper">
      <section className="homepage-main">
        <h1>one stop shop for all your gardening needs</h1>
        <button className="homepage-main-button" onClick={shopBtnClickHandler}>
          shop now
        </button>
      </section>
      <section className="homepage-categories">
        <h2>what are you looking for?</h2>

        <div className="homepage-categories-wrapper">
          <CategoriesCards
            imgLink="https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb29yJTIwcGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            text="plants"
          />
          <CategoriesCards
            imgLink="https://images.unsplash.com/photo-1643824562770-f94d32874f72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYW50JTIwc2VlZCUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            text="seeds"
          />
          <CategoriesCards
            imgLink="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kb29yJTIwcGxhbnQlMjBwb3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            text="pots"
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
