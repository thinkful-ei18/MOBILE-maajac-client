import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import { connect } from 'react-redux';

import * as dashboardStyles from '../styles/dashboardStyles';

export default class UserProfile extends Component {
  render() {

    return (
      <View style={dashboardStyles.userProfile}>

        <View style={dashboardStyles.userPicDiv}>
          <Image 
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            alt='profile-pic' 
            style={dashboardStyles.profilePic} 
          />
        </View>

        <View style={dashboardStyles.userInfoDiv}>
          <Text 
            style={dashboardStyles.userUsername} >
            stephen30
          </Text>
        </View>

      </View>
    );
  }
}

// export const mapStateToProps = (state, props) => ({
//   // loggedIn: state.auth.currentUser !== null,
//   currentUser: state.auth.currentUser ? state.auth.currentUser : '',
//   // ppModal: state.modal.ppModal,
//   profilePicture: state.auth.currentUser.profilePicture ? state.auth.currentUser.profilePicture : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
// });

// export default connect(mapStateToProps)(UserProfile);


/*
Resources:
 - https://facebook.github.io/react-native/docs/image.html
*/