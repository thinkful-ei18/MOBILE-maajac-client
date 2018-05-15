'use strict';
/*global fetch:false*/
import React from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
<<<<<<< HEAD
import { API_BASE_URL } from '../config';
=======
import { required, nonEmpty } from '../utils/validators';
import { API_BASE_URL } from '../../config';
>>>>>>> dc445476f312d4e726e06db3488b5e9e7a7c94dd

import * as style from '../styles/login-signup-formStyles'

class MyForm extends React.Component {
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
		}
	};
	login = () => {
		return fetch(`${API_BASE_URL}/auth/login`, {
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
		return (
			<ScrollView
				// style={style.container}
				keyboardShouldPersistTaps={'handled'}>
				<Text style={style.label}>Username</Text>
				<TextInput
					style={style.input}
					name={'username'}
					autoFocus={true}
					autoCorrect={false}
					onChangeText={username => this.setState({ username })}
				/>
				<Text
					style={style.label}>Password</Text>
				<TextInput
					style={style.input}
					name={'password'}
					autoCorrect={false}
					maxLength={72}
					onChangeText={password => this.setState({ password })}
					secureTextEntry={true}
				/>
				<TouchableOpacity
					onPress={this.login}
					style={style.button}>
					<Text>Login</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default MyForm;
