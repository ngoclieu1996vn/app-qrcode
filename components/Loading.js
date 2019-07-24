/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';


class Loading extends Component {
  render() {
    return (

      <View style={[styles.container, styles.background, { backgroundColor: '#0081C7' }]}   >
        <View style={styles.container} />
        <View style={[styles.container, { alignItems: "center", justifyContent: "center" }]}>
          {/* <Image source={logo} style={{ width: 150, height: 150 }} resizeMode="contain" /> */}
          <Text style={{ paddingTop: 10, color: '#FFFFFF' }} >Kết nối nhà thầu xây dựng</Text>
          <ActivityIndicator style={{ paddingTop: 10 }} size="small" color="#FFFFFF" />
        </View>
        <View style={styles.container} />
      </View>
    );
  }

}

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: null,
    height: null,
  },

});