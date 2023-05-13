import React from "react";
import "./index.css";
function SideNav() {
  return (
    <nav className="sidenav">
      <ul>
        <li>home</li>
        <li>products</li>
        <li>cart</li>
        <li>wishlist</li>
      </ul>
      <button className="logout-button">logout</button>
    </nav>
  );
}

export default SideNav;
