import React from "react";
import "./index.css";
import { ShoppingCart, User } from "react-feather";
function DesktopNavbar() {
  return (
    <nav className="desktop-navbar">
      <h2>BloomHouse</h2>
      <ul className="nav-items">
        <li>home</li>
        <li>products</li>
        <li>cart</li>
        <li>wishlist</li>
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
