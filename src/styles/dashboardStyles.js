const React = require('react-native')
const { StyleSheet } = React

var dashboardStyles = StyleSheet.create({

  // DASHBOARD SCREEN
  view: {
    flex: 1
  },

  // USER PROFILE
  userProfileContainer: {
    marginTop: 40,
    height: 90,
    minHeight: 90,
    // paddingBottom: 10,
    marginBottom: 15
  },
  logOutButton: {
    backgroundColor: '#f40331',
    alignSelf: 'center',
    width: 120,
    height: 30,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5
  },
  profilePic: {
    marginRight: 20,
    width: 50,
    height: 50

  },
  userInfoDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 40
  },
  userUsername: {
    fontSize: 18
  }

})


module.exports = dashboardStyles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/