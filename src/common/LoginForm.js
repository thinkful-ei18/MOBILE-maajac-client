'use strict';
/*global fetch:false*/
import React from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

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

	render() {
		return (
			<ScrollView keyboardShouldPersistTaps={'handled'}>
				<Text>Username</Text>
				<TextInput name={'username'} onChangeText={username => this.setState({ username })} />
				<Text>Password</Text>
				<TextInput name={'password'} onChangeText={password => this.setState({ password })} secureTextEntry />

				<TouchableOpacity onPress={this.login}>
					<Text>Submit!</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default MyForm;
