import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList,
	Button,
	SafeAreaView
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import * as favActions from '../store/actions/fav';

const DashboardScreen = props => {
	const data = useSelector(state => state.data.availableData);
	const favData = useSelector(state => state.fav.favItems);
	const [fav, setFav] = useState(0);
	const [favoriteItem, setFavoriteItem] = useState([]);
	// const [alreadyFav, setAlreadyFav] = useState([]);

	const dispatch = useDispatch();
	

	const addToFav = (item) => {
		// const alreadyFav = !!favoriteItem.filter(favo => favo.id === item.id)
		// // alreadyFav.push(favoriteItem.filter(favo => favo.id === item.id))
		// console.log(alreadyFav[0].id);
		// const val = alreadyFav[0].id;
		const alreadyFav = favoriteItem.filter(favo => favo.id === item.id)
		const unFav = favoriteItem.findIndex(unfav => unfav.id !== item.id)

		// alreadyFav.push(favoriteItem.filter(favo => favo.id === item.id))
		// console.log(alreadyFav);
		if (fav === 0) {
			setFav(fav + 1);
			favoriteItem.push(item)
			dispatch(favActions.addFav(item))
			data[item.id - 1].favorites = true
			alert('false')
		}
		else if(alreadyFav[0] === undefined) {
			setFav(fav + 1);
			favoriteItem.push(item)
			dispatch(favActions.addFav(item))
			data[item.id - 1].favorites = true
		}
		else if (alreadyFav[0].id > 0) {
			const favIndex = favoriteItem.findIndex(unfav => unfav.id === item.id)
			const favId = favoriteItem[favIndex].id
			setFav(fav - 1);
			favoriteItem.splice(favIndex, 1)
			dispatch(favActions.removeFav(item.id))
			data[item.id - 1].favorites = false
		}
		
	}
	console.log(data[0]);
	
	return (
		// <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
		// 	<Text>{data[0].Category}</Text>
		// </View>
		<SafeAreaView>
			<FlatList
				data={data}
				keyExtractor={item => item.id}
				renderItem={itemData => (
					<Card
						category={itemData.item.Category}
						description={itemData.item.Description}
					>
						<Button
							color='red'
							title={itemData.item.favorites ? 'Remove from Fav' : "Add to Fav"}
							onPress={() => {
								addToFav(itemData.item)
							}}
						/>
					</Card>
				)}
			/>
		</SafeAreaView>
	)
};

export default DashboardScreen;