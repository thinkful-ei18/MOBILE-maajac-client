import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

import { clearAuth } from '../actions/userActions';

import * as dashboardStyles from '../styles/dashboardStyles';

class UserProfile extends Component {
  logout = () => {
    AsyncStorage.clear();
    this.props.dispatch(clearAuth());
  };

  render() {

    return (
      <View style={dashboardStyles.userProfile}>

        <View style={dashboardStyles.userInfoDiv}>
          <Text style={dashboardStyles.userUsername}>
            {this.props.currentUser.username}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.logout();
            this.props.navigation.navigate('Map');
          }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.auth.currentUser ? state.auth.currentUser : ''
});

export default connect(mapStateToProps)(UserProfile);
