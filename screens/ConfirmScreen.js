import { View, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';

import colors from '../components/Colors';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const ConfirmScreen = ({modalVisibile, userName, userEmail, userPhoneNumber}) => {
  return (
    <Modal visible={modalVisibile} transparent={true} >
      <View>
        
      </View>
    </Modal>
  )
}

export default ConfirmScreen