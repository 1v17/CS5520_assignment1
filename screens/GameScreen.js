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

  const [userGuess, setUserGuess] = useState('');

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