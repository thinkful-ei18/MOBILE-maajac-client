import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MapScreen from '../src/screens/MapScreen';
import DashboardScreen from '../src/screens/DashboardScreen';


export default createBottomTabNavigator(
  {
    Map: MapScreen,
    Dashboard: DashboardScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        } else if (routeName === 'Dashboard') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! 
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#7bc087',
      inactiveTintColor: '#3b4141',
      activeBackgroundColor: '#2e3434',
      inactiveBackgroundColor: 'white'
    }
  }
);


/*
Resources: 
  - https://reactnavigation.org/docs/tab-based-navigation.html
  - https://oblador.github.io/react-native-vector-icons/
  - http://discuss.nativebase.io/t/where-to-get-the-list-of-icon-names-used-in-native-base/37/8
*/