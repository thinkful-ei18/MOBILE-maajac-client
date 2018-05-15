import React, { Component } from 'react';
import {
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  AsyncStorage
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
      <ScrollView style={style.reportFormContainer}>
        <Text>Incident Type</Text>
        <TextInput
          value={this.state.incidentType}
          onChangeText={value =>
            this.setState({
              incidentType: value
            })
          }
        />
        <Text>Date</Text>
        <TextInput
          value={this.state.date}
          onChangeText={value =>
            this.setState({
              date: value
            })
          }
        />
        <Text>Time</Text>
        <TextInput
          value={this.state.time}
          onChangeText={value => this.setState({ time: value })}
        />
        <Text>Description of Incident</Text>
        <TextInput
          value={this.state.description}
          onChangeText={value =>
            this.setState({
              description: value
            })
          }
        />
        <Button
          onPress={() =>
            this.setState({
              incidentType: '',
              date: '',
              time: '',
              description: ''
            })
          }
          title={'Clear'}
        />

        <Button
          onPress={() => {
            this.props.close();
            this.props.submit();
            this.submit();
          }}
          title={'Submit'}
        />
        <Button onPress={this.props.close} title={'Cancel'} />
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

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
});
