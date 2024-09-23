import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';

import GradientBackground from '../components/GradientBackground'
import colors from '../components/Colors'

const StartScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>Start Screen</Text>
          <Checkbox />
        </View>
      </View>
    </GradientBackground>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card_background,
    height: '70%',
    width: '80%',
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 20,
  }
});

export default StartScreen