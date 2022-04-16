import "./ProductCard.css";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

function CartCard({ cardDetails }) {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  return (
    <div className="product-card">
      <img
        className="card-img"
        loading="lazy"
        src={cardDetails.imgUrl}
        alt=""
      />
      <div className="product-card-body">
        <h3 className="product-brand">{cardDetails.brand}</h3>
        <p className="product-description">{cardDetails.description}</p>
        <p>
          <span className="product-price">Rs. {cardDetails.price}</span>{" "}
          <span className="text-strike-through">
            Rs.{cardDetails.sellingPrice}
          </span>{" "}
          <span className="product-discount">({cardDetails.discount})</span>
        </p>

        <button
          className="secondary-btn"
          onClick={() => {
            cartDispatch({ type: "REMOVE_FROM_CART", cardDetails });
          }}
        >
          Remove from Cart
        </button>
        <button
          className="primary-btn"
          onClick={() => {
            wishlistDispatch({ type: "SAVE_TO_WISHLIST", cardDetails });
          }}
        >
          Save To Wishlist
        </button>
      </div>
    </div>
  );
}

export default CartCard;
