import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';
import MarkerList from '../common/MarkerList';
import { deleteMarkerDashboard } from '../actions/markerActions';

import * as styles from '../styles/dashboardStyles';


class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }

  onDelete(markerId) {
    this.props.dispatch(deleteMarkerDashboard({ markerId }));
  }

  render() {

    return (
      <View style={styles.view}>
        <Navbar
          // header={this.state.header}
        />
        <UserProfile navigation={this.props.navigation} />
        <MarkerList navigation={this.props.navigation} />
      </View>
    );
  }
}

export const mapStateToProps = state => ({
    markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
    currentUser: state.auth.currentUser ? state.auth.currentUser : '',
    authToken: state.auth.authToken
  });

export default connect(mapStateToProps)(DashboardScreen);

/*
Resources:
 - https://facebook.github.io/react-native/docs/button.html

*/
