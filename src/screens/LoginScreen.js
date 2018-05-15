import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import LoginFormNative from '../common/LoginForm';
import SignupForm from '../common/SignupForm';

import * as style from '../styles/reportFormStyles'

export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Login or Register',
      form: 'login'
    };
  }
  render() {
    return (
      <View>
        <Navbar
          header={this.state.header}
          goTo={() => this.props.navigation.navigate('Map')}
        />
        <LoginFormNative />
        <TouchableOpacity
          onPress={() =>
            this.setState({
              form: 'signup'
            })
          }
          style={style.button}>
          <Text>Login</Text>
        </TouchableOpacity>
        <SignupForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});
