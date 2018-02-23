import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {Actions} from 'react-native-router-flux'

export default class MeApp1 extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to MeApp1!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions}>
            第一个页面
          </Text>
          <TouchableOpacity
              onPress={() => Actions.meApp2()}
          >
            <Text>点击进入到第二个页面</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})