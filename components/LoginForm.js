import React, { useState, useEffect } from 'react';
import { View, TextInput, Alert, StyleSheet } from 'react-native';
import { IPADRESS, prod, render, COMOP_API_KEY } from '../config';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './button';
import theme from '../theme';

const LoginForm = ({ onSubmit }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const _storeData = async (userData) => {
    try {
      await AsyncStorage.setItem(
        'userData',
        JSON.stringify(userData)
      );
      console.log('Login data saved successfully');
      navigation.navigate('challenges');
    } catch (error) {
      console.error('Error saving login data:', error);
      Alert.alert('Error', 'Failed to save login data. Please try again.');
    }
  };

  const handleLogin = async () => {
    console.log(prod);
    let url = `${render}/api/v1/users/login`;

    try {
      console.log(url);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'comop-api-key': COMOP_API_KEY,
        },
        body: JSON.stringify({ identifier, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.data.user);
        console.log("Login successful");
        _storeData(data.data.user);
        onSubmit();

        setIdentifier('');
        setPassword('');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message);
        console.log("Login failed:", errorData.message);
    
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        value={identifier}
        onChangeText={setIdentifier}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <CustomButton title="Login" onPress={handleLogin} style={styles.button} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    ...theme.fieldStyles.input,
  },
  container: {
    ...theme.containerStyles.containerCenter,
  },

  button: {
    marginTop: 12,
  },
});
