import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
import { Header } from './Header';
import Report from './Report';

const ModalForm = ({
  visible,
  close,
  placeholder,
  onChangeText,
  value,
  submit
}) => {
  return (
    <Modal
      style={styles.modal}
      animationType="slide"
      transparent={false}
      visible={visible}
    >
      <Report close={() => close()} submit={() => submit()} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    margin: 25
  },
  x: {
    fontSize: 36,
    color: 'red',
    fontFamily: 'Avenir-Medium',
    transform: [{ rotate: '45deg' }]
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir-Medium'
  },
  inputStyle: {
    width: '100%',
    height: 50,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: '#444247',
    fontSize: 20,
    fontFamily: 'Avenir-Medium'
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    backgroundColor: '#63D86F'
  }
});

export { ModalForm };
