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
        <CDrawer.Navigator initialRouteName={"Home"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={styles} screenProps={{navigation: this.navigation, isClin:true}}>
          <CDrawer.Screen name="Home" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Profile" component={Screens.MyProfile} />
          <CDrawer.Screen name="My patients" component={Screens.MyPatients} />
          <CDrawer.Screen name="Downloads" component={Screens.Downloads} />
          <CDrawer.Screen name="E-Grist Help" component={Screens.Help} />
          <CDrawer.Screen name="Search" component={Screens.Search} />          
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