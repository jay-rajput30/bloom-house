import { createContext, useEffect, useReducer, useState } from "react";
import { fakeFetch } from "../api";
import { productReducer } from "../reducers/productReducer";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: null,
    cart: [],
    wishlist: [],
  });
  // const [productsData, setProductsData] = useState(null);
  const [status, setStatus] = useState("idle");
  console.log(state.wishlist);
  useEffect(() => {
    const getData = async () => {
      try {
        setStatus("loading");
        const {
          status,
          message,
          data: { plants },
        } = await fakeFetch("https://api.plants.com");
        if (status === 200 && message === "success") {
          dispatch({ type: "UPDATE_PRODUCTS", payload: plants });
          setStatus("success");
        }
      } catch (e) {
        setStatus("error");
        console.error("oops, something went wrong");
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
