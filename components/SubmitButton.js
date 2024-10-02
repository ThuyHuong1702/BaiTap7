// SubmitButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const SubmitButton = ({ isValid, handlePress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isValid ? styles.buttonEnabled : styles.buttonDisabled]}
      onPress={handlePress}
      disabled={!isValid}
    >
      <Text style={styles.buttonText}>Tiếp tục</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#007bff',
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubmitButton;

