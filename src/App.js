import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./style.css";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
import { useContext, useState } from "react";
import { Filter } from "react-feather";
import MobileFilter from "./components/MobileFilter/MobileFilter";

import ProductsWrapper from "./pages/Products/ProductsWrapper";

export const App = () => {
  const [showFilter, setShowFilter] = useState(false);

  //TODO: add custom hook for form input change handlers

  return (
    <div className="app-wrapper">
      <MobileNavbar />
      <DesktopNavbar />
      {!showFilter && (
        <div className="filter-button">
          <Filter
            color="hsl(36, 93%, 68%)"
            strokeWidth="3"
            fill="hsl(36, 93%, 68%)"
            size="40"
            onClick={() => setShowFilter(true)}
          />
        </div>
      )}
      {showFilter && <MobileFilter setShowFilter={setShowFilter} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsWrapper />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
