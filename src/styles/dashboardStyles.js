const React = require('react-native')
const { StyleSheet } = React

var dashboardStyles = StyleSheet.create({

  // DASHBOARD SCREEN
  view: {
    flex: 1
  },

  // USER PROFILE
  userProfileContainer: {
    flexDirection: 'row',
    // marginHorizontal: 'auto',
    // marginTop: 40,
    height: 150,
    minHeight: 120,
    // paddingBottom: 10,
    marginBottom: 15,
    backgroundColor: '#3b4141',
    // paddingVertical: 20,
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 10
    
  },
  logOutButton: {
    backgroundColor: '#7bc087',
    alignSelf: 'center',
    width: 200,
    height: 30,
    textAlign: 'center',
    color: 'white',
    paddingTop: 5
  },
  profilePic: {
    marginRight: 20,
    width: 80,
    height: 80

  },
  userInfoDiv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    paddingTop: 10
  },
  userUsername: {
    backgroundColor: '#2e3434',
    alignSelf: 'center',
    width:200,
    height: 35,
    textAlign: 'center',
    color: "#ffffff",
    justifyContent: 'center',
    // fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 10,
    // lineHeight: 18,
    // height: 20
  },

  // MARKER LIST
  list: {
    marginTop: -30,
  },
  flatlist: { 
    paddingBottom: 10,
    paddingTop: 15
  },
  card: {
    backgroundColor: '#9e9fa1',
  },
  markerDescription: { 
    marginBottom: 10,
    
  },
  info: { 
    marginBottom: 10, 
    fontStyle: 'italic', 
    color: '#ffffff' 
  },
  delete: { 
    borderRadius: 0, 
    marginLeft: 0, 
    marginRight: 0, 
    marginBottom: 0, 
    marginTop: 10
  }

})


module.exports = dashboardStyles

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/