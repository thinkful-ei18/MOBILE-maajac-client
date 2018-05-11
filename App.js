import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import Dashboard from './src/screens/Dashboard';
import store from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
      {/* <View style={styles.container}> */}
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <Dashboard />
      {/* </View> */}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
