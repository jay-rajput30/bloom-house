import React, { useContext } from "react";
import "./index.css";
import { LogIn, LogOut, Power, ShoppingCart, User } from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";
import { filterContext } from "../../../context/FilterProvider";
import { authContext } from "../../../context/AuthProvider";

const activeStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "300",
    color: isActive
      ? "var(--color-button-background)"
      : "var(--secondary-text)",
    textDecoration: "none",
  };
};

function DesktopNavbar() {
  const { logoutUser, loggedIn } = useContext(authContext);
  const { searchTerm, searchTermChangeHandler } = useContext(filterContext);
  const { setCartToggle } = useContext(authContext);
  const logoutBtnClickHandler = () => {
    setCartToggle((prev) => !prev);
    logoutUser();
  };
  const navigate = useNavigate();
  const heroTitleClickHandler = () => {
    navigate("/products");
  };
  const loginBtnClickHandler = () => {
    navigate("/login");
  };
  return (
    <nav className="desktop-navbar">
      <h2 onClick={heroTitleClickHandler}>BloomHouse</h2>
      <input
        type="text"
        value={searchTerm}
        className="product-search"
        placeholder="enter name to search..."
        onChange={searchTermChangeHandler}
      />
      <ul className="nav-items">
        <li>
          <NavLink to="/" style={activeStyles}>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={activeStyles}>
            products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" style={activeStyles}>
            cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" style={activeStyles}>
            wishlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={activeStyles}>
            profile
          </NavLink>
        </li>
      </ul>
      {loggedIn ? (
        <Power
          size={16}
          color="hsl(60, 100%, 100%)"
          strokeWidth="3"
          onClick={logoutBtnClickHandler}
        />
      ) : (
        <LogIn
          color="hsl(60, 100%, 100%)"
          strokeWidth="3"
          onClick={loginBtnClickHandler}
        />
      )}
    </nav>
  );
}

export default DesktopNavbar;
