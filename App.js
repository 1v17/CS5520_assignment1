import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import StartScreen from './screens/StartScreen';
import colors from './components/Colors';

export default function App() {

  const [receivedName, setReceivedName] = useState("");
  const [receivedEmail, setReceivedEmail] = useState("");
  const [receivedPhoneNumber, setReceivedPhoneNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function handleRegister(name, email, phoneNumber) {
    setReceivedName(name);
    setReceivedEmail(email);
    setReceivedPhoneNumber(phoneNumber);
    console.log("name:", name,"email:", email,"phone:", phoneNumber);
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
