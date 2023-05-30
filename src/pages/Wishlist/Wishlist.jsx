import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductProvider";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { getUserWishlist } from "../../backend/controllers/wishlist.controller";
import { authContext } from "../../context/AuthProvider";
function Wishlist({ addedToWishlist, wishlistBtnClickHandler }) {
  const { loggedInUser } = useContext(authContext);
  const { wishlist, dispatch } = useContext(productContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, success } = await getUserWishlist(loggedInUser.user_id);
        if (success) {
          dispatch({ type: "LOAD_WISHLIST", payload: data.products });
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, [wishlist]);

  return (
    <div className="wishlist-wrapper">
      {wishlist?.length === 0 && (
        <h2>oops.. not items added to wishlist as yet</h2>
      )}
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
