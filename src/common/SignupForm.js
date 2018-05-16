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

import * as style from '../styles/login-signup-formStyles';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    };
  }
  componentDidMount() {
    this.loadInitialState().done();
  }
  loadInitialState = async () => {
    const value = await AsyncStorage.getItem('authToken');
    if (value !== null) {
      console.log(`async storage retrieved: ${value}`);
      //this.props.navigation.navigate('Map');
    }
  };
  signup = () => {
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        if (res) {
          return res.json();
        } else {
          return console.error('Sign Up Failed');
        }
      })
      .then(() => {
        return fetch(`${API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        });
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.authToken) {
          this.props.navigation.dispatch(setAuthToken(res.authToken));
          AsyncStorage.setItem('authToken', res.authToken);
          // this.props.navigation.navigate('Map');
        } else {
          console.log(`Error: Sign Up Failed`);
        }
      })
      .done();
  };

  render() {
    return (
      <ScrollView
        // style={style.container}
        keyboardShouldPersistTaps={'handled'}
      >
        <Text style={style.label}>Username</Text>
        <TextInput
          style={style.input}
          name={'username'}
          autoCorrect={false}
          autoFocus={true}
          onChangeText={username => this.setState({ username })}
        />
        <Text style={style.label}>Password</Text>
        <TextInput
          style={style.input}
          name={'password'}
          autoCorrect={false}
          onChangeText={password => this.setState({ password })}
          maxLength={72}
          secureTextEntry={true}
        />
        <Text style={style.label}>Confirm Password</Text>
        <TextInput
          style={style.input}
          name={'passwordConfirm'}
          autoCorrect={false}
          maxLength={72}
          onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={this.signup} style={style.button}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default SignupForm;
