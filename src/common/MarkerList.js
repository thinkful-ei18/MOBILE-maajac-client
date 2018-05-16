import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  ScrollView /* AsyncStorage */
} from 'react-native';
import { connect } from 'react-redux';

import {
  getMarkersDashboard,
  deleteMarkerDashboard
} from '../actions/markerActions';
import { getCurrentUser } from '../actions/userActions';

import * as styles from '../styles/dashboardStyles';

class MarkerList extends Component {
  componentDidMount() {
    this.props.dispatch(getCurrentUser());
    this.props.dispatch(getMarkersDashboard());
  }

  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }

  onClick(markerId) {
    this.props.dispatch(deleteMarkerDashboard({ markerId }));
  }

  render() {
    const reports = this.props.markersFromServer;

    let userReports = reports.map(report => (
      <View style={styles.reportCard} key={report._id}>
        <Text style={styles.incidentType}>{report.incidentType}</Text>
        <Image
          style={styles.reportIcon}
          alt={`Report icon for ${report.incidentType}`}
          source={{ uri: 'report.icon' }}
        />
        <Text style={styles.incidentDate}>Date: {report.date}</Text>
        <Text style={styles.incidentDescriptionTitle}>Description:</Text>
        <Text style={styles.incidentDescription}>{report.description}</Text>
        <Button
          onPress={() => this.onClick(report._id)}
          title="Delete"
          id={report._id}
          style={styles.deleteIncident}
          accessibilityLabel="Delete this incident report"
        >
          Delete
        </Button>
      </View>
    ));

    return (
      <ScrollView>
        <View style={styles.userReports}>{userReports}</View>
      </ScrollView>
    );
  }
}

export const mapStateToProps = state => {
  return {
    markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser ? state.auth.currentUser : ''
  };
};

export default connect(mapStateToProps)(MarkerList);

/*
Resources:
 - https://facebook.github.io/react-native/docs/button.html
*/
