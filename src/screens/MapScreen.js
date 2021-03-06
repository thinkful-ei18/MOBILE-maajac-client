import React from 'react';
import { StyleSheet, /* Text, */ View } from 'react-native';
// import Navbar from '../common/Navbar';
import Map from '../common/MapWrapper';

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Map'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Map navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
