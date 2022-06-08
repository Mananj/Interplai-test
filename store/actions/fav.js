export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const addFav = (item) => {
	return { type: ADD_FAV, fav: item }
};

export const removeFav = (id) => {
	return { type: REMOVE_FAV, favid: id }
}