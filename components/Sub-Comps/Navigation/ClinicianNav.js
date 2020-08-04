//Function: Navigation drawer for handling clinican user navigation
//Description: seperate clinicain tier options from other users by seperating them into a custom navigator only accessible from an authorised login. 
//             Additionally allows for extendability of options through distinct navigators in future releases.
//Inputs: Drawer Content props, Navigation Props
//Outputs: Component ClinDrawer, function _ClinicianNav

//import React & react native libraries
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Screens from '../../Screens'
import {NavStyle} from '../../../Styles/index'
//import custom drawer styling to allow for personally styled navigation tabs.
import CustomDrawerContent from './DrawerContainer'
import _IndividualNav from '../Navigation/IndividualNav';
// export Cdrawer as a new drawer navigator when the app is loaded.
export const CDrawer = createDrawerNavigator();

//Function to return a custom setup loaded into the CDRAWER const.
export default function _ClinicianNav(){
    return (     
      //for the cdrawers new navigator, give it an initial route to use, and pass it the custom drawer style props 
      //then define a number of screen the drawer can navigate too and the names for the routes to be called to navigate to them.  
        <CDrawer.Navigator initialRouteName={"Home"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={NavStyle} screenProps={{navigation: this.navigation, isClin:true}}>
          <CDrawer.Screen name="Home" component={Screens.LandingScreen.default} />
          <CDrawer.Screen name="My Profile" component={Screens.MyProfile} />
          <CDrawer.Screen name="My Patients" component={Screens.MyPatients} />
          <CDrawer.Screen name="Downloads" component={Screens.Downloads} />
          <CDrawer.Screen name="E-Grist Help" component={Screens.Help} />
          <CDrawer.Screen name="Search" component={Screens.Search} />
          <CDrawer.Screen name="ILanding" component={_IndividualNav} />                    
        </CDrawer.Navigator>
     
    );
  }
