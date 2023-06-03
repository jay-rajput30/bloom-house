import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";
import { updateWishList } from "../backend/controllers/wishlist.controller";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const { wishlistToggle, setWishlistToggle, loggedInUser } =
    useContext(authContext);
  const navigate = useNavigate();

  const wishlistBtnClickHandler = async (item) => {
    let updatedWishlistData = [];
    if (!wishlistData.includes(item.id)) {
      updatedWishlistData = [...wishlistData, item.id];
    } else {
      updatedWishlistData = wishlistData.filter(
        (wishlistItem) => wishlistItem !== item.id
      );
    }
    const { success } = await updateWishList(
      updatedWishlistData,
      loggedInUser?.user_id
    );
    if (success) {
      setWishlistToggle((prev) => !prev);
    }
  };

  const fetchWishlist = async () => {
    try {
      let { data: wishlist, error } = await supabase
        .from("wishlist")
        .select("id,products")
        .eq("user_id", loggedInUser?.user_id);

      if (!error) {
        setWishlistData(wishlist[0].products);
      }
    } catch (e) {
      console.error({ error: e });
    }
  };

  useEffect(() => {
    if (!loggedInUser.user_id) {
      navigate("/login");
    } else {
      fetchWishlist();
    }
  }, [wishlistToggle]);

  return (
    <wishlistContext.Provider
      value={{ wishlistData, setWishlistData, wishlistBtnClickHandler }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const { wishlistData, setWishlistData, wishlistBtnClickHandler, success } =
    useContext(wishlistContext);

  return { wishlistData, setWishlistData, wishlistBtnClickHandler, success };
};
export default WishlistProvider;
