export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_RANGE":
      return {
        ...state,
        filterByRange: action.payload,
      };
    case "SET_BRAND":
      return {
        ...state,
        filterByBrand: [...state.filterByBrand, action.payload],
      };
    case "UNSET_BRAND":
      return {
        ...state,
        filterByBrand: state.filterByBrand.filter(
          (brandName) => brandName !== action.payload
        ),
      };
    case "SET_CATEGORY":
      return {
        ...state,
        filterByCategory: [...state.filterByCategory, action.payload],
      };
    case "UNSET_CATEGORY":
      return {
        ...state,
        filterByCategory: state.filterByCategory.filter(
          (category) => category !== action.payload
        ),
      };
    case "PRICE_LOW_TO_HIGH":
      return {
        ...state,
        sortByPrice: "lowToHigh",
      };
    case "PRICE_HIGH_TO_LOW":
      return {
        ...state,
        sortByPrice: "highToLow",
      };
    case "4_STAR_AND_ABOVE":
      return {
        ...state,
        filterByRating: "4starAndAbove",
      };
    case "3_STAR_AND_ABOVE":
      return {
        ...state,
        filterByRating: "3starAndAbove",
      };
    case "BELOW_3_STAR":
      return {
        ...state,
        filterByRating: "below3star",
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        filterByRange: 10000,
        sortByPrice: "",
        filterByCategory: [],
        filterByBrand: [],
        filterByRating: "",
      };
    default:
      return state;
  }
};
