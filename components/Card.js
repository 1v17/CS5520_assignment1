import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import colors from './Colors'

const Card = ({children}) => {
  return (
    <View style={styles.card} >
      {children}
    </View>
  )
}


const styles = StyleSheet.create({
    card: {
      padding: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.card_background,
      height: '70%',
      width: '80%',
      shadowColor: 'black',
      borderRadius: 20,
      shadowOffset: { width: 10, height: 14 },
      shadowRadius: 10,
      shadowOpacity: 0.1,
      elevation: 10,  // Shadow prop doesn't work on Android, use elevation instead
    },
  });

export default Card