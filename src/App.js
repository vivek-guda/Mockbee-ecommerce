import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import { useWishlist } from "./context/wishlist-context";
import { useCart } from "./context/cart-context";
import { useEffect } from "react";

export default function App() {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();

  useEffect(() => {
    let cartData = JSON.parse(localStorage.getItem("cartData"));
    cartDispatch({ type: "GET_DATA", payload: cartData });
    let wishlistData = JSON.parse(localStorage.getItem("wishlistData"));
    wishlistDispatch({ type: "GET_DATA", payload: wishlistData });
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlistData", JSON.stringify(wishlistState));
    localStorage.setItem("cartData", JSON.stringify(cartState));
  }, [wishlistState, cartState]);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}
