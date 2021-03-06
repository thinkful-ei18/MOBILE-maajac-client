import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Navbar from '../common/Navbar';
import LoginFormNative from '../common/LoginForm';
import SignupForm from '../common/SignupForm';

import * as styles from '../styles/login-signup-formStyles';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'safeR',
      form: 'login',
      buttonText: 'Need to create an account?'
    };
  }

  render() {
    let form;
    if (this.state.form === 'login') {
      form = (
        <View style={styles.containerLogin}>
          <LoginFormNative navigation={this.props.navigation} />
          <TouchableOpacity
            onPress={() =>
              this.setState({
                form: 'signup',
                buttonText: 'Already have an account?'
              })
            }
          >
            <Text style={styles.buttonText}>
              {this.state.buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      form = (
        <View style={styles.containerLogin}>
          <SignupForm navigation={this.props.navigation} />
          <TouchableOpacity
            onPress={() =>
              this.setState({
                form: 'login',
                buttonText: 'Need to create an account?'
              })
            }
          >
            <Text style={styles.buttonText}>
              {this.state.buttonText}
            </Text>
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
