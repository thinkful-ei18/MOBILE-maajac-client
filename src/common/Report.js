import React, { Component } from 'react';
import {
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newMarker } from '../actions/markerActions';
import Input from './Input';


import * as style from '../styles/reportFormStyles'

class reportForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      incidentType: '',
      date: '',
      time: '',
      description: ''
    };
  }

  handleLocationError(error) {
    this.setState({ locationError: error });
  }

  userAuth = async () => {
    let authToken = await AsyncStorage.getItem('authToken');
  };

  submit = () => {
    AsyncStorage.getItem('authToken')
      .then(authToken =>
        fetch('https://safer-server.herokuapp.com/api/new/marker', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
          },
          body: JSON.stringify({
            incidentType: this.state.incidentType,
            location: this.props.location,
            date: this.state.date,
            description: this.state.description,
            time: this.state.time
          })
        })
      )
      .then(res => res.json())
      .done();
  };

  render() {
    return (
      <ScrollView
        style={style.reportFormContainer}>
        <Text
          style={style.label}>Incident Type</Text>
        <TextInput
          style={style.input}
          value={this.state.incidentType}
          onChangeText={value =>
            this.setState({
              incidentType: value
            })
          }
        />
        <Text
          style={style.label}>Date</Text>
        <TextInput
          style={style.input}
          value={this.state.date}
          onChangeText={value =>
            this.setState({
              date: value
            })
          }
        />
        <Text
          style={style.label}>Time</Text>
        <TextInput
          style={style.input}
          value={this.state.time}
          onChangeText={value => this.setState({ time: value })}
        />
        <Text
          style={style.label}>Description of Incident</Text>
        <TextInput
          style={style.input}
          value={this.state.description}
          multiline={true}
          onChangeText={value =>
            this.setState({
              description: value
            })
          }
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({
              incidentType: '',
              date: '',
              time: '',
              description: ''
            })
          }
          style={style.button}>
          <Text>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.props.close();
            this.props.submit();
            this.submit();
          }}
          style={style.button}
          text={'Submit'}
          accessibilityLabel={'Submit'}>
          <Text>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.props.close}
          style={style.button}
          accessibilityLabel={'Cancel'}
          text={'Cancel'}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  location: state.report.userLocation
});

export default reduxForm({ form: 'login' })(
  connect(mapStateToProps)(reportForm)
);


