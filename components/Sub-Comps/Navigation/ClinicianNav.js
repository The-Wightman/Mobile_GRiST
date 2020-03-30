import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { View,AppRegistry} from 'react-native';
import * as Screens from '../../Screens'
import {Colors} from '../../../Styles/index'
import CustomDrawerContent from './DrawerContainer'
export const CDrawer = createDrawerNavigator();

AppRegistry.registerComponent('eGRiST', () => ClinDrawer);




export default function _ClinicianNav(){
    return (        
        <CDrawer.Navigator initialRouteName={"Landing"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={styles} screenProps={{navigation: this.navigation}}>
          <CDrawer.Screen name="Landing" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Profile" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My patients" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Plan" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="Review" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="Search" component={Screens.LandingScreen.default} />          
        </CDrawer.Navigator>
     
    );
  }

  const styles = ({
    activeTintColor : Colors.White.color,
    activeBackgroundColor: Colors.LightGreen.color,
    inactiveTintColor: Colors.White.color,
    inactiveBackgroundColor: Colors.DarkGreen.color,
    itemStyle: { marginVertical: 5 },
    contentContainerStyle: {backgroundColor:Colors.LightGrey.color }
  })