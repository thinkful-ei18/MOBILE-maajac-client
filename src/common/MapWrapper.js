import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';
import { getMarkers } from '../actions/markerActions';

const Marker = MapView.Marker;
const Dimensions = require('Dimensions');

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

  render() {
    console.log(this.props.markersFromServer);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapScreen}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        >
          {this.props.markersFromServer.map(marker => (
            <Marker
              coordinate={{
                latitude: marker.location.lat,
                longitude: marker.location.lng
              }}
              title={marker.incidentType}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1'
  },
  mapScreen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'stretch',

    marginTop: 600
  }
});

export const mapStateToProps = (state, props) => ({
  markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : []
});

export default connect(mapStateToProps)(MapWrapper);

/*
 Resources:
  - https://stackoverflow.com/questions/33804500/screen-width-in-react-native
  - https://facebook.github.io/react-native/docs/dimensions.html
 */
