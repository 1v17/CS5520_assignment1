import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';
import { useState } from 'react';

import GradientBackground from '../components/GradientBackground';
import colors from '../components/Colors';
import Card from '../components/Card';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const GameScreen = ({userPhoneNumber, restartHandler}) => {

  const numberPattern = /^(100|[1-9][0-9]?|0)$/;
  const lastDigitOfPhone = parseInt(userPhoneNumber.slice(-1));
  const LOWER_BOUND = 1;
  const UPPER_BOUND = 100;
  const MULTIPLIER_UPPER_BOUND = 50;

  const [userGuess, setUserGuess] = useState('');


  function generateTarget(base) {
    let result;
    do {
      const multiplier = Math.floor(Math.random() * MULTIPLIER_UPPER_BOUND) + 1;
      result = base * multiplier;
    } while (result < LOWER_BOUND || result > UPPER_BOUND);
    return result;
  }

  const randomMultiple = generateTarget(lastDigitOfPhone);

  function handleReset() {
    restartHandler();
  }

  return (
    <GradientBackground>
      <View style={styles.wrapper}>
      {/* add TouchableWithoutFeedback if needed to */}
        <View style={styles.restartContainer}>
          <CustomButton
            title="Restart"
            pressHandler={handleReset}
            color={colors.mainButton}
            disabled={false}
          />
        </View>
        <View style={styles.container}>
          <Card>
            <Text>Game</Text>
          </Card>
        </View>
      </View>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  restartContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: "10%",
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default GameScreen