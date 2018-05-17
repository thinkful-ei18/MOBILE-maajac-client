import { AsyncStorage } from 'react-native';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import markerReducer from '../src/reducers/markerReducer';
import reportReducer from '../src/reducers/reportReducer';
import userAuthReducer from '../src/reducers/userAuthReducer';
import modalReducer from '../src/reducers/modalReducer';
import { defaultLocationReducer } from '../src/reducers/defaultLocationReducer';
import { setAuthToken, /* authSuccess */ } from '../src/actions/userActions';
import { RootStack } from './RootStack';
import { middleware } from './redux';


// CREATE A REDUCER THAT COMBINES ALL THE SCREENS
const navReducer = createNavigationReducer(RootStack);


// COMBINE ALL OF THE REDUCERS
const appReducer = combineReducers({
  nav: navReducer,
  form: formReducer,
  markers: markerReducer,
  report: reportReducer,
  auth: userAuthReducer,
  modal: modalReducer,
  defaultLocation: defaultLocationReducer
});


// USE THUNK MIDDLEWARE & MIDDLEWARE NECESSARY FOR REACT NAVIGATION
export const store = createStore(
  appReducer,
  applyMiddleware(middleware, thunk),
);


// CHECK FOR AN AUTH TOKEN IN ASYNC STORAGE WHEN THE PAGE IS REFRESHED
AsyncStorage.getItem('authToken')
  .then(authToken => {
    if (authToken !== null) {
      store.dispatch(setAuthToken(authToken))
    }
  })


/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
*/