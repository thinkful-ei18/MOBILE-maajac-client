import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from '../common/Navbar';

export default class WardrobeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Login'
    };
  }
  render() {
    return (
      <View>
        <Navbar
          header={this.state.header}
          goTo={() => this.props.navigation.navigate('Map')}
        />
        <Text style={styles.text}>Hello From LoginScreen!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40
  }
});