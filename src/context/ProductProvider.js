import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const [status, setStatus] = useState("idle");

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
          setProductsData(plants);
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
    <productContext.Provider
      value={{ productsData, setProductsData, status, setStatus }}
    >
      {children}
    </productContext.Provider>
  );
};

export const useProducts = () => {
  const { productsData, status } = useContext(productContext);
  return {
    products: productsData,
    status,
    error: status === "error" ? true : false,
  };
};
export default ProductProvider;
