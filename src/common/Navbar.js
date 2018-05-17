import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import * as styles from '../styles/navbarStyles';

const Navbar = ({ header, goTo, back, plus }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={back}>
        <Text style={styles.back}>{back ? '<' : null}</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{header}</Text>

      <TouchableOpacity onPress={goTo}>
        <Text style={styles.plus}>{goTo ? '>' : null}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={plus}>
        <Text style={styles.plus}>{plus ? '+' : null}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
