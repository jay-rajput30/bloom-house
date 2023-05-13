import React from "react";
import "./index.css";
import { ShoppingCart, User } from "react-feather";
import { NavLink } from "react-router-dom";

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
  return (
    <nav className="desktop-navbar">
      <h2>BloomHouse</h2>
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
      <button className="logout-button">logout</button>
      <div className="icon-container">
        <ShoppingCart color="hsl(60, 100%, 100%)" strokeWidth="3" />
        <User color="hsl(60, 100%, 100%)" strokeWidth="3" />
      </div>
    </nav>
  );
}

export default DesktopNavbar;
