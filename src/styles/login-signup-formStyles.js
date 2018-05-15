const React = require('react-native');

const { StyleSheet } = React;
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    paddingTop: 80,
    marginLeft: 80,
    paddingHorizontal: 90,

  },
  label: {
    marginLeft: 20,
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    marginLeft: 20,
    alignItems: 'center',
    backgroundColor: '#7bc087',
    height: 30,
    width: 315,
    marginBottom: 12,
    paddingTop: 8
  },
  input: {
    marginLeft: 20,
    width: Dimensions.get('window').width - 60,
    borderWidth: 1,
    borderColor: '#9e9fa1',
    paddingBottom: 4,
    fontSize: 16,
    marginBottom: 12
  },
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/
