import { View, Text, StyleSheet, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
  const [feedbackCardVisible, setFeedbackCardVisible] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Generate a target number that is a multiply of the last digit of the phone number
  // between lowerBound and upperBound
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

  function handleHint() {
    setHintUsed(true);
  }

  // Set everything to initial state for a new game
  function handleNewGame() {
    setTarget(generateTarget(lastDigitOfPhone));
    setAttemptsLeft(maxAttempts);
    setTimeLeft(sixtySeconds);
    setGameOver(false);
    setFeedback('');
    setHintUsed(false);
    setGameStarted(false);
    setUserGuess('');
    setFeedbackCardVisible(false);
    setGameWon(false);
  }

  function handleTryAgain() {
    setFeedbackCardVisible(false);
    setUserGuess('');
  }

  function handleEndGame() {
    setGameOver(true);
    setFeedback('You ended the game.\nAttempts used: ' + (maxAttempts - attemptsLeft));
  }

  // Check if the user guess is correct, if not, give feedback and reduce attempts
  function handleGuess() {
    if (numberPattern.test(userGuess) && parseInt(userGuess) % lastDigitOfPhone === 0) {
      
      if (parseInt(userGuess) === target) {
        setGameOver(true);
        setGameWon(true);
        setFeedback('You guessed correct!\nAttempts used: ' + (maxAttempts - attemptsLeft + 1));
      } else if (userGuess > target) {
        setFeedbackCardVisible(true);
        setFeedback('You did not guess correct!\nYou should guess lower.');
        setAttemptsLeft((attemps) => { return attemps - 1 }); // use updater function
      } else {
        setFeedbackCardVisible(true);
        setFeedback('You did not guess correct!\nYou should guess higher.');
        setAttemptsLeft((attemps) => { return attemps - 1 }); // use updater function
      }
      if (attemptsLeft === 1) {
        setGameOver(true);
        setFeedback('The game is over!\nYou are out of attempts');
      }
    } else {
      Alert.alert('Invalid number',
        `Number has to be a multiply of ${lastDigitOfPhone} between 1 and 100`,
      [{ text: 'Okay', style: 'destructive', onPress: () => setUserGuess('') }]);
    }
  }

  // Timer effect: end the game if time runs out
  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((time) => {
        return time - 1; // use updater function
      }), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !gameWon) {
      setGameOver(true);
      setFeedback('The game is over!\nYou are out of time');
    }
  }, [timeLeft, gameStarted]);

  return (
    /* The main container, the restart button always show at top right.
      All the game cards controlled by conditional rendering */
    <GradientBackground>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
        <View style={styles.wrapper}>
          <View style={styles.restartContainer}>
            <CustomButton
              title="Restart"
              pressHandler={handleReset}
              color={colors.mainButton}
              disabled={false}
            />
          </View>

          { // the card for game before it starts
            !gameStarted &&
            <View style={styles.container}>
              <Card>
                <Text style={styles.mainText} >{gameInstructions}</Text>
                <View style={styles.buttonSection} >
                  <CustomButton
                    title="Start"
                    pressHandler={handleStart}
                    color={colors.mainButton}
                    disabled={false}
                  />
                </View>
              </Card>
            </View>
          }

          { // the card for game
            gameStarted && !gameOver && !feedbackCardVisible &&
            <View style={styles.container}>
              <Card>
                <Text style={styles.mainText} >{gameInstructions}</Text>
                <InputBox
                  value={userGuess}
                  onChangeText={setUserGuess}
                  keyboardType="number-pad"
                  warningText={null}
                  validationPattern={/.*/s}
                />
                {hintUsed && 
                  <Text style={styles.secondaryText} >
                    {(target > 50) ? "The number is between 50 and 100." : "The number is between 1 and 50."}
                  </Text>
                }
                <Text style={styles.secondaryText} >Attempts left: {attemptsLeft}</Text>
                <Text style={styles.secondaryText} >Time left: {timeLeft}s</Text>
                <View style={styles.buttonSection} >
                  <CustomButton
                    title="Submit guess"
                    pressHandler={handleGuess}
                    color={colors.mainButton}
                    disabled={false}
                  />
                </View>
                <View style={styles.buttonSection} >
                  <CustomButton
                    title="Use a hint"
                    pressHandler={handleHint}
                    color={colors.mainButton}
                    disabled={hintUsed}
                  />
                </View>
              </Card>
            </View>
          }

          { // the card for feedback, contains the buttons for try again and end game
            gameStarted && !gameOver && feedbackCardVisible &&
            <View style={styles.container}>
              <Card>
                <Text style={styles.mainText} >{feedback}</Text>
                <View style={styles.buttonSection} >
                  <CustomButton
                    title="Try again"
                    pressHandler={handleTryAgain}
                    color={colors.mainButton}
                    disabled={false}
                  />
                </View>
                <View style={styles.buttonSection} >
                  <CustomButton
                    title="End the game"
                    pressHandler={handleEndGame}
                    color={colors.mainButton}
                    disabled={false}
                  />
                </View>
              </Card>
            </View>
          }
          
          { // the card for game over and not won
            gameOver && !gameWon &&
            <View style={styles.container}>
              <Card>
                <Text style={styles.mainText} >{feedback}</Text>
                <Image style={styles.image} source={require('../assets/sad_smiley_face.png')} />
                <CustomButton
                  title="New game"
                  pressHandler={handleNewGame}
                  color={colors.mainButton}
                  disabled={false}
                />
              </Card>
            </View>
          }

          { // the card for game over and won
            gameOver && gameWon &&
            <View style={styles.container}>
              <Card>
                <Text style={styles.mainText} >{feedback}</Text>
                <Image style={styles.image} source={{ uri: `https://picsum.photos/id/${target}/100/100` }} />
                <CustomButton
                  title="New game"
                  pressHandler={handleNewGame}
                  color={colors.mainButton}
                  disabled={false}
                />
              </Card>
            </View>
          }

        </View>
      </TouchableWithoutFeedback>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: "8%",
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
  mainText: {
    textAlign: 'center',
    marginVertical: "3%",
    color: colors.primary,
    fontSize: 20,
  },
  secondaryText: {
    textAlign: 'center',
    marginVertical: "1%",
    color: colors.secondary,
    fontSize: 15,
  },
  buttonSection: {
    marginVertical: "3%",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: "3%",
  },
});

export default GameScreen