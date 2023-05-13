import React, { useState } from "react";
import { Menu, ShoppingCart, User, X } from "react-feather";
import "./index.css";
import SideNav from "../../SideNav/SideNav";
function MobileNavbar() {
  const [sideNavActive, setSideNavActive] = useState(true);

  const sidenavBtnClickHandler = () => {
    setSideNavActive((prev) => !prev);
  };
  return (
    <nav className="mobile-navbar">
      {sideNavActive ? (
        <X
          color="hsl(36, 93%, 68%)"
          strokeWidth="3"
          onClick={sidenavBtnClickHandler}
        />
      ) : (
        <Menu
          color="hsl(36, 93%, 68%)"
          strokeWidth="3"
          onClick={sidenavBtnClickHandler}
        />
      )}
      <h2>BloomHouse</h2>
      <div className="icon-container">
        <ShoppingCart color="hsl(60, 100%, 100%)" strokeWidth="3" />
        <User color="hsl(60, 100%, 100%)" strokeWidth="3" />
      </div>
      {sideNavActive && <SideNav />}
    </nav>
  );
}

export default MobileNavbar;
