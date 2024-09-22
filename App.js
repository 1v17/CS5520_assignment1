import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StartScreen from './screens/StartScreen';
import colors from './components/Colors';
import GradientBackground from './components/GradientBackground';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />

      <StartScreen />
      

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
