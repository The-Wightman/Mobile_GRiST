import * as React from 'react';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View,AppRegistry,Text } from 'react-native';
import * as Screens from '../../Screens'
import { Typography, Colors } from '../../../Styles/index'
export const IDrawer = createDrawerNavigator();

AppRegistry.registerComponent('eGRiST', () => IndDrawer);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{backgroundColor:Colors.LightGrey.color}}>
      <Text>E Grist Mobile</Text>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('This modal will contain the break down information')} />
    </DrawerContentScrollView>
  );
}

export default function _IndividualNav(){
    return (
        <IDrawer.Navigator initialRouteName={"Landing"} drawerContent={props => CustomDrawerContent(props)} drawerType="slide" drawerContentOptions={styles} screenProps={{navigation: this.navigation}}>
          <IDrawer.Screen name="Landing" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Profile" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Asessments" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="My Plan" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="Review" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="Search" component={Screens.LandingScreen.default} />
          <IDrawer.Screen name="Logout" component={Screens.LandingScreen.default} />
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