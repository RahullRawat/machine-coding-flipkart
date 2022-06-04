import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "./FilterReducer";

const FilterContext = createContext(null);

const initial = {
	sortBy: null,
	filterSize: null,
	gender: null,
	adidas: false,
	levis: false,
	puma: false,
};

const FilterProvider = ({ children }) => {
	const [filterState, filterDispatch] = useReducer(filterReducer, initial);
	return (
		<FilterContext.Provider value={{ filterState, filterDispatch }}>
			{children}
		</FilterContext.Provider>
	);
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
