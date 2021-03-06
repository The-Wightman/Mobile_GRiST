//Function: Navigation drawer for handling Individual user navigation
//Description: seperate User tier options from higher permission users through a custom navigator. 
//             Additionally allows for extendability of options through distinct navigators in future releases.
//Inputs: Drawer Content props, Navigation Props
//Outputs: Component IndDrawer, function _IndividualNav 

//import React & react native libraries
import * as React from 'react';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as Screens from '../../Screens'
import {NavStyle} from '../../../Styles/index'
//import custom drawer styling to allow for personally styled navigation tabs.
import CustomDrawerContent from './DrawerContainer'

// export Idrawer as a new drawer navigator when the app is loaded.
export const IDrawer = createDrawerNavigator();

//Function to return a custom setup loaded into the IDRAWER const.
export default function _IndividualNav(){
    return (
      //for the Idrawers new navigator, give it an initial route to use, and pass it the custom drawer style props 
      //then define a number of screen the drawer can navigate too and the names for the routes to be called to navigate to them. 
        <IDrawer.Navigator initialRouteName={"Home"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={NavStyle} screenProps={{navigation: this.navigation, isClin:false}} >
          <IDrawer.Screen name="Home" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Profile" component={Screens.MyProfile} />
          <IDrawer.Screen name="My Groups" component={Screens.MyGroups} />
          <IDrawer.Screen name="My Assessments" component={Screens.MyAssessment} />
          <IDrawer.Screen name="My Plan" component={Screens.MyPlan} />
          <IDrawer.Screen name="My Review" component={Screens.MyReview} />
          <IDrawer.Screen name="Search" component={Screens.Search} />                    
          </IDrawer.Navigator>
      );
  }
 