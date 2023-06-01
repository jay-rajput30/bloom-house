import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./style.css";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
import { useContext, useState } from "react";
import ProductsWrapper from "./pages/Products/ProductsWrapper";
import { productContext } from "./context/ProductProvider";
import MobileFilter from "./components/Filter/MobileFilter/MobileFilter";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SignUp from "./pages/SignUp/SignUp";
import { updateWishList } from "./backend/controllers/wishlist.controller";
import { authContext } from "./context/AuthProvider";
import AddressInput from "./components/AddressInput/AddressInput";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { dispatch } = useContext(productContext);
  const { loggedInUser } = useContext(authContext);
  //TODO: add custom hook for form input change handlers

  const wishlistBtnClickHandler = async (item) => {
    if (!addedToWishlist.includes(item.id)) {
      const { success, data, error } = await updateWishList(
        [...addedToWishlist, item.id],
        loggedInUser?.user_id
      );
      setAddedToWishlist([...addedToWishlist, item.id]);
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    } else {
      const filteredaddedToWishlist = addedToWishlist.filter(
        (wishlistItem) => wishlistItem !== item.id
      );
      const { success, data, error } = await updateWishList(
        [...filteredaddedToWishlist],
        loggedInUser?.user_id
      );

      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
      setAddedToWishlist(filteredaddedToWishlist);
    }
  };

  return (
    <div className="app-wrapper">
      <MobileNavbar />
      <DesktopNavbar />

      {showFilter && <MobileFilter setShowFilter={setShowFilter} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <ProductsWrapper
              setShowFilter={setShowFilter}
              addedToWishlist={addedToWishlist}
              wishlistBtnClickHandler={wishlistBtnClickHandler}
            />
          }
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
              <Wishlist
                addedToWishlist={addedToWishlist}
                wishlistBtnClickHandler={wishlistBtnClickHandler}
              />
            </ProtectedRoutes>
          }
        />
        <Route path="/signup" element={<AddressInput />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
