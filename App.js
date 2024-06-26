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
import Newsletter from './screens/Newsletter';
import ChallengesDetails from './screens/challengesDetail';
import ChallengesCountdown from './screens/challengesCountdown';
import ChallengesActive from './screens/challengesActive';
import ChallengesImage from './screens/challengesImage';
import ChallengesProof from './screens/challengesProof';
import LeaderboardInfo from './screens/leaderboardInfo';
import ProfileSettings from './screens/profileSettings';
import About from './screens/about';
import ChallengesFinish from './screens/challengesFinish';
import FitpassInfo from './screens/fitpassInfo';
import FitpassMyRewards from './screens/fitpassMyRewards';
import FitpassMyReward from './screens/fitpassMyReward';
import FitpassReward from './screens/fitpassReward';
import LoadingScreen from './screens/loadingScreen';
import ChallengesCategoryTwo from './screens/challengesCategoryTwo';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
          <Stack.Screen name="Camera" component={cameraScreen} />
          <Stack.Screen name="gymConfirm" component={gymConfirm} />
          <Stack.Screen name="newsfeed" component={Newsfeed} />
          <Stack.Screen name="leaderboardInfo" component={LeaderboardInfo} />
          <Stack.Screen name="challenges" component={Challenges} />
          <Stack.Screen name="fitpass" component={Fitpass} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="signup" component={SignupScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="challengesCategoryOne" component={challengesCategoryOne} />
          <Stack.Screen name="newsfeedGymfeed" component={newsfeedGymfeed} />
          <Stack.Screen name="profileSettings" component={ProfileSettings} />
          <Stack.Screen name="termsAndConditions" component={TermsAndConditions} />
          <Stack.Screen name="privacyPolicy" component={PrivacyPolicy} />
          <Stack.Screen name="newsletter" component={Newsletter} />
          <Stack.Screen name="about" component={About} />
          <Stack.Screen name="fitpassReward" component={FitpassReward} />
          <Stack.Screen name="fitpassInfo" component={FitpassInfo} />
          <Stack.Screen name="fitpassMyRewards" component={FitpassMyRewards} />
          <Stack.Screen name="fitpassMyReward" component={FitpassMyReward} />
          <Stack.Screen name="challengesDetails" component={ChallengesDetails} />
          <Stack.Screen name="challengesCountdown" component={ChallengesCountdown} />
          <Stack.Screen name="challengesActive" component={ChallengesActive} />
          <Stack.Screen name="challengesImage" component={ChallengesImage} />
          <Stack.Screen name="challengesProof" component={ChallengesProof} />
          <Stack.Screen name="challengesFinish" component={ChallengesFinish} />
          <Stack.Screen name="loadingScreen" component={LoadingScreen} />
          <Stack.Screen name="challengesCategoryTwo" component={ChallengesCategoryTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
