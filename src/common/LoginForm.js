'use strict';
/*global fetch:false*/
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from 'react-native';
import { API_BASE_URL } from '../../config';
import { setAuthToken } from '../actions/userActions';

import * as styles from '../styles/login-signup-formStyles';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      // authToken: null
    };
  }
  componentDidMount() {
    this.loadInitialState().done();
  }
  loadInitialState = async () => {
    const value = await AsyncStorage.getItem('authToken');
    if (value !== null) {
      console.log(`async storage retrieved: ${value}`);
    }
  };

  login = () => {
    console.log('received dispatch')
    return fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.authToken) {
          console.log('got an auth token')
          AsyncStorage.setItem('authToken', res.authToken);
          this.props.navigation.dispatch(setAuthToken(res.authToken))
          // this.props.navigation.navigate('Map');
        } else {
          console.log(`Message: ${res.message}`);
        }
      })
      .done();
  };

  render() {
    return (
      <ScrollView
        // style={styles.container}
        keyboardShouldPersistTaps={'handled'}
      >
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          name={'username'}
          autoFocus={true}
          autoCorrect={false}
          onChangeText={username => this.setState({ username })}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          name={'password'}
          autoCorrect={false}
          maxLength={72}
          onChangeText={password => this.setState({ password })}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default MyForm;
