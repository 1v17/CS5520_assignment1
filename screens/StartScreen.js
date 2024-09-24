import { View, Text, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback, Button } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import GradientBackground from '../components/GradientBackground'
import colors from '../components/Colors'
import Card from '../components/Card'
import InputBox from '../components/InputBox';

const StartScreen = ({registerHandler}) => {

  const namePattern = /[_-a-zA-Z ]+/;
  const emailPattern = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]+/;
  const phonePattern = /^[0-9]{9}[2-9]$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setChecked] = useState(false);

  function handleNameChange(changedText) {
    setName(changedText);
  }

  function handleEmailChange(changedText) {
    setEmail(changedText);
  }

  function handlePhoneChange(changedText) {
    setPhoneNumber(changedText);
  }

  function handleReset() {
    // console.log('Reset button pressed');
    setName('');
    setEmail('');
    setPhoneNumber('');
    setChecked(false);
  }

  function handleRegister() {
    if (namePattern.test(name) && emailPattern.test(email) && phonePattern.test(phoneNumber) && isChecked) {
      registerHandler();
    } else {
      alert('Please fill in all the fields correctly');
    }
  }

  return (
    <GradientBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View style={styles.container}>
          <Card>
            <View style={styles.inputSection} >

              <Text style={styles.label} >Name</Text>
              <InputBox 
                value={name}
                onChangeText={handleNameChange}
                placeholder="Enter your name" 
                keyboardType="default" 
                warningText="Please enter a valid name" 
                validationPattern={namePattern} />
              <Text style={styles.label} >Email Address</Text>
              <InputBox 
                value={email}
                onChangeText={handleEmailChange}
                placeholder="Enter your email" 
                keyboardType="email-address" 
                warningText="Please enter a valid email" 
                validationPattern={emailPattern} />
              <Text style={styles.label} >Phone number</Text>
              <InputBox 
                value={phoneNumber}
                onChangeText={handlePhoneChange}
                placeholder="Enter phone number" 
                keyboardType="number-pad" 
                warningText="Please enter a valid phone number" 
                validationPattern={phonePattern} />
              
              {/* the checkbox section */}
              <View style={styles.checkboxSection} >
                <Checkbox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? colors.primary : undefined} />
                <Text style={styles.label} >I am not a robot</Text>
              </View>

            </View>

            {/* the buttons section */}
            <View style={styles.buttonSection} >
              <Button
                title="Reset"
                onPress={handleReset}
                color={colors.leftButton}
              />
              <Button
                title="Register"
                onPress={handleRegister}
                color={colors.rightButton}
              />
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
  buttonSection: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center',
    gap: 15,
  },
  registerButton: {
    color: colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  inputSection: {
    alignItems: 'flex-start',
  },
});

export default StartScreen