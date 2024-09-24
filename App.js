import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StartScreen from './screens/StartScreen';
import colors from './components/Colors';

export default function App() {

  const [receivedData, setReceivedData] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleRegister() {
    console.log('Register button pressed from App.js');
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />

      <StartScreen 
        registerHandler={handleRegister}
      />
      

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
