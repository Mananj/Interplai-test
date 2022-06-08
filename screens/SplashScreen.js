import React, { useCallback, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as dataActions from '../store/actions/data'

const SplashScreen = props => {

	const dispatch = useDispatch();
	const data = useSelector(state => state.data.availableData);

	const loadData = useCallback(async () => {
		try {
			await dispatch(dataActions.fetchData());
		} catch (err) {
			alert(err.message);
		}
	}, [dispatch]);
	
	useEffect(async () => {
		loadData().then(() => {
			alert('Ready');
			props.navigation.navigate('Dashboard');
		});
	}, [dispatch]);

	if (data) {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Text>{data.count}</Text>
			</View>
		);
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Text>Hello</Text>
		</View>
	)
	
};

export default SplashScreen;