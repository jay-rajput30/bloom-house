import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../context/ProductProvider";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { getUserWishlist } from "../../backend/controllers/wishlist.controller";
import { authContext } from "../../context/AuthProvider";
import { useWishlist } from "../../context/WishlistProvider";
function Wishlist() {
  const { loggedInUser, wishlistToggle } = useContext(authContext);
  const { wishlistData, setWishlistData } = useWishlist();
  const fetchData = async () => {
    try {
      const { success, data } = await getUserWishlist(loggedInUser?.user_id);
      if (success) {
        setWishlistData(data.products);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, [wishlistToggle]);
  console.log({ wishlistData });
  return (
    <div className="wishlist-wrapper">
      {wishlistData?.length === 0 && (
        <h2>oops.. not items added to wishlist as yet</h2>
      )}
      <ul>
        {wishlistData?.map((item) => {
          return (
            <li key={item?.id}>
              <ProductCard plant={item} showButton={true} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Wishlist;
