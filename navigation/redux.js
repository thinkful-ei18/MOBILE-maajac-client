import {
  createReactNavigationReduxMiddleware,
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';


export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

export const addListener = createReduxBoundAddListener("root");


/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
 - https://github.com/react-navigation/react-navigation/blob/master/examples/ReduxExample/src/utils/redux.js
*/