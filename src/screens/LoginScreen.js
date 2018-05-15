import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import LoginFormNative from '../common/LoginForm';
import SignupForm from '../common/SignupForm';

import * as style from '../styles/reportFormStyles';

export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Login',
      form: 'login',
      buttonText: 'Need to create an account?'
    };
  }
  render() {
    let form;
    if (this.state.form === 'login') {
      form = (
        <View style={style.containerLogin}>
          <LoginFormNative navigation={this.props.navigation} />
          <TouchableOpacity
            onPress={() =>
              this.setState({
                header: 'Signup',
                form: 'signup',
                buttonText: 'Already have an account?'
              })
            }
            style={{ marginLeft: 20 }}
          >
            <Text>{this.state.buttonText}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      form = (
        <View style={style.containerLogin}>
          <SignupForm />
          <TouchableOpacity
            onPress={() =>
              this.setState({
                header: 'Login',
                form: 'login',
                buttonText: 'Need to create an account?'
              })
            }
            style={{ marginLeft: 20 }}
          >
            <Text>{this.state.buttonText}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View>
        <Navbar
          header={this.state.header}
          goTo={() => this.props.navigation.navigate('Map')}
        />
        {form}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});
