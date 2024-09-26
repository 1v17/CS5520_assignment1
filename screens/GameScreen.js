import { View, Text, StyleSheet, Modal, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';

import GradientBackground from '../components/GradientBackground';
import colors from '../components/Colors';
import Card from '../components/Card';
import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const GameScreen = ({userPhoneNumber, restartHandler}) => {

  const numberPattern = /^(100|[1-9][0-9]?|0)$/;
  const lastDigitOfPhone = parseInt(userPhoneNumber.slice(-1));
  const lowerBound = 1;
  const upperBound = 100;
  const multiplerUpperBound = 50;
  const maxAttempts = 4;
  const sixtySeconds = 60;
  const gameInstructions = 'Guess a number between 1 & 100 that is multiply of ' + lastDigitOfPhone;

  const [target, setTarget] = useState(generateTarget(lastDigitOfPhone));
  const [userGuess, setUserGuess] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(maxAttempts);
  const [timeLeft, setTimeLeft] = useState(sixtySeconds);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  function generateTarget(base) {
    let result;
    do {
      const multiplier = Math.floor(Math.random() * multiplerUpperBound) + 1;
      result = base * multiplier;
    } while (result < lowerBound || result > upperBound);
    return result;
  }

  function handleStart() {
    setGameStarted(true);
  }

  function handleReset() {
    restartHandler();
  }

  function handleNewGame() {
    setTarget(generateTarget(lastDigitOfPhone));
    setAttemptsLeft(maxAttempts);
    setTimeLeft(sixtySeconds);
    setGameOver(false);
    setFeedback('');
    setHintUsed(false);
    setHintVisible(false);
    setGameStarted(false);
    setUserGuess('');
  }

  function handleGuess() {
    if (numberPattern.test(userGuess) && parseInt(userGuess) % lastDigitOfPhone === 0) {
      if (parseInt(userGuess) === target) {
        setGameOver(true);
        setFeedback('You guessed correct!\nAttempts used: ' + (maxAttempts - attemptsLeft + 1));
      } else if (userGuess > target) {
        setFeedback('You did not guess correct!\nYou should guess lower.');
        setAttemptsLeft(attemptsLeft - 1);
      } else {
        setFeedback('You did not guess correct!\nYou should guess higher.');
        setAttemptsLeft(attemptsLeft - 1);
      }
      if (attemptsLeft === 1) {
        setGameOver(true);
        setFeedback('You are out of attempts');
      }
    } else {
      Alert.alert('Invalid number',
        `Number has to be a multiply of ${lastDigitOfPhone} between 1 and 100`);
    }
  }

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setFeedback('You are out of time');
    }
  }, [timeLeft, gameStarted]);

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

        { // the card for game over
          gameOver && 
          <View style={styles.container}>
            <Card>
              <Text>The game is over!</Text>
              <Text>{feedback}</Text>
            </Card>
          </View>
        }

        { // the card for game
          !gameStarted &&
          <View style={styles.container}>
            <Card>
              <Text>{gameInstructions}</Text>
              <CustomButton
                title="Start"
                pressHandler={handleStart}
                color={colors.mainButton}
                disabled={false}
              />
            </Card>
          </View>
        }




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