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
import * as Navigators from './components/Sub-Comps'
import * as Screens from './components/Screens'

const Stack = createStackNavigator ();  
AppRegistry.registerComponent('Mobile_GRiST', () => Stack);
function SignIn() {
  return (
    <View>
      <Screens.Login />
    </View>
  );
}

export default function App() {
      return (        
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Sign In" >
          <Stack.Screen name="Sign In" component={SignIn}  />
          <Stack.Screen name="Landing" component={Navigators.ClinDrawer.Navigator} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }

  
