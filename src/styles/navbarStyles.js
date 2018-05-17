const React = require('react-native');
const { StyleSheet } = React;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#2e3434',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center'
  },
  back: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    marginLeft: 15
  },
  plus: {
    color: '#ffffff',
    fontSize: 25,
    fontFamily: 'Avenir-Heavy',
    marginRight: 15
  }
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/