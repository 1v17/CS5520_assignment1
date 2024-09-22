import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import GradientBackground from '../components/GradientBackground'
import colors from '../components/Colors'

const StartScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text>StartScreen</Text>
      </View>
    </GradientBackground>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.primary,
  },
});

export default StartScreen