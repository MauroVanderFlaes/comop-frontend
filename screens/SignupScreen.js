import React from 'react';
import { View, Text, Alert, Image } from 'react-native';
import SignupForm from '../components/SignupForm';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import theme from '../theme';

const LogoImage = require('../assets/images/ComopLogo.png');

const SignupScreen = ({ navigation }) => {

  const goToLogin = () => {
    // Deze functie wordt uitgevoerd wanneer er op de link wordt geklikt
    navigation.navigate('login');
  };

  const onSubmit = () => {
    // Deze functie wordt uitgevoerd wanneer het formulier wordt ingediend
    console.log('Formulier ingediend');
    navigation.navigate('challenges');
  };

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
      <Text style={styles.title}>Signup</Text>
      <SignupForm onSubmit={onSubmit}/>
      <Text style={styles.text}>Already have an account? <Text style={{ color: 'blue' }} onPress={goToLogin}>Login</Text></Text>
    </View>
  );
}

export default SignupScreen;

const styles = {
  title: {
    ...theme.textStyles.customTitle,
  },
  logo: { 
    width: 140, 
    height: 32, 
    marginBottom: 20, 
    marginTop: -100 
  },

  text: {
    ...theme.textStyles.customText,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
};