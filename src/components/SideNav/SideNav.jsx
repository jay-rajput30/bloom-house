import React, { useContext } from "react";
import "./index.css";
import { activeStyles } from "../../utils/utils";
import { NavLink } from "react-router-dom";
import { authContext } from "../../context/AuthProvider";
import NavItems from "./NavItems";

// const NavItems = ({ setSideNavActive }) => {
//   return (
//     <ul>
//       <li>
//         <NavLink
//           to="/"
//           style={sideNavActiveStyles}
//           onClick={() => setSideNavActive(false)}
//         >
//           home
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/products"
//           style={sideNavActiveStyles}
//           onClick={() => setSideNavActive(false)}
//         >
//           products
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/cart"
//           style={sideNavActiveStyles}
//           onClick={() => setSideNavActive(false)}
//         >
//           cart
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/wishlist"
//           style={sideNavActiveStyles}
//           onClick={() => setSideNavActive(false)}
//         >
//           wishlist
//         </NavLink>
//       </li>
//     </ul>
//   );
// };
function SideNav({ setSideNavActive }) {
  const { loggedIn, logoutUser } = useContext(authContext);
  const SideNavLogoutClickHandler = () => {
    logoutUser();
    setSideNavActive(false);
  };
  return (
    <nav className="sidenav">
      <NavItems setSideNavActive={setSideNavActive} />
      {loggedIn && (
        <button className="logout-button" onClick={SideNavLogoutClickHandler}>
          logout
        </button>
      )}
    </nav>
  );
}

export default SideNav;
