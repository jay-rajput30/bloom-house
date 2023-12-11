import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../backend/db-connect";
import { updateWishList } from "../backend/controllers/wishlist.controller";
import { toast } from "react-toastify";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistData, setWishlistData] = useState([]);
  const { wishlistToggle, setWishlistToggle, loggedInUser } =
    useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const wishlistBtnClickHandler = async (item, from) => {
    if (!loggedInUser.user_id) {
      navigate("/login", { state: from });
      return;
    }
    let updatedWishlistData = [];
    if (wishlistData.some((wishlistItem) => wishlistItem.id === item.id)) {
      updatedWishlistData = wishlistData.filter(
        (wishlistItem) => wishlistItem.id !== item.id
      );
      toast.error("removed to wishlist", {
        position: toast.BOTTOM_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
    } else {
      updatedWishlistData = [...wishlistData, item];
      toast.success("Added to wishlist", {
        position: toast.BOTTOM_CENTER,
        theme: "colored",
        autoClose: 1000,
      });
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
      <Navigate to="login" state={{ from: location }} />;
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
