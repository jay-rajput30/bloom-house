import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductProvider";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { getUserWishlist } from "../../backend/controllers/wishlist.controller";
import { authContext } from "../../context/AuthProvider";
import { useWishlist } from "../../context/WishlistProvider";
function Wishlist({ addedToWishlist, wishlistBtnClickHandler }) {
  const { loggedInUser } = useContext(authContext);
  const { wishlistData } = useWishlist();
  const [wishlistToggle, setWishlistToggle] = useState(false);
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
  }, [wishlistToggle]);

  return (
    <div className="wishlist-wrapper">
      {wishlistData?.length === 0 && (
        <h2>oops.. not items added to wishlist as yet</h2>
      )}
      <ul>
        {wishlistData?.map((item) => {
          return (
            <li key={item?.id}>
              <ProductCard
                plant={item}
                showButton={true}
                addedToWishlist={addedToWishlist}
                wishlistBtnClickHandler={wishlistBtnClickHandler}
                setWishlistToggle={setWishlistToggle}
                wishlistToggle={wishlistToggle}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Wishlist;
