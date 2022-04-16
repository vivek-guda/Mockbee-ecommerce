import "./Footer.css";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="nav-logo">
        <Link className="nav-links" to="/">
          Fashion Store
        </Link>
      </h1>
      <div className="footer-section">
        <ul className="footer-ul">
          <li className="footer-list footer-list-heading">QUICK LINKS</li>
          <li className="footer-list">
            <Link className="footer-links" to="/products">
              Products
            </Link>
          </li>
          <li className="footer-list">
            <Link className="footer-links" to="/wishlist">
              Wishlist
            </Link>
          </li>
          <li className="footer-list">
            <Link className="footer-links" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <ul className="footer-ul">
          <li className="footer-list footer-list-heading">SOCIAL MEDIA</li>
          <li className="footer-list">
            <a className="footer-links" href="https://twitter.com/GVivek_51">
              Twitter
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-links" href="https://github.com/vivek-guda">
              Github
            </a>
          </li>
          <li className="footer-list">
            <a
              className="footer-links"
              href="https://www.linkedin.com/in/vivek-reddy-g/"
            >
              Linkedin
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-links" href="mailto:vivekreddy1000@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-copyright-section">
        Made with <span>&lt;/&gt;</span> by Vivek
      </p>
    </footer>
  );
};

export default Footer;
