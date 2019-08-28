import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import StackNavigator from './Stack/StackNavigator'


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1,marginTop:20}}> 
          <StackNavigator/>
        </View>
    );
  }
}
