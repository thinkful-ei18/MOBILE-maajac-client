import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './ReactotronConfig'; // for reactotron integration

import { store } from './navigation/store';
import AppWithNavigationState from './navigation/RootStack';


// LOADS THE ENTIRE APP
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
*/