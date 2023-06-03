import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../backend/db-connect";
import { authContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateCart } from "../backend/controllers/cart.controller";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [cartToggle, setCartToggle] = useState(false);
  const { loggedInUser } = useContext(authContext);
  const navigate = useNavigate();
  const cartAddBtnClickHandler = async (item) => {
    if (!loggedInUser.user_id) {
      navigate("/login", { state: { from: location } });
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
          setCartToggle((prev) => !prev);
        }
      }
    }
  };

  const fetchCartData = async () => {
    try {
      console.log({ user: loggedInUser?.user_id });
      let { data: cart, error } = await supabase
        .from("cart")
        .select("id,products")
        .eq("user_id", loggedInUser?.user_id);

      if (!error) {
        console.log({ cartContextEffect: cart });
        setCartData(cart[0].products);
      }
    } catch (e) {
      console.error({ error: e });
    }
  };
  useEffect(() => {
    fetchCartData();
  }, [cartToggle]);
  return (
    <cartContext.Provider
      value={{
        cartData,
        setCartData,
        cartToggle,
        setCartToggle,
        cartAddBtnClickHandler,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const {
    cartData,
    setCartData,
    cartToggle,
    setCartToggle,
    cartAddBtnClickHandler,
  } = useContext(cartContext);
  return {
    cartData,
    setCartData,
    cartToggle,
    setCartToggle,
    cartAddBtnClickHandler,
  };
};
