/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import dataReducer from './store/reducers/data';
import favReducer from './store/reducers/fav';

import NavigationBox from './navigation/NavigationBox';

const rootReducer = combineReducers({
  data: dataReducer,
  fav: favReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  
  return (
      <Provider store={store}>
        <NavigationBox />
      </Provider>
    );
};

export default App;
