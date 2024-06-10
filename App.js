import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

// Importeer het thema
import theme from './theme';

// Importeer schermen
import gymConfirm from './screens/gymConfirm';
import Newsfeed from './screens/newsfeed';
import Challenges from './screens/challenges';
import Fitpass from './screens/fitpass';
import Profile from './components/profile';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/loginScreen';
import cameraScreen from './screens/cameraScreen';
import challengesCategoryOne from './screens/challengesCategoryOne';
import newsfeedGymfeed from './screens/newsfeedGymfeed';
import TermsAndConditions from './screens/TermsAndConditions';
import PrivacyPolicy from './screens/PrivacyPolicy';
import ChallengesDetails from './screens/challengesDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="Camera" component={cameraScreen} />
          <Stack.Screen name="gymConfirm" component={gymConfirm} />
          <Stack.Screen name="newsfeed" component={Newsfeed} />
          <Stack.Screen name="challenges" component={Challenges} />
          <Stack.Screen name="fitpass" component={Fitpass} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="signup" component={SignupScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="challengesCategoryOne" component={challengesCategoryOne} />
          <Stack.Screen name="newsfeedGymfeed" component={newsfeedGymfeed} />
          <Stack.Screen name="termsAndConditions" component={TermsAndConditions} />
          <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="challengesDetails" component={ChallengesDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
