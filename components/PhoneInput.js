// PhoneInput.js
import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const PhoneInput = ({ phoneNumber, handleInputChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Nhập số điện thoại của bạn"
      keyboardType="phone-pad"
      value={phoneNumber}
      onChangeText={handleInputChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default PhoneInput;
