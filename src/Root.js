import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import AppWithNavigationState from '../navigation/RootStack';
import Tabs from '../navigation/Tabs';

import * as styles from './styles/rootStyles';


// DETERMINED THE NAVIGATION STYLE: TABS OR A STACK
class Root extends Component {

  render() {

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

export const mapStateToProps = state => ({
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(Root)


/*
Resources:
 - https://reactnavigation.org/docs/en/redux-integration.html
*/