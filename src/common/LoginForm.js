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
	//Async function checks to see if an authtoken exists in the async storage
	//if there is anything in the function will render.
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
				console.log(res);
				if (res.authToken) {
					AsyncStorage.setItem('authToken', res.authToken);
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
