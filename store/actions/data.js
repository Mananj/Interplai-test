export const SET_DATA = 'SET_DATA';


export const fetchData = () => {
	return async (dispatch) => {
		//any async code you want!
		try {
			const response = await fetch('https://api.publicapis.org/entries');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			
			const resData = await response.json();
			// const loadedProducts = [];
			resData.entries.map((item) => (item.favorites = false));
			resData.entries.map((item, index) => (item.id = index + 1));
			console.log(resData.entries[0]);

			// for (const key in resData) {
			// 	loadedProducts.push()
			// }
			dispatch({
				type: SET_DATA,
				data: resData.entries,
				// userProducts: loadedProducts.filter(prod => prod.ownerId === userId)
			});
		} catch (err) {
			//send to custom analytics server
			throw err;
		}
	}
}