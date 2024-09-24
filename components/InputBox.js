import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

import colors from './Colors';

const InputBox = ({value, onChangeText, placeholder, keyboardType, warningText, validationPattern}) => {

  const [showWarning, setShowWarning] = React.useState(false);

  return (
    <View style={styles.container} >
      <TextInput style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        autoFocus={true}
        onChangeText={onChangeText}
        onBlur={() => {setShowWarning(false)}}
        onFocus={() => {setShowWarning(true)}}
        />
        {!validationPattern.test(value) && showWarning && <Text style={styles.invalidWarning}>
          {warningText}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    borderColor: colors.primary,
    borderBottomWidth: 2,
    borderRadius: 5,
    margin: 5,
    fontSize: 17,
  },
  invalidWarning: {
    paddingLeft: 5,
    color: colors.secondary,
    fontSize: 10,
  },
});

export default InputBox