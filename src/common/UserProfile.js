import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

// import { API_BASE_URL } from '../../config';

import * as dashboardStyles from '../styles/dashboardStyles';

class UserProfile extends Component {
  logout = () => {
    AsyncStorage.clear();
  };

  render() {
    return (
      <View style={dashboardStyles.userProfileContainer}>
        <View style={dashboardStyles.userInfoDiv}>
          <Image
            source={{ uri: this.props.profilePicture }}
            alt='profile-pic'
            style={dashboardStyles.profilePic}
          />

          <Text style={dashboardStyles.userUsername}>
            Welcome, {this.props.currentUser.username}
          </Text>
        </View>

        <View style={dashboardStyles.logOutButton}>
          <TouchableOpacity
            onPress={() => {
              this.logout;
              this.props.navigation.navigate('Login');
            }}
          >
            <Text style={dashboardStyles.logOutButton}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  // loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser ? state.auth.currentUser : '',
  // ppModal: state.modal.ppModal,
  profilePicture: state.auth.currentUser !== null ? state.auth.currentUser.profilePicture : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
});

export default connect(mapStateToProps)(UserProfile);

/*
Resources:
 - https://facebook.github.io/react-native/docs/image.html
*/
