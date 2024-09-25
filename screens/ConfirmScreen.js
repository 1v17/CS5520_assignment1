import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';

import colors from '../components/Colors';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const ConfirmScreen = ({modalVisibile, userName, userEmail, 
                        userPhoneNumber, goBackHandler, continueHandler}) => {

  function handleGoBack() {
    goBackHandler();
  }

  function handleContinue() {
    console.log("Continue");
    continueHandler();
  }

  return (
    <Modal animationType="slide" visible={modalVisibile} transparent={true} >
      <View style={styles.container} >
        <Card>

          <View style={styles.infoSection} >
            <Text style={styles.info} >Hello {userName}</Text>
            <Text style={styles.info} >Here is the information you entered:</Text>
            <Text style={styles.info} >{userEmail}</Text>
            <Text style={styles.info} >{userPhoneNumber}</Text>
            <Text style={styles.info} >If it is not correct, please go back and edit them</Text>
          </View>

          <View style={styles.buttonSection} >
            <CustomButton
              title="Go back"
              pressHandler={handleGoBack}
              color={colors.warningButton}
              disabled={false}
            />
            <CustomButton
              title="Continue"
              pressHandler={handleContinue}
              color={colors.mainButton}
              disabled={false}
            />

          </View>
        </Card>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dimBackground,
  },
  infoSection: {
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 20,
    color: colors.primary,
    margin: 5,
  },
  buttonSection: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'center',
    gap: 15,
  },
});

export default ConfirmScreen