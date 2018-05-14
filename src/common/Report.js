import React, { Component } from 'react';
import {Text, Button, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newMarker } from '../actions/markerActions';
import {Input} from './Input';
// import { required, nonEmpty, length, checkDate } from '../utils/validators';

const descriptionLength = length({ min: 10, max: 120 });

class reportForm extends Component {
  constructor(props) {
    super(props);

    this.state = { locationError: '' };
  }
  componentWillMount() {
    document.body.style.backgroundColor = '#3b4141';
  }

  handleLocationError(error) {
    this.setState({ locationError: error });
  }

  render() {
    const { handleSubmit, pristine, submitting, reset, dispatch } = this.props;

    let style;
    if (this.props.path === '/map') {
      style = 'report';
    } else if (this.props.path === '/report') {
      style = 'mobile-only';
    }

    return (
      <ScrollView>
        <Text>
          Incident Type
        </Text>
        <Field
          component="select"
          name="incidentType">
          {/* <option value="" />
          <option value="Crime">Crime</option>
          <option value="Theft">Theft</option>
          <option value="Road-Construction">Road Construction</option>
          <option value="Accident">Traffic Accident</option>
          <option value="Other">Other</option> */}
        </Field>
        <Text>Date</Text>
        <Field
          component={Input}
          type="date"
          name="date"
        />
        <Text>Time</Text>
        <Field
          component={Input}
          type="time"
          name="time"
        />
        <Text>Description of Incident</Text>
        <Field
          component={Input}
          type="text"
          name="description"
        />
        <Text>{this.state.locationError}</Text>
        <Button onPress={reset}>
          Clear
        </Button>
        <Button
        onPress={(values) => console.log(values)}
        >
          Submit
        </Button>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  location: state.report.userLocation
});

reportForm = connect(mapStateToProps)(reportForm);

export default reduxForm({
  form: 'report'
})(reportForm);
