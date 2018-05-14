import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../common/Navbar';
import Map from '../common/GoogleMapWrapper';

export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Map'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          header={this.state.header}
          goTo={() => this.props.navigation.navigate('Dashboard')}
          back={() => this.props.navigation.goBack()}
        />
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});
