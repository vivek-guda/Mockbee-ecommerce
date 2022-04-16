import "./Cart.css";
import { useCart } from "../../context/cart-context";
import CartCard from "../../components/Card/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();

  return (
    <>
      {cartState.quantity === 0 ? (
        <div className="cart-empty-msg">
          <p>Your Cart is empty</p>
          <Link className="shop-now-btn" to="/products">
            Shop now
          </Link>
        </div>
      ) : (
        <main className="cart-page">
          <div className="cart-main">
            {cartState.cartItems.map((item) => (
              <CartCard key={item.id} cardDetails={item} />
            ))}
          </div>
          <aside className="cart-sidebar">
            <div>
              <p className="cart-quantity">
                Items in Cart : {cartState.quantity}
              </p>
              <p className="cart-price">Total price : {cartState.totalPrice}</p>
              <button className="checkout-btn">Proceed to checkout</button>
            </div>
          </aside>
        </main>
      )}
    </>
  );
};

export default Cart;
