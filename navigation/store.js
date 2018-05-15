// import { AsyncStorage } from 'react-native';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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
import { loadAuthToken } from '../local-storage';


// CREATE A REDUCER THAT COMBINES ALL THE SCREENS
const navReducer = createNavigationReducer(RootStack);

// COMBINE ALL THE REDUCER FILES
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
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(appReducer, composeEnhancers(applyMiddleware(middleware, thunk)));
// export const store = createStore(
//   appReducer,
//   applyMiddleware(middleware, thunk),
// );


// PULL THE AUTH TOKEN & USER FROM ASYNC STORAGE TO PUT BACK IN STATE
const authToken = loadAuthToken();
// const user = JSON.parse(AsyncStorage.getItem('user'));


if (authToken) {
  store.dispatch(setAuthToken(authToken));
  // store.dispatch(authSuccess(user));
}


/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
 - https://levelup.gitconnected.com/supercharge-your-react-native-development-with-react-native-debugger-7633882683a9
 - https://github.com/jhen0409/react-native-debugger

 PASS Replace `open debugger-ui with Chrome` to `open ReactNative Debugger`.
*/