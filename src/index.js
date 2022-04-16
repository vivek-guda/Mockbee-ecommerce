import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { FilterProvider } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
