import React, { useContext } from "react";
import { productContext } from "../../context/ProductProvider";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
function Wishlist({ addedToWishlist, wishlistBtnClickHandler }) {
  const { wishlist } = useContext(productContext);

  return (
    <div className="wishlist-wrapper">
      <ul>
        {wishlist?.map((item) => {
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

export default Wishlist;
