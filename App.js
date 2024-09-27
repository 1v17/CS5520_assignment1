import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StartScreen from './screens/StartScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import GameScreen from './screens/GameScreen';
import colors from './components/Colors';

export default function App() {

  const [receivedName, setReceivedName] = useState("");
  const [receivedEmail, setReceivedEmail] = useState("");
  const [receivedPhoneNumber, setReceivedPhoneNumber] = useState("");
  const [confirmScreenVisible, setConfirmScreenVisible] = useState(false); // Track the visibility of the ConfirmScreen
  const [gameScreenVisible, setGameScreenVisible] = useState(false); // Track the visibility of the GameScreen

  function handleRegister(name, email, phoneNumber) {
    setReceivedName(name);
    setReceivedEmail(email);
    setReceivedPhoneNumber(phoneNumber);
    // console.log("name:", name,"email:", email,"phone:", phoneNumber);
    setConfirmScreenVisible(true);
  }

  function handleGoBack() {
    setConfirmScreenVisible(false);
  }

  function handleContinue() {
    setConfirmScreenVisible(false);
    setGameScreenVisible(true);
  }

  function handleRestart() {
    setGameScreenVisible(false);
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />

      {!gameScreenVisible && <StartScreen 
        registerHandler={handleRegister}
      />}

      <ConfirmScreen 
        modalVisibile={confirmScreenVisible}
        userName={receivedName}
        userEmail={receivedEmail}
        userPhoneNumber={receivedPhoneNumber}
        goBackHandler={handleGoBack}
        continueHandler={handleContinue}
      />

      {gameScreenVisible && <GameScreen
        userPhoneNumber={receivedPhoneNumber}
        restartHandler={handleRestart}
        />}

    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
