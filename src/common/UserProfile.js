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
import { clearAuth } from '../actions/userActions';

import * as dashboardStyles from '../styles/dashboardStyles';

class UserProfile extends Component {
  logout = () => {
    console.log('logging OUT!')
    AsyncStorage.clear();
    this.props.dispatch(clearAuth());
  };

  render() {
    return (
      <View style={dashboardStyles.userProfile}>
        {/* <View style={dashboardStyles.userPicDiv}>
          <Image 
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            alt='profile-pic' 
            style={dashboardStyles.profilePic} 
          />
        </View> */}

        <View style={dashboardStyles.userInfoDiv}>
          <Text style={dashboardStyles.userUsername}>
            {this.props.currentUser.username}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.logout();
            this.props.navigation.navigate('Login');
          }}
        >
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  // loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser ? state.auth.currentUser : ''
  // ppModal: state.modal.ppModal,
  // profilePicture: state.auth.currentUser.profilePicture ? state.auth.currentUser.profilePicture : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
});

export default connect(mapStateToProps)(UserProfile);

/*
Resources:
 - https://facebook.github.io/react-native/docs/image.html
*/
