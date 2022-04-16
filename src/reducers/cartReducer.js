import { isItemInData } from "../utils/functions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!isItemInData(action.cardDetails.id, state.cartItems)) {
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: state.totalPrice + parseInt(action.cardDetails.price),
          cartItems: [...state.cartItems, action.cardDetails],
        };
      }
      return state;

    case "REMOVE_FROM_CART":
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - parseInt(action.cardDetails.price),
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.cardDetails.id
        ),
      };
    case "GET_DATA":
      return {
        ...state,
        quantity: action.payload.quantity,
        totalPrice: action.payload.totalPrice,
        cartItems: action.payload.cartItems,
      };
    default:
      return state;
  }
};
