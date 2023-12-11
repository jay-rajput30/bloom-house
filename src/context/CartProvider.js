import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../backend/db-connect";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { updateCart } from "../backend/controllers/cart.controller";
import { toast } from "react-toastify";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const { cartToggle, setCartToggle, loggedInUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();

  const cartAddBtnClickHandler = async (item, from) => {
    if (!loggedInUser.user_id) {
      navigate("/login", { state: from });
    } else {
      if (cartData?.find((cartItem) => cartItem.id === item.id)) {
        navigate("/cart");
      } else {
        const { success } = await updateCart(loggedInUser?.user_id, [
          ...cartData,
          {
            ...item,
            quantity: 1,
          },
        ]);
        if (success) {
          toast.success("added to cart", {
            position: toast.BOTTOM_CENTER,
            theme: "colored",
            autoClose: 1000,
          });
          setCartToggle((prev) => !prev);
        }
      }
    }
  };

  const fetchCartData = async () => {
    try {
      let { data: cart, error } = await supabase
        .from("cart")
        .select("id,products")
        .eq("user_id", loggedInUser?.user_id);

      if (!error) {
        setCartData(cart[0].products);
      }
    } catch (e) {
      console.error({ error: e });
    }
  };

  useEffect(() => {
    if (loggedInUser.user_id) {
      fetchCartData();
    } else {
      <Navigate path="/cart" state={{ from: location }} />;
    }
  }, [cartToggle]);

  return (
    <cartContext.Provider
      value={{
        cartData,
        setCartData,
        cartAddBtnClickHandler,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  const { cartData, setCartData, cartAddBtnClickHandler } =
    useContext(cartContext);
  return {
    cartData,
    setCartData,
    cartAddBtnClickHandler,
  };
};
export default CartProvider;
