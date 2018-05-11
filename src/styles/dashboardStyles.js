const React = require('react-native')
const { StyleSheet } = React

var dashboardStyles = StyleSheet.create({

  view: {
    flex: 1
  },
  // USER PROFILE
  userProfile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  userPicDiv:{

  },
  profilePic: {
    width: 50,
    height: 50

  },
   userInfoDiv: {
  },
  userUsername: {
    color: 'red'
  },

})


module.exports = dashboardStyles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/