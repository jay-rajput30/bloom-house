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

const NavItems = ({ setSideNavActive }) => {
  return (
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
  );
};

export default NavItems;
