import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers/filter-reducer";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const filterInitial = {
    filterByRange: 10000,
    sortByPrice: "",
    filterByCategory: [],
    filterByBrand: [],
    filterByRating: "",
  };

  const [state, dispatch] = useReducer(filterReducer, filterInitial);

  return (
    <FilterContext.Provider
      value={{ filterState: state, filterDispatch: dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
