//Function: Initial application Load control and non-authed navigation stack
//Description: App.js is called when the app is first deployed, it is the first screen and the default screen, it oversees creating the non authorised stack to allow users to login
//Inputs: None
//Outputs: StackNavigator Stack as constant, function Loginstack

//Import the native gesture handler
import 'react-native-gesture-handler';
//Import generic react native Library for registering app
import { 
  AppRegistry,  
} from 'react-native';

//Import all of react into the Application
import * as React from 'react';
//Import custom naivgation libraries which are exntensions to reacts basic navigation.
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Import user components that handle the various authorised navigations, and the screens related to the unauthed stack.
import * as Screens from './components/Screens'
import _ClinicianNav from './components/Sub-Comps/Navigation/ClinicianNav';
import _IndividualNav from './components/Sub-Comps/Navigation/IndividualNav';

//creat a new stack naviagator and bind it to the app as the default so that when the app is opened they initially call a create navigation container.
export const Stack = createStackNavigator ();  
AppRegistry.registerComponent('eGRiST', () => Stack);

//Export the screen list and the routes for the unauthed naviagtion stack, such that when each of these routes are requested in the unauthed domain ,the respective screen is returned.
export default function _LoginStack() {
      return (        
        <NavigationContainer>          
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Sign In" screenProps={{navigation: this.navigation}}>
          <Stack.Screen name="Sign In" component={Screens.Login}  />
          <Stack.Screen name="signup" component={Screens.signup}  />
          <Stack.Screen name="CLanding" component={_ClinicianNav} />
          <Stack.Screen name="ILanding" component={_IndividualNav} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

  
