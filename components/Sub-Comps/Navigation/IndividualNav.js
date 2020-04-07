import * as React from 'react';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { AppRegistry,Text } from 'react-native';
import * as Screens from '../../Screens'
import {Colors} from '../../../Styles/index'
import CustomDrawerContent from './DrawerContainer'

export const IDrawer = createDrawerNavigator();

AppRegistry.registerComponent('eGRiST', () => IndDrawer);

export default function _IndividualNav(){
    return (
        <IDrawer.Navigator initialRouteName={"Landing"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={styles} screenProps={{navigation: this.navigation}}>
          <IDrawer.Screen name="Landing" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Profile" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Assessments" component={Screens.QuestionWindow} />
          <IDrawer.Screen name="My Plan" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="Review" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="Search" component={Screens.LandingScreen.default} />          
          </IDrawer.Navigator>
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