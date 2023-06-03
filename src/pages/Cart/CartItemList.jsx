import React from "react";
import CartCard from "../../components/Cards/CartCard/CartCard";
import { useCart } from "../../context/CartProvider";

const CartItemList = ({ setCartToggle }) => {
  const { cartData } = useCart();
  return (
    <ul className="cart-items-wrapper">
      {cartData?.map((item) => {
        return (
          <li key={item.id}>
            <CartCard cartItem={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CartItemList;
