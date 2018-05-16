import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View, AsyncStorage, TouchableOpacity, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newMarker, getMarkers } from '../actions/markerActions';
import DatePicker from 'react-native-datepicker';

import Input from './Input';

import * as style from '../styles/reportFormStyles';

class reportForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			incidentType: '',
			date: '',
			time: '',
			description: '',
		};
	}

	handleLocationError(error) {
		this.setState({ locationError: error });
	}

	userAuth = async () => {
		let authToken = await AsyncStorage.getItem('authToken');
	};

	submit() {
		return AsyncStorage.getItem('authToken')
			.then(authToken =>
				fetch('https://safer-server.herokuapp.com/api/new/marker', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
						Authorization: `Bearer ${authToken}`,
					},
					body: JSON.stringify({
						incidentType: this.state.incidentType,
						location: this.props.location,
						date: this.state.date,
						description: this.state.description,
						time: this.state.time,
					}),
				})
			)
			.then(res => res.json());
	}

	render() {
		return (
			<ScrollView style={style.reportFormContainer}>
				<Text style={style.label}>Incident Type</Text>
				<Picker
					selectedValue={this.state.incidentType}
					onValueChange={itemValue => this.setState({ incidentType: itemValue })}
				>
					<Picker.Item label="Theft" value="Theft" />
					<Picker.Item label="Crime" value="Crime" />
					<Picker.Item label="Accident" value="Accident" />
					<Picker.Item label="Road Construction" value="Road-Construction" />
					<Picker.Item label="Other" value="Other" />
				</Picker>
				<Text style={style.label}>Date</Text>
				<DatePicker
					style={{ width: 200 }}
					date={this.state.date}
					mode="date"
					placeholder="select date"
					format="MM-DD-YYYY"
					minDate="2016-05-01"
					maxDate="2016-06-01"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0,
						},
						dateInput: {
							marginLeft: 36,
						},
						// ... You can check the source to find the other keys.
					}}
					onDateChange={date => {
						this.setState({ date: date });
					}}
				/>
				<Text style={style.label}>Time</Text>
				<DatePicker
					style={{ width: 200 }}
					date={this.state.time}
					mode="time"
					placeholder="select time"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateIcon: {
							position: 'absolute',
							left: 0,
							top: 4,
							marginLeft: 0,
						},
						dateInput: {
							marginLeft: 36,
						},
						// ... You can check the source to find the other keys.
					}}
					onDateChange={date => {
						this.setState({ time: date });
					}}
				/>
				<Text style={style.label}>Description of Incident</Text>
				<TextInput
					style={style.input}
					value={this.state.description}
					multiline={true}
					onChangeText={value =>
						this.setState({
							description: value,
						})}
				/>
				<TouchableOpacity
					onPress={() => {
						this.props.close();
						this.submit().then(() => {
							console.log('Getting new markers...');
							this.props.dispatch(getMarkers());
						});
					}}
					style={style.button}
					text={'Submit'}
					accessibilityLabel={'Submit'}
				>
					<Text>Submit</Text>
				</TouchableOpacity>

				<View style={style.buttonContainer}>
					<TouchableOpacity
						onPress={() =>
							this.setState({
								incidentType: '',
								date: '',
								time: '',
								description: '',
							})}
						style={style.buttonWarning}
					>
						<Text>Clear</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={this.props.close}
						style={style.buttonCancel}
						accessibilityLabel={'Cancel'}
						text={'Cancel'}
					>
						<Text>Cancel</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const mapStateToProps = state => ({
	location: state.report.userLocation,
});

export default reduxForm({ form: 'login' })(connect(mapStateToProps)(reportForm));
