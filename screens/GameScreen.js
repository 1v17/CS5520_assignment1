import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';
import { useState } from 'react';

import GradientBackground from '../components/GradientBackground';
import colors from '../components/Colors';
import Card from '../components/Card';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const GameScreen = ({userPhoneNumber}) => {

  const numberPattern = /^(100|[1-9][0-9]?|0)$/;

  const [userGuess, setUserGuess] = useState('');

  return (
    <GradientBackground>
        <View style={styles.container}>
          <Text>GameScreen</Text>
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
});

export default GameScreen