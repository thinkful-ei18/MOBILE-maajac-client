import { Constants } from 'expo';

const React = require('react-native');

const { StyleSheet } = React;

const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
  reportContainer: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // alignSelf: 'stretch',
    // color: 'red',
    // marginTop: 600
  },
  reportFormContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'stretch',
    color: 'blue'
  }
});

module.exports = styles;

/*
Resources:
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/
