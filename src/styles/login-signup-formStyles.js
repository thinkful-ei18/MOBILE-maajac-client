const React = require('react-native');

const { StyleSheet } = React;
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
  // LOGIN SCREEN
  containerLogin: {
    paddingVertical: 100,
    paddingLeft: 30
  },
  buttonText: {
    textAlign: 'center'
  },

  // LOGIN FORM
  container: {},
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7bc087',
    height: 30,
    width: 315,
    marginBottom: 12,
    paddingTop: 8
  },
  input: {
    width: Dimensions.get('window').width - 60,
    borderWidth: 1,
    borderColor: '#9e9fa1',
    paddingBottom: 12,
    fontSize: 16,
    marginBottom: 12
  },
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/
