import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { MapView } from 'expo';

import { getMarkers } from '../actions/markerActions';

import * as styles from '../styles/mapStyles';

const Marker = MapView.Marker;


// function to get the coordinates of the user's current location (if they approve the request)
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      e => reject(e)
    );
  });
};

export class MapWrapper extends Component {
  constructor(props) {
    super(props);
    // sets the location and size of the initial map render
    this.state = {
      mapRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  componentDidMount() {
    this.props.dispatch(getMarkers());

    // when the component mounts, get the user's coord's
    return getCurrentLocation().then(position => {
      if (position) {
        this.setState({
          mapRegion: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }
        });
      }
    });
  }
  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  // sets the marker images
  markerImage(type) {
    if (type === 'Theft') {
      return (
        <Image
          style={styles.marker}
          source={require('../../assets/map_icon_theft.png')}
        />
      );
    } else if (type === 'Accident') {
      return (
        <Image
          style={styles.marker}
          source={require('../../assets/map_icon_accident.png')}
        />
      );
    } else if (type === 'Crime') {
      return (
        <Image
          style={styles.marker}
          source={require('../../assets/map_icon_crime.png')}
        />
      );
    } else if (type === 'Other') {
      return (
        <Image
          style={styles.marker}
          source={require('../../assets/map_icon_other.png')}
        />
      );
    } else if (type === 'Road-Construction') {
      return (
        <Image
          style={styles.marker}
          source={require('../../assets/map_icon_traffic_construction.png')}
        />
      );
    }
  }

  render() {
    console.log(this.props.markersFromServer);

    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapScreen}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
          onPress={event => console.log(event.nativeEvent.coordinate)} // get the coordinate's of where the user has clicked on the map
        >
          {this.props.markersFromServer.map((marker, index) => (
            // create each marker with an image
            <Marker
              coordinate={{
                latitude: marker.location.lat,
                longitude: marker.location.lng
              }}
              title={marker.incidentType}
              description={marker.description}
              // image={this.markerImage(marker.incidentType)}
              key={index}
            >
              {this.markerImage(marker.incidentType)}
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : []
});

export default connect(mapStateToProps)(MapWrapper);

/*
 Resources:
  - https://github.com/react-community/react-native-maps
  - https://stackoverflow.com/questions/33804500/screen-width-in-react-native
  - https://facebook.github.io/react-native/docs/dimensions.html
 */
