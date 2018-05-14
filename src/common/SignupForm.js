'use strict';
/*global fetch:false*/
import React from 'react';
import { ScrollView, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: '',
			passwordConfirm: '',
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
		fetch('https://safer-server.herokuapp.com/api/users', {
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
				console.log(res); // Returns new user object
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
				<Text>Confirm Password</Text>
				<TextInput
					name={'passwordConfirm'}
					onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
					secureTextEntry
				/>
				<TouchableOpacity onPress={this.signup}>
					<Text>Submit</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

export default SignupForm;
