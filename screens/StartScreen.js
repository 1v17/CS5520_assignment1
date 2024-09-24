import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import GradientBackground from '../components/GradientBackground'
import colors from '../components/Colors'
import Card from '../components/Card'
import InputBox from '../components/InputBox';

const StartScreen = () => {

  const namePattern = /[_-a-zA-Z ]+/;
  const emailPattern = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]+/;
  const phonePattern = /^[0-9]{9}[2-9]$/;

  const [isChecked, setChecked] = useState(false);

  return (
    <GradientBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View style={styles.container}>
          <Card>

            <Text style={styles.label} >Name</Text>
            <InputBox 
              placeholder="Enter your name" 
              keyboardType="default" 
              warningText="Please enter a valid name" 
              validationPattern={namePattern} />
            <Text style={styles.label} >Email Address</Text>
            <InputBox 
              placeholder="Enter your email" 
              keyboardType="email-address" 
              warningText="Please enter a valid email" 
              validationPattern={emailPattern} />
            <Text style={styles.label} >Phone number</Text>
            <InputBox 
              placeholder="Enter phone number" 
              keyboardType="number-pad" 
              warningText="Please enter a valid phone number" 
              validationPattern={phonePattern} />
            <View style={styles.checkboxSection} >
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? colors.primary : undefined} />
              <Text style={styles.label} >I am not a robot</Text>
            </View>
          </Card>
        </View>
      </TouchableWithoutFeedback>
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
  checkboxSection: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default StartScreen