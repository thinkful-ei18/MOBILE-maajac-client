import React, { Component } from 'react';
import { Text, View } from 'react-native';

import UserProfile from '../common/UserProfile';

import * as dashboardStyles from '../styles/dashboardStyles';


export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <UserProfile/>
      </View>
    );
  }
}