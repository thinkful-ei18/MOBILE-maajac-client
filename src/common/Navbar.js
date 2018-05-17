import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import * as styles from '../styles/navbarStyles';

const Navbar = ({ header, goTo, back, plus }) => {
  return (
    <View style={styles.container}>
      
      { back
      ? <TouchableOpacity onPress={back}>
        <Text style={styles.back}>{'<'}</Text>
      </TouchableOpacity>
      : null }

      { header
      ? <Text style={styles.header}>{header}</Text>
      : null }

      { goTo 
      ? <TouchableOpacity onPress={goTo}>
        <Text style={styles.goTo}>{'>'}</Text>
      </TouchableOpacity>
      : null }

      { plus  
      ? <TouchableOpacity onPress={plus}>
        <Text style={styles.plus}>{'+'}</Text>
      </TouchableOpacity>
      : null }

    </View>
  );
};

export default Navbar;
