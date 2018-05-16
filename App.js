import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './navigation/store';
import Root from './src/Root';


// LOADS THE ENTIRE APP
export default class App extends Component {

  render() {
  
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
