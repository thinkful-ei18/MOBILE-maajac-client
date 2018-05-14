import { Constants } from 'expo';

const { StyleSheet } = React;
const React = require('react-native');
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  mapScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'stretch',

    marginTop: 600
  },
  marker: {
    height: 30,
    width: 30
  }
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/
