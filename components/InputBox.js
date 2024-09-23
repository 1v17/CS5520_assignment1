import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

import colors from './Colors'

const InputBox = ({placeholder, keyboardType, warningText, validationPattern}) => {

  const [text, setText] = React.useState('');
  const [showWarning, setShowWarning] = React.useState(false);

  return (
    <View style={styles.container} >
      <TextInput style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={text}
            autoFocus={true}
            onChangeText={function (changedText) {
              setText(changedText);
            }}
            onBlur={() => {setShowWarning(false)}}
            onFocus={() => {setShowWarning(true)}}
           />
           {!validationPattern.test(text) && showWarning && <Text style={styles.invalid_warning}>
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
  invalid_warning: {
    paddingLeft: 5,
    color: colors.secondary,
    fontSize: 10,
  },
});

export default InputBox