import { createContext, useEffect, useReducer, useState } from "react";
import { fakeFetch } from "../api";
import { productReducer } from "../reducers/productReducer";
import { supabase } from "../backend/db-connect";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: null,
    cart: [],
    wishlist: [],
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const getData = async () => {
      try {
        setStatus("loading");
        console.log(process.env);
        let { data: products, error } = await supabase
          .from("products")
          .select("*");
        console.log(products);
        const {
          status,
          message,
          data: { plants },
        } = await fakeFetch("https://api.plants.com");
        if (status === 200 && message === "success") {
          dispatch({ type: "UPDATE_PRODUCTS", payload: products });
          setStatus("success");
        }
      } catch (e) {
        setStatus("error");
        console.error("oops, something went wrong", e);
      }
    };
    getData();
  }, []);
  return (
    <productContext.Provider value={{ ...state, dispatch, status, setStatus }}>
      {children}
    </productContext.Provider>
  );
};
export default ProductProvider;
