import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Picker,
  StatusBar,
  TextInput,
  Button,
  AppRegistry,  
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './components/Screens'
import _ClinicianNav from './components/Sub-Comps/Navigation/ClinicianNav';
import _IndividualNav from './components/Sub-Comps/Navigation/IndividualNav';

export const Stack = createStackNavigator ();  
AppRegistry.registerComponent('Mobile_GRiST', () => Stack);

export default function App() {
      return (        
        <NavigationContainer>          
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn" screenProps={{navigation: this.navigation}}>
          <Stack.Screen name="Sign In" component={Screens.Login}  />
          <Stack.Screen name="signup" component={Screens.signup}  />
          <Stack.Screen name="CLanding" component={_ClinicianNav} />
          <Stack.Screen name="ILanding" component={_IndividualNav} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

  
