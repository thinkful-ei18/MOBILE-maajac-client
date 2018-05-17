import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/RootStack';
import Tabs from '../navigation/Tabs';

import * as styles from './styles/rootStyles';


// LOADS THE ENTIRE APP
class Root extends Component {

  render() {
    console.log('ROOT PROP:', this.props)

    let navigationStyle;
    if (this.props.authToken !== null) {
      navigationStyle = <Tabs />;
    }
    else {
      navigationStyle = <AppWithNavigationState />;
    }

    return (
      <View style={styles.view}>
        { navigationStyle }
      </View>
    );
  }
}

export const mapStateToProps = state => {
  console.log('ROOT STATE:', state)  
  return {authToken: state.auth.authToken}
  }

export default connect(mapStateToProps)(Root)


/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
*/