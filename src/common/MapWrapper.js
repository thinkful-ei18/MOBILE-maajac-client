import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { MapView } from 'expo';
import { ModalForm } from './ModalForm';
import Navbar from './Navbar';

// import { View, StyleSheet, Image } from 'react-native';
// import { Constants, MapView } from 'expo';
import { setUserLocation } from '../actions/reportActions';
import { getMarkers } from '../actions/markerActions';

// import { styles } from '../styles/mapStyles';
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
      },
      form: false,
      header: 'Map'
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

  close() {
    this.setState({ form: false });
  }
  open() {
    this.setState({ form: true });
  }

  render() {
    console.log(this.props.markersFromServer);

    return (
      <View styles={{ justifyContent: 'center' }}>
        <Navbar
          header={this.state.header}
          goTo={() => this.props.navigation.navigate('Dashboard')}
          back={() => this.props.navigation.goBack()}
          plus={() => this.open()}
        />
        <View style={styles.container}>
          <MapView
            style={styles.mapScreen}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
            onPress={({ nativeEvent }) => {
              // get the coordinate's of where the user has clicked on the map
              this.props.dispatch(
                setUserLocation({
                  lat: nativeEvent.coordinate.latitude,
                  lng: nativeEvent.coordinate.longitude
                })
              );
              console.log(this.props.indicatorPin);
            }}
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
            <Marker
              coordinate={this.props.indicatorPin}
              title={'Incident Pin'}
            />
          </MapView>
          <ModalForm
            close={() => this.close()}
            visible={this.state.form}
            // placeholder={
            //   this.state.form2
            //     ? `Add${this.state.currentSection}`
            //     : 'Section name'
            // }
            // onChangeText={section =>
            //   this.state.clothing.length === 0
            //     ? this.setState({ section })
            //     : this.setState({ clothing: section })
            // }
            // value={
            //   this.state.clothing.length === 0
            //     ? this.state.section
            //     : this.state.clothing
            // }
            // submit={() =>
            //   this.state.form2
            //     ? this.addClothing(this.state.currentSection)
            //     : this.addWardrobe()
            // }
          />
        </View>
      </View>
    );
  }
}

export const mapStateToProps = (state, props) => ({
  markersFromServer: state.markers.allMarkers ? state.markers.allMarkers : [],
  indicatorPin: state.report.userLocation
    ? {
        latitude: state.report.userLocation.lat,
        longitude: state.report.userLocation.lng
      }
    : {
        latitude: 37.78825,
        longitude: -122.4324
      }
});

export default connect(mapStateToProps)(MapWrapper);

/*
 Resources:
  - https://github.com/react-community/react-native-maps
  - https://stackoverflow.com/questions/33804500/screen-width-in-react-native
  - https://facebook.github.io/react-native/docs/dimensions.html
 */
