import React, { useContext, useEffect, useState } from "react";

import Error from "../Error/Error";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import "./index.css";
import { useProducts } from "../../hooks/useProducts";
import { filterContext } from "../../context/FilterProvider";
import { productContext } from "../../context/ProductProvider";

import DesktopFilter from "../../components/Filter/DesktopFilter/DesktopFilter";
import { Filter, Loader } from "react-feather";
import SearchFilter from "./SearchFilter";
import Loading from "../../utils/Loading/Loading";
import { useLocation } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";

function Products({ products, setShowFilter }) {
  const { status, error } = useProducts();
  const location = useLocation();
  const { getFilteredItems } = useContext(authContext);
  const applyFilter = () => {
    setUpdatedProducts(getFilteredItems());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (error) {
    return <Error />;
  }
  if (status === "loading") {
    return <Loading />;
  }

  if (status === "success") {
    return (
      <div className="products-wrapper">
        <SearchFilter setShowFilter={setShowFilter} />
        <DesktopFilter applyFilter={applyFilter} />
        <ul>
          {products?.map((item) => {
            return (
              <li key={item?.id}>
                <ProductCard
                  plant={item}
                  showButton={true}
                  from={{ from: location }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
