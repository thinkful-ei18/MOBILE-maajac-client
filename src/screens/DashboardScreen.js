import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { connect } from 'react-redux';

// import RequiresLogin from '../common/Requires-Login';
import Navbar from '../common/Navbar';
import UserProfile from '../common/UserProfile';
import {
  getMarkersDashboard,
  deleteMarkerDashboard
} from '../actions/markerActions';

import * as dashboardStyles from '../styles/dashboardStyles';

class DashboardScreen extends Component {
  componentDidMount(props) {
    this.props.dispatch(getMarkersDashboard());
  }

  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }

  onClick(e) {
    e.preventDefault();
    console.log(e.target.id);
    this.props.dispatch(deleteMarkerDashboard({ markerId: e.target.id }));
  }

  render() {
    const reports = this.props.markersFromServer;

    let userReports = reports.map(report => (
      <View style={dashboardStyles.reportCard} key={report._id}>
        {/* {this.props.loggedIn ? '' : (<Redirect to='/map' />)} */}
        <Text style={dashboardStyles.incidentType}>{report.incidentType}</Text>
        <Image
          style={dashboardStyles.reportIcon}
          alt={`Report icon for ${report.incidentType}`}
          source={{ uri: 'report.icon' }}
        />
        <Text style={dashboardStyles.incidentDate}>Date: {report.date}</Text>

        <Text style={dashboardStyles.incidentDescriptionTitle}>
          Description:
        </Text>
        <Text style={dashboardStyles.incidentDescription}>
          {report.description}
        </Text>
        <Button
          onClick={e => this.onClick(e)}
          id={report._id}
          style={dashboardStyles.deleteIncident}
          title={'Delete'}
        />
      </View>
    ));

    return (
      <View style={dashboardStyles.view}>
        <Navbar
          header={this.state.header}
          plus={() => this.add()}
          back={() => this.props.navigation.goBack()}
        />
        <UserProfile />
        <View style={dashboardStyles.userReports}>{userReports}</View>
      </View>
    );
  }
}

export const mapStateToProps = state => ({
  markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser ? state.auth.currentUser : ''
});

// export default RequiresLogin()(connect(mapStateToProps)(DashboardScreen));
export default connect(mapStateToProps)(DashboardScreen);
