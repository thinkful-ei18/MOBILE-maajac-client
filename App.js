import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen';
import Map from './src/screens/MapScreen';
import Dashboard from './src/screens/DashboardScreen';

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
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  }
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
