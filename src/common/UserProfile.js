import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native';
import { connect } from 'react-redux';

import { clearAuth } from '../actions/userActions';

import * as styles from '../styles/dashboardStyles';

class UserProfile extends Component {
  logout = () => {
    AsyncStorage.clear();
    this.props.dispatch(clearAuth());
  };

  render() {
    console.log('PROPS:', this.props);

    return (
      <View style={styles.userProfileContainer}>

        <View style={styles.userInfoDiv}>
          <Image
            source={{ uri: this.props.profilePicture }}
            alt='profile-pic'
            style={styles.profilePic}
          />
        </View>

        <View>
          <Text style={styles.userUsername}>
            Welcome, {this.props.currentUser.username}
          </Text>

          <TouchableOpacity
            onPress={() => {
              this.logout();
              this.props.navigation.navigate('Map');
            }}
            style={styles.logOutButton}
          >
          <Text style={styles.logOutButton}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.auth.currentUser ? state.auth.currentUser : '',
  profilePicture: state.auth.currentUser !== null ? state.auth.currentUser.profilePicture : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
});

export default connect(mapStateToProps)(UserProfile);
