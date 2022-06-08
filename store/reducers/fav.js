import { ADD_FAV, REMOVE_FAV } from "../actions/fav";

const initialState = {
	favItems: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAV:
			return {
				...state,
				favItems: [...state.favItems, action.fav]
			}
		case REMOVE_FAV: 
			return {
				...state,
				favItems: state.favItems.filter(fav => fav.id !== action.favid)
			}
	}
	return state;
}