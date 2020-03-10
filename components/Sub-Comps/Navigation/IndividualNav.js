import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View,AppRegistry } from 'react-native';
import * as Screens from '../../Screens'
export const IndDrawer = createDrawerNavigator();

function LogoutScreen() {
  return (
    <View>
      <Screens.Login navigation={props.navigation}/>
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <Screens.LandingScreen/>
    </View>
  );
}
AppRegistry.registerComponent('Mobile_GRiST', () => IndDrawer);
export default function IndividualNav(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName={Screens.LandingScreen}>
          <Drawer.Screen name="My Profile" component={HomeScreen} />
          <Drawer.Screen name="Asessment" component={HomeScreen} />
          <Drawer.Screen name="My Plan" component={HomeScreen} />
          <Drawer.Screen name="Review" component={HomeScreen} />
          <Drawer.Screen name="Search" component={HomeScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }