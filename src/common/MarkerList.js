import React, { Component } from 'react';
import {
  Text,
  FlatList,
  ScrollView 
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
    this.props.dispatch(deleteMarkerDashboard({ markerId }));
    this.props.dispatch(getMarkersDashboard());

  }

  render() {

    return (
      <ScrollView>
        <List
          containerStyle={styles.list}
        >
          <FlatList
            style={styles.flatlist}
            data={this.props.markersFromServer}
            renderItem={ marker => (
              < Card
                title={marker.item.incidentType}
                containerStyle={styles.card}
              >
                <Text style={styles.markerDescription}>
                  {marker.item.description}
                </Text>
                <Text style={styles.info}>
                  On {marker.item.date} at {marker.item.time}
                </Text>
                <Button
                  onPress={() => this.deleteMarker(marker.item._id)}
                  backgroundColor='#a0472f'
                  buttonStyle={styles.delete}
                  title='DELETE MARKER' 
                />
              </Card>

            )}
            keyExtractor={(item, index) => index}
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


/*
Resources:
 - https://github.com/react-native-training/react-native-elements
 */