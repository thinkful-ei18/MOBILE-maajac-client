import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, /* AsyncStorage */ } from 'react-native';
import { connect } from 'react-redux';

// import RequiresLogin from '../common/Requires-Login';
import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';
import { getMarkersDashboard, deleteMarkerDashboard } from '../actions/markerActions';
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

	onClick(markerId) {
		this.props.dispatch(deleteMarkerDashboard({ markerId }));
  }
  
  render() {
    const reports = this.props.markersFromServer;
    let username;


		let userReports = reports.map(report => (
			<View style={styles.reportCard} key={report._id} >
				{/* {this.props.loggedIn ? '' : (<Redirect to='/map' />)} */}
          <Text style={styles.incidentType}>{report.incidentType}</Text>
          <Image 
            style={styles.reportIcon}
            alt={`Report icon for ${report.incidentType}`} 
            source={{uri: 'report.icon'}} 
          />
          <Text style={styles.incidentDate}>Date: {report.date}</Text>
          <Text style={styles.incidentDescriptionTitle}>Description:</Text>
          <Text style={styles.incidentDescription}>{report.description}</Text>
          <Button 
            onPress={() => this.onClick(report._id)}
            title='Delete'
            id={report._id} 
            style={styles.deleteIncident}
            accessibilityLabel='Delete this incident report'
            >
            Delete
          </Button>
			</View>
    ));
    
    return (
      <View style={styles.view}>
        <Navbar
          header={this.state.header}
          plus={() => this.add()}
          back={() => this.props.navigation.goBack()}
        />
        <UserProfile/>
        <ScrollView>
          <View style={styles.userReports}>{userReports}</View>
        </ScrollView>
      </View>
    );
  }
}

export const mapStateToProps = state => {
  console.log('DASHBOARD SCREEN STATE:', state);
	return {
    markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser ? state.auth.currentUser : '',
  }
};

export default connect(mapStateToProps)(DashboardScreen);

/*
Resources:
 - https://facebook.github.io/react-native/docs/button.html
*/

