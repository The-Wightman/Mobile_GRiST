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
import UserProfile from '../userprofile'


export default function CustomDrawerContent(props) {   
      return (     
      <DrawerContentScrollView {...props} style={styles.ScrollView}>        
         <UserProfile/>
      <DrawerItemList {...props} />
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
      <TouchableOpacity style ={styles.opacity} onPress={() => alert('This modal will contain the break down information')}>
        <Text  style={styles.ButtonText}  >Help</Text>
      </TouchableOpacity>     

      </DrawerContentScrollView>
       
      
    );
  }
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
  