import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';

import GradientBackground from '../components/GradientBackground'
import colors from '../components/Colors'
import Card from '../components/Card'

const StartScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Card>

          <Text style={styles.label} >Name</Text>
          <Text style={styles.label} >Email Address</Text>
          <Checkbox />

        </Card>
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
  label: {
    fontSize: 20,
    color: colors.primary,
    margin: 5,
  },
});

export default StartScreen