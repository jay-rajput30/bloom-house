import React from "react";
import "./index.css";
import { activeStyles } from "../../utils/utils";
import { NavLink } from "react-router-dom";

const sideNavActiveStyles = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "300",
    color: isActive
      ? "var(--color-button-background)"
      : "var(--secondary-text)",
    textDecoration: "none",
  };
};

function SideNav({ setSideNavActive }) {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <NavLink
            to="/"
            style={sideNavActiveStyles}
            onClick={() => setSideNavActive(false)}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            style={sideNavActiveStyles}
            onClick={() => setSideNavActive(false)}
          >
            products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            style={sideNavActiveStyles}
            onClick={() => setSideNavActive(false)}
          >
            cart
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wishlist"
            style={sideNavActiveStyles}
            onClick={() => setSideNavActive(false)}
          >
            wishlist
          </NavLink>
        </li>
      </ul>
      <button className="logout-button">logout</button>
    </nav>
  );
}

export default SideNav;
