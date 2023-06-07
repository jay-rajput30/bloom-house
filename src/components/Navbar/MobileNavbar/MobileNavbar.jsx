import React, { useState } from "react";
import { Menu, ShoppingBag, ShoppingCart, User, X } from "react-feather";
import "./index.css";
import SideNav from "../../SideNav/SideNav";
import { useNavigate } from "react-router-dom";
function MobileNavbar() {
  const [sideNavActive, setSideNavActive] = useState(false);
  const navigate = useNavigate();
  const sidenavBtnClickHandler = () => {
    setSideNavActive((prev) => !prev);
  };

  const cartIconClickHandler = () => {
    navigate("/cart");
  };

  const wishlistBtnClickHandler = () => {
    navigate("/wishlist");
  };

  const headerClickHandler = () => {
    navigate("/products");
  };

  const profileClickHandler = () => {
    navigate("/profile");
  };
  const mobileSideNav = sideNavActive ? (
    <X
      color="hsl(36, 93%, 68%)"
      strokeWidth="3"
      onClick={sidenavBtnClickHandler}
      style={{ cursor: "pointer" }}
      className="sidenav-icon"
    />
  ) : (
    <Menu
      color="hsl(36, 93%, 68%)"
      strokeWidth="2"
      onClick={sidenavBtnClickHandler}
      style={{ cursor: "pointer" }}
      className="sidenav-icon"
    />
  );
  return (
    <nav className="mobile-navbar">
      {mobileSideNav}
      <h2 onClick={headerClickHandler}>BloomHouse</h2>
      <div className="icon-container">
        <ShoppingBag
          color="hsl(60, 100%, 100%)"
          strokeWidth="2"
          onClick={wishlistBtnClickHandler}
        />
        <ShoppingCart
          color="hsl(60, 100%, 100%)"
          strokeWidth="2"
          onClick={cartIconClickHandler}
        />
        <User
          color="hsl(60, 100%, 100%)"
          strokeWidth="3"
          onClick={profileClickHandler}
        />
      </div>
      {sideNavActive && <SideNav setSideNavActive={setSideNavActive} />}
    </nav>
  );
}

export default MobileNavbar;
