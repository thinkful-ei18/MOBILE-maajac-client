import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../src/screens/LoginScreen';
import MapScreen from '../src/screens/MapScreen';
import DashboardScreen from '../src/screens/DashboardScreen';
import { addListener } from './redux';


// SCREENS NECESSARY FOR ROUTING
export const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      header: null
    }
  }
});

// "TO HANDLE YOUR APP'S NAVIGATION STATE IN REDUX, YOU CAN PASS YOUR OWN NAVIGATION PROP TO A NAVIGATOR"
class App extends Component {
  render() {
    return (
      <RootStack navigation={{
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      }} />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});


const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;

/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
 - https://github.com/react-navigation/react-navigation/blob/master/examples/ReduxExample/src/navigators/AppNavigator.js
*/