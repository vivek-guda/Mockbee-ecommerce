import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishlistContext = createContext({});

const WishlistProvider = ({ children }) => {
  const wishlistInitial = {
    quantity: 0,
    totalPrice: 0,
    wishlistItems: [],
  };

  const [state, dispatch] = useReducer(wishlistReducer, wishlistInitial);

  return (
    <WishlistContext.Provider
      value={{ wishlistState: state, wishlistDispatch: dispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };
