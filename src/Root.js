import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/RootStack';
import Tabs from '../navigation/Tabs';
import { setAuthToken } from './actions/userActions';

import * as styles from './styles/rootStyles';


// LOADS THE ENTIRE APP
class Root extends Component {

  render() {

    AsyncStorage.getItem('authToken')
      .then(authToken => console.log('ROOT AUTH TOKEN:', authToken))

    let navigationStyle;
    if (this.props.authToken !== null) {
      console.log('logged in')
      navigationStyle = <Tabs />;
    }
    else {
      console.log('logged out')
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
  return {
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(Root)

/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
*/