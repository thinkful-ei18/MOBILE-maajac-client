import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Navbar = ({ header, goTo, back }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>{back ? '<' : null}</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{header}</Text>

      <TouchableOpacity onPress={goTo}>
        <Text style={styles.plus}>{goTo ? '>' : null}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: 35,
    paddingBottom: 30
  },
  text: {
    color: '#444247',
    fontSize: 32,
    fontFamily: 'Avenir-Heavy'
  },
  back: {
    color: '#444247',
    fontSize: 32,
    fontFamily: 'Avenir-Heavy',
    marginLeft: 15
  },
  plus: {
    color: '#444247',
    fontSize: 32,
    fontFamily: 'Avenir-Heavy',
    marginRight: 15
  }
});

export default Navbar;
