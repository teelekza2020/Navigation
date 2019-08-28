import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
//import StackNavigator from './Stack/StackNavigator'
import SwitchNavigator from './Switch/SwitchNavigator'


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}>
          <SwitchNavigator/>
        </View>
    );
  }
}
