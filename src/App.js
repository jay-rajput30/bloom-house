import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./style.css";
import MobileNavbar from "./components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "./components/Navbar/DesktopNavbar/DesktopNavbar";
import { useContext, useState } from "react";
import { Filter } from "react-feather";
import ProductsWrapper from "./pages/Products/ProductsWrapper";
import { productContext } from "./context/ProductProvider";
import MobileFilter from "./components/Filter/MobileFilter/MobileFilter";
import Login from "./pages/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState([]);
  const { dispatch } = useContext(productContext);

  //TODO: add custom hook for form input change handlers

  const wishlistBtnClickHandler = (item) => {
    if (!addedToWishlist.includes(item.id)) {
      setAddedToWishlist([...addedToWishlist, item.id]);
      dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    } else {
      const filteredaddedToWishlist = addedToWishlist.filter(
        (wishlistItem) => wishlistItem !== item.id
      );
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
      setAddedToWishlist(filteredaddedToWishlist);
    }
  };

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
        <Route
          path="/products"
          element={
            <ProductsWrapper
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
