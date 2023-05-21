import React, { useContext } from "react";
import { productContext } from "../../context/ProductProvider";
import CartCard from "../../components/Cards/CartCard/CartCard";

const CartItemList = () => {
  const { cart } = useContext(productContext);
  return (
    <ul className="cart-items-wrapper">
      {cart?.map((item) => {
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
