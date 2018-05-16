import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView 
} from 'react-native';
import { connect } from 'react-redux';

import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';
import {
  getMarkersDashboard,
  deleteMarkerDashboard
} from '../actions/markerActions';
import { getCurrentUser } from '../actions/userActions';

import * as styles from '../styles/dashboardStyles';


class DashboardScreen extends Component {
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

  onDelete(markerId) {
    this.props.dispatch(deleteMarkerDashboard({ markerId }));
  }

  render() {
    if (this.props.currentUser === '') {
      this.props.navigation.navigate('Login');
    }
    
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
          onPress={() => this.onDelete(report._id)}
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
      <View style={styles.view}>
        <Navbar
          header={this.state.header}
          back={this.props.authToken !== null ? false : () => this.props.navigation.goBack()}
        />
        <UserProfile navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.userReports}>{userReports}</View>
        </ScrollView>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
    markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
    currentUser: state.auth.currentUser ? state.auth.currentUser : '',
    authToken: state.auth.authToken
  });

export default connect(mapStateToProps)(DashboardScreen);

/*
Resources:
 - https://facebook.github.io/react-native/docs/button.html

 plus={() => this.add()}
*/
