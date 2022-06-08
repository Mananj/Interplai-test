import React, { useState } from 'react';
import {
	View,
	Text,
	Button,
	FlatList,
	SafeAreaView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import * as favActions from '../store/actions/fav';

const FavoriteItemScreen = props => {
	const [fill, setFill] = useState(0);
	const fav = useSelector(state => state.fav.favItems)
	const data = useSelector(state => state.data.availableData);
	const dispatch = useDispatch();

	const removeFromFav = (item) => {
		dispatch(favActions.removeFav(item));
		data[item - 1].favorites = false
	}
	
	if (fav[0] === undefined) {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>Start Adding some favorites</Text>
			</View>
		)
	} else {
		return (
			<SafeAreaView>
				<FlatList
					data={fav}
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
									removeFromFav(itemData.item.id)
								}}
							/>
						</Card>
					)}
				/>
			</SafeAreaView>
		)
	}
	
}

export default FavoriteItemScreen;