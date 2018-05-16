import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView /* AsyncStorage */
} from 'react-native';
import { List, Card, Button } from "react-native-elements";
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

    };
  }

  deleteMarker(markerId) {
    console.log(markerId)
    this.props.dispatch(deleteMarkerDashboard({ markerId }));
    this.props.dispatch(getMarkersDashboard());

  }

  render() {

    return (
      <ScrollView>
        <List>
          <FlatList
            style={{ paddingBottom: 10 }}
            data={this.props.markersFromServer}
            renderItem={(marker, index) => (
              < Card
                key={index}
                title={marker.item.incidentType}
              >
                <Text style={{ marginBottom: 10 }}>
                  {marker.item.description}
                </Text>
                <Text style={{ marginBottom: 10, fontStyle: 'italic', color: '#5F5F5F' }}>
                  On {marker.item.date} at {marker.item.time}
                </Text>
                <Button
                  onPress={() => this.deleteMarker(marker.item._id)}
                  backgroundColor='#f40331'
                  buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10 }}
                  title='DELETE MARKER' />
              </Card>

            )}
          />
        </List>
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


