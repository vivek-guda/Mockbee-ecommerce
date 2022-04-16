import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartInitial = {
    quantity: 0,
    totalPrice: 0,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(cartReducer, cartInitial);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
