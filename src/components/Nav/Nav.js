import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";

function Nav() {
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  return (
    <nav className="nav">
      <div className="nav-section nav-header">
        <h1 className="nav-logo">
          <Link className="nav-links" to="/">
            Fashion Store
          </Link>
        </h1>
        <ul className="nav-ul">
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active-nav-link" : "nav-links"
              }
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active-nav-link" : "nav-links"
              }
              to="/products"
            >
              PRODUCTS
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-section nav-search">
        <FontAwesomeIcon
          className="nav-icons search-icon"
          icon={faMagnifyingGlass}
        />
        <input type="text" placeholder="Search for products, brands and more" />
      </div>
      <div className="nav-section">
        <ul className="nav-ul">
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active-nav-link" : "nav-links"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-list">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active-nav-link" : "nav-links"
              }
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
          <li className="nav-list">
            <Link className="nav-links" title="wishlist" to="/wishlist">
              <FontAwesomeIcon
                className="nav-icons wishlist-icon"
                icon={faHeart}
              />
              {wishlistState.quantity !== 0 && (
                <div className="number-badge">{wishlistState.quantity}</div>
              )}
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-links" title="cart" to="/cart">
              <FontAwesomeIcon
                className="nav-icons cart-icon"
                icon={faCartShopping}
              />
              {cartState.quantity !== 0 && (
                <div className="number-badge">{cartState.quantity}</div>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
