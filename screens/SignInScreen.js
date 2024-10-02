// SignInScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import PhoneInput from '../components/PhoneInput';    
import SubmitButton from '../components/SubmitButton';   
import { ValidateUSPhoneNumber, formatPhoneNumber } from '../components/phoneUtils'; 


export default function SignInScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePress = () => {
    if (isValid) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid phone number');
    }
  };

  const handleInputChange = (input) => {
    const formattedPhone = formatPhoneNumber(input);
    setPhoneNumber(formattedPhone);
    setIsValid(ValidateUSPhoneNumber(formattedPhone));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.separator} />
      <Text style={styles.subtitle}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <PhoneInput phoneNumber={phoneNumber} handleInputChange={handleInputChange} />
      <SubmitButton isValid={isValid} handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  separator: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#7e7e7e',
    marginBottom: 20,
    textAlign: 'left',
  },
});
