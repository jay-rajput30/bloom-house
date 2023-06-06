import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./style.css";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
import { useState } from "react";
import ProductsWrapper from "./pages/Products/ProductsWrapper";

import MobileFilter from "./components/Filter/MobileFilter/MobileFilter";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SignUp from "./pages/SignUp/SignUp";

import Checkout from "./pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="app-wrapper">
      <MobileNavbar />
      <DesktopNavbar />

      {showFilter && <MobileFilter setShowFilter={setShowFilter} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={<ProductsWrapper setShowFilter={setShowFilter} />}
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes>
              <Wishlist />
            </ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoutes>
              <Checkout />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
