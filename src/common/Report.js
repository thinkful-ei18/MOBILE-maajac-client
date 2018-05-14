import React, { Component } from 'react';
import { Text, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newMarker } from '../actions/markerActions';
import Input from './Input';
// import { required, nonEmpty, length, checkDate } from '../utils/validators';

class reportForm extends Component {
  constructor(props) {
    super(props);

    this.state = { locationError: '' };
  }

  handleLocationError(error) {
    this.setState({ locationError: error });
  }

  render() {
    return (
      <ScrollView>
        <Text>Incident Type</Text>

        <Text>Date</Text>
        <Field component={Input} name="date" />
        <Text>Time</Text>
        <Field component={Input} name="time" />
        <Text>Description of Incident</Text>
        <Field component={Input} name="description" />
        <Text>{this.state.locationError}</Text>
        <Button onPress={() => console.log('test1')} title={'Clear'} />

        <Button onPress={() => console.log('test2')} title={'Delete'} />
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
