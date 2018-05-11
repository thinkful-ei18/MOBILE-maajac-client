import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import store from './store';
import LoginScreen from './src/screens/LoginScreen';
import Map from './src/screens/MapScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: Map,
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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
