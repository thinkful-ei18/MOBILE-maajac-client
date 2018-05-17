const React = require('react-native');
const { StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#2e3434',
    justifyContent: 'space-between',
    height: 60
  },
  header: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center',
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 5
  },
  back: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 5
  },
  goTo: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    alignSelf:'flex-end',
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 5
  },
  plus: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    alignSelf:'flex-end',
    marginRight: 20,
    marginLeft: 20,
    paddingTop: 20,
    paddingBottom: 5
  }
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/