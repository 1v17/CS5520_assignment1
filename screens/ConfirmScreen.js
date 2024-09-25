import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';

import colors from '../components/Colors';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const ConfirmScreen = ({modalVisibile, userName, userEmail, userPhoneNumber}) => {
  return (
    <Modal animationType="slide" visible={modalVisibile} transparent={true} >
      <View style={styles.container} >
        <Card>
        
          <Text >Name: {userName}</Text>
        
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
});

export default ConfirmScreen