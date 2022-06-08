import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

const Card = props => {
	return (
		<View style={{ ...styles.card, ...props.style }}>
			<Text>Category: {props.category}</Text>
			<Text>Description: {props.description}</Text>
			<View style={styles.actions}>
				{props.children}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: 'white',
		margin: 20,
		paddingHorizontal: 10,
		paddingTop: 3
	}
});

export default Card;