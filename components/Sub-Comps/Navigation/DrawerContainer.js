//Function: Custom drawer styling
//Description: Handling styling and formatting of navigation drawers to allow for more apropriate styling. 
//             Additionally allows for extnesion of drawer functionality to include a logout and alert functionality.
//Inputs: NavigationContainer Drawer, Style props
//Outputs: function CustomDrawerContent ,Drawer content view

//import React & react native libraries
import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        Button,
        TouchableOpacity,
        Alert} from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Colors,Images,Spacing,Buttons } from '../../../Styles'

//import functions for fetching user information from profile and outline classes.
import UserProfile from '../userprofile'
import * as ClientControls from '../userOutline'

//export function to create custom drawer content to be called by any navigation drawers in the application.
//comments are not done inline due to issues with common commenting practice {{-- --}} not being recognised by EXPO
export default function CustomDrawerContent(props) {  
  const prop2 = props;
  prop2.state.routes = prop2.state.routes.slice(0,7);
      return (     
        //take the style props passed to this compenent function and set them as the props of this function
        //this is then repeated on line 32 to ensure the itemlist also has the same props
        //line 37 to 48 are a replication of a similar logout function called by holding the icon on the login screen.
      <DrawerContentScrollView {...props} style={styles.ScrollView}>             
         <View style={styles.Container}>
           <UserProfile/>
        </View>          
      <DrawerItemList {...prop2} />      
      <TouchableOpacity style ={styles.opacity} onPress={()=>
        Alert.alert(
          'Log out',
          'Do you want to logout?',
          [
            {text: 'Cancel', onPress: () => {return null}},
            {text: 'Confirm', onPress: () => {
              fetch('http://public-grist-test.aston.ac.uk/user/logout?q=user/logout', {
                method: 'GET',
                header: "Content-Type : application/json",
              }).then(props.navigation.navigate('Sign In'))
              ClientControls._clearClient()
            }},
          ],
          { cancelable: false }
        )  
      }>
        <Text style={styles.ButtonText}>Logout</Text>
      </TouchableOpacity >
      </DrawerContentScrollView>
       
      
    );
  }
  //component specific styling
  const styles = StyleSheet.create({
    opacity:{alignItems: 'flex-start', justifyContent: 'flex-start',marginHorizontal: 10,marginVertical: 5 , padding: 10,backgroundColor:Colors.DarkGreen.color, width: '92%',minHeight:'5%', borderRadius: 8},
    Text:{fontSize: Spacing.TextSizes.FieldText, color: Colors.White.color},
    ButtonText:{fontSize: Spacing.TextSizes.navText, color: Colors.White.color},
    Container:{alignItems: 'center', justifyContent: 'center',  paddingTop: 25},
    ImageCont:{height: '15%',alignItems: 'center', justifyContent: 'center'},
    Image: { width: 75, height: 75, borderRadius: 75/2 },
    mainContainer: {backgroundColor: Colors.LightGrey.color ,alignItems: 'center', justifyContent: 'center'},
    ScrollView:{backgroundColor: Colors.LightGrey.color, height:'100%'}
  })
  