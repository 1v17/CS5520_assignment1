import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const CustomButton = ({title, pressHandler, color, disabled}) => {
  return (
    <View >
      <Button
        title={title}
        onPress={pressHandler}
        color={color}
        disabled={disabled}
        />
    </View>
  )
}


export default CustomButton