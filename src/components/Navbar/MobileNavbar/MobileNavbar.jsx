import React, { useState } from "react";
import { Menu, ShoppingCart, User, X } from "react-feather";
import "./index.css";
import SideNav from "../../SideNav/SideNav";
function MobileNavbar() {
  const [sideNavActive, setSideNavActive] = useState(false);

  const sidenavBtnClickHandler = () => {
    setSideNavActive((prev) => !prev);
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
      strokeWidth="3"
      onClick={sidenavBtnClickHandler}
      style={{ cursor: "pointer" }}
      className="sidenav-icon"
    />
  );
  return (
    <nav className="mobile-navbar">
      {mobileSideNav}
      <h2>BloomHouse</h2>
      <div className="icon-container">
        <ShoppingCart color="hsl(60, 100%, 100%)" strokeWidth="3" />
        <User color="hsl(60, 100%, 100%)" strokeWidth="3" />
      </div>
      {sideNavActive && <SideNav setSideNavActive={setSideNavActive} />}
    </nav>
  );
}

export default MobileNavbar;
