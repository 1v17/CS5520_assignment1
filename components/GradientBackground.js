import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react'
import colors from './Colors'

const GradientBackground = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={[colors.gradient_light, colors.gradient_dark]}
        style={styles.gradient} >
          {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    gradient: {
      flex: 1,
    }
  });


export default GradientBackground