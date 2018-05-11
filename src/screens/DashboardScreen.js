import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../common/Navbar';

export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Dashboard'
    };
  }
  render() {
    return (
      <View>
        <Navbar
          header={this.state.header}
          plus={() => this.add()}
          back={() => this.props.navigation.goBack()}
        />
        <Text style={styles.text}>Hello From DashboardScreen!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});
