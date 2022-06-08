import { SET_DATA } from "../actions/data";

const initialState = {
	availableData: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				availableData: action.data
			}
	}
	return state;
}