import { useContext } from "react";
import { productContext } from "../context/ProductProvider";

export const useProducts = () => {
  const { productsData, status } = useContext(productContext);
  return {
    products: productsData,
    status,
    error: status === "error" ? true : false,
  };
};
