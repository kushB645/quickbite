import { LOGO_URL } from "../utils/content";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="header">
      {/* LEFT SIDE LOGO */}

      <div className="logo-section">
        <Link to="/">
          <img className="logo" src={LOGO_URL} />
        </Link>
      </div>

      {/* NAVIGATION */}

      <div className="nav-items">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-link">
          About us
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact us
        </NavLink>

        {/* CART */}

        <Link className="cart-icon" to="/cart">
          🛒
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>

        {/* LOGIN BUTTON */}

        <NavLink to="/login" className="nav-link">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
