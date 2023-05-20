import React, { useContext, useState } from "react";

import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { useProducts } from "../../hooks/useProducts";
import { filterContext } from "../../context/FilterProvider";
import { productContext } from "../../context/ProductProvider";
import MobileFilter from "../../components/MobileFilter/MobileFilter";

function Products({ products, addedToWishlist, wishlistBtnClickHandler }) {
  const { status, error, dispatch } = useProducts();
  const { wishlist } = useContext(productContext);
  // const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { searchTerm, searchTermChangeHandler } = useContext(filterContext);

  // const wishlistBtnClickHandler = (item) => {
  //   if (!addedToWishlist.includes(item.id)) {
  //     setAddedToWishlist([...addedToWishlist, item.id]);
  //     dispatch({ type: "ADD_TO_WISHLIST", payload: item });
  //   } else {
  //     const filteredaddedToWishlist = addedToWishlist.filter(
  //       (wishlistItem) => wishlistItem !== item.id
  //     );
  //     dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
  //     setAddedToWishlist(filteredaddedToWishlist);
  //   }
  // };

  if (error) {
    return <Error />;
  }
  if (status === "loading") {
    return <p>loading data. Please wait...</p>;
  }
  if (status === "success") {
    return (
      <div className="products-wrapper">
        <input
          type="text"
          value={searchTerm}
          className="mobile-product-search"
          placeholder="enter name to search..."
          onChange={searchTermChangeHandler}
        />
        <ul>
          {products?.map((item) => {
            return (
              <li key={item?.id}>
                <ProductCard
                  plant={item}
                  showButton={true}
                  addedToWishlist={addedToWishlist}
                  wishlistBtnClickHandler={wishlistBtnClickHandler}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
