import { API_BASE_URL } from '../../config';
import { AsyncStorage } from 'react-native';


/* AUTH TOKEN ACTIONS NECESSARY FOR USERS TO LOGIN */

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
	type: SET_AUTH_TOKEN,
	authToken,
});

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
	type: CLEAR_AUTH,
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
	type: AUTH_REQUEST,
});

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
	type: AUTH_SUCCESS,
	currentUser,
});

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
	type: AUTH_ERROR,
	error,
});


// GET THE USER OBJECT
export const getCurrentUser = () => dispatch => {
  dispatch(authRequest());

  AsyncStorage.getItem('authToken')
    .then(authToken => fetch(`${API_BASE_URL}/users/username`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
      }
    })
  )
    .then(res => res.json())
    .then(user => dispatch(authSuccess(user)))
    .catch(err => {
      dispatch(authError(err));
    });
};