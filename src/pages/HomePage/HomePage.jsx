import React from "react";
import MobileNavbar from "../../components/Navbar/MobileNavbar/MobileNavbar";
import DesktopNavbar from "../../components/Navbar/DesktopNavbar/DesktopNavbar";

function HomePage() {
  return (
    <div>
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
}

export default HomePage;
