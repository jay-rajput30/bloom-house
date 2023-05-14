import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./style.css";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
import { useState } from "react";

export const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log({ searchTerm });
  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="app-wrapper">
      <MobileNavbar />
      <DesktopNavbar
        searchTerm={searchTerm}
        inputChangeHandler={inputChangeHandler}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <Products
              searchTerm={searchTerm}
              inputChangeHandler={inputChangeHandler}
            />
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};
