import React from 'react';
import { View } from 'react-native';

import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';

import * as dashboardStyles from '../styles/dashboardStyles';


export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }
  render() {
    return (
      <View style={dashboardStyles.view}>
        <Navbar
          header={this.state.header}
          plus={() => this.add()}
          back={() => this.props.navigation.goBack()}
        />
        <UserProfile/>
      </View>
    );
  }
}
