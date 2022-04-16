import { isItemInData } from "../utils/functions";

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_TO_WISHLIST":
      if (!isItemInData(action.cardDetails.id, state.wishlistItems)) {
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: state.totalPrice + parseInt(action.cardDetails.price),
          wishlistItems: [...state.wishlistItems, action.cardDetails],
        };
      }
      return state;

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - parseInt(action.cardDetails.price),
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== action.cardDetails.id
        ),
      };
    case "GET_DATA":
      return {
        ...state,
        quantity: action.payload.quantity,
        totalPrice: action.payload.totalPrice,
        wishlistItems: action.payload.wishlistItems,
      };
    default:
      return state;
  }
};
