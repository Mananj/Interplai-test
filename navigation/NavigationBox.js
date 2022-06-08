import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

// import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
// import CartScreen from '../screens/shop/CartScreen';
// import OrdersScreen from '../screens/shop/OrdersScreens';
// import UserProductsScreen from '../screens/user/UserProductScreen';
// import EditProductScreen from '../screens/user/EditProductScreen';
// import AuthScreen from '../screens/user/AuthScreen';
// import { useDispatch, useSelector } from 'react-redux';
// import StartupScreen from '../screens/StartupScreen';
// import * as authActions from '../store/actions/auth';
import SplashScreen from '../screens/SplashScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FavoriteItemScreen from '../screens/FavoriteItemScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationBox = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
						headerShown: false,
				}}
			>
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
				/>
				<Stack.Screen
					name="Dashboard"
					component={DrawerNavigator}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: true,
				drawerType: 'front',
				drawerActiveTintColor: 'rgb(255,127,127)',
				drawerInactiveTintColor: 'grey'
			}}
		>
				<Drawer.Screen
					name="Main"
					component={DashboardScreen}
				/>
				<Drawer.Screen
					name="Favorite"
					component={FavoriteItemScreen}
				/>
			</Drawer.Navigator>
	)
}

export default NavigationBox;