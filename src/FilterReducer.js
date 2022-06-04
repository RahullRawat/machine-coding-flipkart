export const filterReducer = (state, action) => {
	switch (action.type) {
		case "SORT":
			return {
				...state,
				sortBy: action.payload,
			};

		case "FILTER_BY_SIZE":
			return {
				...state,
				filterSize: action.payload,
			};

		case "GENDER":
			return {
				...state,
				gender: action.payload,
			};

		case "ADIDAS": {
			return {
				...state,
				adidas: !state.adidas,
			};
		}

		case "LEVIS": {
			return {
				...state,
				levis: !state.levis,
			};
		}

		case "PUMA": {
			return {
				...state,
				puma: !state.puma,
			};
		}

		case "RESET":
			return {
				...state,
				sortBy: null,
				filterSize: null,
				gender: null,
				adidas: false,
				levis: false,
				puma: false,
			};

		default:
			return state;
	}
};
