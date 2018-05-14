'use strict';
/*global fetch:false*/
import React from 'react';
<<<<<<< HEAD
import { ScrollView, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

class MyForm extends React.Component {
	constructor(props) {
		super(props);
=======
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MyInput from '../common/Input';
import { login } from '../actions/userActions';
>>>>>>> c829621dbf3971af3b871d1f50b63464b5a2fefa

		this.state = {
			username: '',
			password: '',
		};
	}
	componentDidMount() {
		this.loadInitialState().done();
	}
	loadInitialState = async () => {
		const value = await AsyncStorage.getItem('user');
		if (value !== null) {
			//this.props.navigation.navigate('Map');
		}
	};
	login = () => {
		fetch('http://localhost:8080/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password,
			}),
		})
			.then(res => res.json())
			.then(res => {
				console.log(this.state.username, this.state.password);
				console.log(res);
				if (res.authToken) {
					AsyncStorage.setItem('authToken', res.authToken);
					console.log('got here');
					//this.props.navigation.navigate('Map');
				} else {
					console.log('Username or Password is incorrect or does not exist');
				}
			})
			.done();
	};

<<<<<<< HEAD
	render() {
		return (
			<ScrollView keyboardShouldPersistTaps={'handled'}>
				<Text>Username</Text>
				<TextInput name={'username'} onChangeText={username => this.setState({ username })} />
				<Text>Password</Text>
				<TextInput name={'password'} onChangeText={password => this.setState({ password })} secureTextEntry />
=======
function MyForm(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      {/* {this.props.loggedIn ? redirect : ''}  */}
      <Text>Username</Text>
      <Field
        name={'username'}
        component={MyInput}
      />
      <Text>Password</Text>
      <Field
        name={'password'}
        secureTextEntry={true}
        component={MyInput}
      />
>>>>>>> c829621dbf3971af3b871d1f50b63464b5a2fefa

				<TouchableOpacity onPress={this.login}>
					<Text>Submit!</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

<<<<<<< HEAD
export default MyForm;
=======
export const mapStateToProps = (state, props) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default reduxForm({
  form: 'signIn',
})(connect(mapStateToProps)(MyForm));
>>>>>>> c829621dbf3971af3b871d1f50b63464b5a2fefa
