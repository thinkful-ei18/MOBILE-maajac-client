import React, { Component } from 'react';
import { Text, Button, ScrollView, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newMarker } from '../actions/markerActions';
import Input from './Input';
// import { required, nonEmpty, length, checkDate } from '../utils/validators';

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

  render() {
    return (
      <ScrollView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  }
});
