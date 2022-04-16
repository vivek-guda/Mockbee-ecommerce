import "./Wishlist.css";
import "../Cart/Cart.css";
import WishlistCard from "../../components/Card/WishlistCard";
import { useWishlist } from "../../context/wishlist-context";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlistState, wishlistDispatch } = useWishlist();

  return (
    <>
      {wishlistState.quantity === 0 ? (
        <div className="cart-empty-msg">
          <p>Your Wishlist is empty</p>
          <Link className="shop-now-btn" to="/products">
            Shop now
          </Link>
        </div>
      ) : (
        <main className="cart-page">
          <div className="cart-main">
            {wishlistState.wishlistItems.map((item) => (
              <WishlistCard key={item.id} cardDetails={item} />
            ))}
          </div>
          <aside className="cart-sidebar">
            <div>
              <p className="cart-quantity">
                Items in Wishlist : {wishlistState.quantity}
              </p>
              <p className="cart-price">
                Total price : {wishlistState.totalPrice}
              </p>
              <button className="checkout-btn">Proceed to checkout</button>
            </div>
          </aside>
        </main>
      )}
    </>
  );
}

export default Wishlist;
