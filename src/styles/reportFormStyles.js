const React = require('react-native');

const { StyleSheet } = React;
const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
  reportFormContainer: {
    flex: 1,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    // alignSelf: 'stretch',
    // marginTop: 100,
    // marginLeft: 20,
    paddingTop: 100,
    paddingHorizontal: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#7bc087',
    height: 30,
    width: 315,
    marginBottom: 12,
    paddingTop: 8
  },
  buttonWarning: {
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 30,
    width: 150,
    marginBottom: 12,
    paddingTop: 8,
    marginRight: 10
  },
  buttonCancel: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 30,
    width: 150,
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
 - https://github.com/vhpoet/react-native-styling-cheat-sheet#text
 - https://coolors.co/042a2b-5eb1bf-54f2f2-f4e04d-ffffff
*/
