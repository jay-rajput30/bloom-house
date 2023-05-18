import { useContext } from "react";
import { productContext } from "../context/ProductProvider";

export const useProducts = () => {
  const { products, status, dispatch } = useContext(productContext);
  return {
    products,
    status,
    error: status === "error" ? true : false,
    dispatch,
  };
};
