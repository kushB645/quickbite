import { LOGO_URL } from "../utils/content";
import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  /* Get initials */
  const initials =
    user?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() ||
    user?.email?.[0]?.toUpperCase() ||
    "";

  return (
    <div className="header">
      {/* LOGO */}
      <div className="logo-section">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
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

        {/* PROFILE / LOGIN */}
        {user ? (
          <div className="profile-section">
            <div className="avatar">{initials}</div>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
