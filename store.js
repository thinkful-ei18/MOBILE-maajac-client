import { AsyncStorage } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import markerReducer from './src/reducers/markerReducer';
import reportReducer from './src/reducers/reportReducer';
import userAuthReducer from './src/reducers/userAuthReducer';
import modalReducer from './src/reducers/modalReducer';
import { loadAuthToken } from './local-storage';
import { setAuthToken, authSuccess } from './src/actions/userActions';
import { defaultLocationReducer } from './src/reducers/defaultLocationReducer';

const store = createStore(
  combineReducers({
    form: formReducer,
    markers: markerReducer,
    report: reportReducer,
    auth: userAuthReducer,
    modal: modalReducer,
    defaultLocation: defaultLocationReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
const user = JSON.parse(AsyncStorage.getItem('user'));

if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(authSuccess(user));
}

export default store;
