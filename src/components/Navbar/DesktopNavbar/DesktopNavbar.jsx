import React, { useContext } from "react";
import "./index.css";
import { LogIn, LogOut, ShoppingCart, User } from "react-feather";
import { NavLink } from "react-router-dom";
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
  return (
    <nav className="desktop-navbar">
      <h2>BloomHouse</h2>
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
      </ul>
      {loggedIn ? (
        <button className="logout-button" onClick={logoutUser}>
          logout
        </button>
      ) : (
        <LogIn color="hsl(60, 100%, 100%)" strokeWidth="3" />
      )}
    </nav>
  );
}

export default DesktopNavbar;
