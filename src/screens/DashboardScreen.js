import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  ScrollView /* AsyncStorage */
} from 'react-native';
import { connect } from 'react-redux';

// import RequiresLogin from '../common/Requires-Login';
import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';
import {
  getMarkersDashboard,
  deleteMarkerDashboard
} from '../actions/markerActions';
import { getCurrentUser } from '../actions/userActions';
import MarkerList from '../common/MarkerList';

import * as styles from '../styles/dashboardStyles';

class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }

  render() {
    return (
      <View style={styles.view}>
        <Navbar
          header={this.state.header}
          plus={() => this.add()}
          back={() => this.props.navigation.goBack()}
        />
        <UserProfile navigation={this.props.navigation} />
        <MarkerList />
      </View>
    );
  }
}

export default DashboardScreen;

/*
Resources:
 - https://facebook.github.io/react-native/docs/button.html
*/
