import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View,AppRegistry } from 'react-native';
import * as Screens from '../Screens'
export const CDrawer = createDrawerNavigator();

AppRegistry.registerComponent('Mobile_GRiST', () => ClinDrawer);

export default function _ClinicianNav(){
    return (        
        <CDrawer.Navigator initialRouteName={"Landing"}>
          <CDrawer.Screen name="Landing" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Profile" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My patients" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Plan" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="Review" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="Search" component={Screens.LandingScreen.default} />          
          <CDrawer.Screen name="Logout" component={Screens.Login} />
        </CDrawer.Navigator>
     
    );
  }