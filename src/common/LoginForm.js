'use strict';
/*global fetch:false*/
import React from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { required, nonEmpty } from '../utils/validators';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Input from './Input';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
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
	login = () => {
		fetch('https://safer-server.herokuapp.com/api/auth/login', {
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
				if (res.authToken) {
					AsyncStorage.setItem('authToken', res.authToken);
					//this.props.navigation.navigate('Map');
				} else {
					console.log(`Message: ${res.message}`);
				}
			})
			.done();
	};

	render() {

		const { handleSubmit, pristine, submitting } = this.props;

		let errorMessage;
		if (this.props.error) {
			errorMessage = (
				<div className="form-error" aria-live="polite">
					{this.props.error}
				</div>
			);
		}

		console.log(this.props)
		return (
			< ScrollView keyboardShouldPersistTaps={'handled'} >
				{errorMessage}
				< Text > Username</Text >
				<Field
					name={'username'}
					// validate={[required, nonEmpty]}
					onChangeText={username => this.setState({ username })}
					component={Input}
				/>
				<Text>Password</Text>
				<Field
					name={'password'}
					// validate={[required, nonEmpty]}
					onChangeText={password => this.setState({ password })}
					component={Input}
					secureTextEntry
				/>
				<TouchableOpacity onPress={this.login}>
					<Text>Submit!</Text>
				</TouchableOpacity>
			</ScrollView >
		);
	}
}

export const mapStateToProps = (state, props) => ({
	loggedIn: state.auth.currentUser !== null,
});

export default reduxForm({
	form: 'login',
})(connect(mapStateToProps)(LoginForm));
