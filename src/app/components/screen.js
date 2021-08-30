import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({ style, children }) => {
  return (
    <>
      <SafeAreaView style={[styles.screen, style]}>
        {children}
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})

export default Screen;

