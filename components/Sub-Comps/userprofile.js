//Function: Represent the user information currently loaded.
//Description: Hold user information in a session based object to prevent the need for consistent calls to the async storage.
//Inputs: Navigation Props
//Outputs: Userprofile object.

//import react and react native libraries
import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        Button,
        TouchableOpacity,
        Alert} from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
//Import style documents
import { Colors,Images,Spacing,Buttons } from '../../Styles'
//import storage access functions from clientcontrols
import * as ClientControls from './userOutline'

//create an async function to call client information without pausaing interactability of the page.
async function callUser(){ 
    //fetch the client information and once returned and completed return in the this user variable.         
      thisUser = await ClientControls._getClient()               
      return thisUser
    
}
//Create a new class that extends the react component and holds the current session user information
export default class UserProfile extends React.Component{
  //take the naivagation and user information props passed to the class
  constructor(props) {
    //and inherit the props of the calling class/function
    super(props);
    //create a new state object with emtpy varaibles to store the information.
    this.state = {
    userUID: "" ,
    userName: "",    
    }
    
  }
  //once the ismount flag is set componentdidmount is called, and executes.
    componentDidMount(){
    //use the async cal user function once the props have been loaded, using the classes state values to hold the returned information.
    thisUser = callUser()
    .then( thisUser => this.statemanage(thisUser));
      
    } 
    //handle the change of state when a response object is provided and update the internal state with most recent information.   
     statemanage(responsejson){        
        this.setState({userUID: responsejson.current_user.uid, userName: responsejson.current_user.name});
        }
        //render the visual element of the class.
    render() { 
      //return the following JS styled subcomponent.     
      return (
        <View style={styles.mainContainer}>
          <View style={styles.mainContainer}>
            <View style={styles.ImageCont}>
              <Image source={Images.DefaultProfile} style={styles.Image}/>
            </View>
          <View style={styles.Container}>
            <Text style={styles.Text}>{this.state.userName}</Text>
            <Text style={styles.Text}>{this.state.userUID}</Text>
          </View>
        </View>
        </View>
      )}     
}
//component specific styling
const styles = StyleSheet.create({
    opacity:{alignItems: 'flex-start', justifyContent: 'flex-start',marginHorizontal: 10,marginVertical: 5 , padding: 10,backgroundColor:Colors.DarkGreen.color, width: '92%',minHeight:'5%', borderRadius: 8},
    Text:{fontSize: Spacing.TextSizes.FieldText, color: Colors.White.color},
    ButtonText:{fontSize: Spacing.TextSizes.navText, color: Colors.White.color},
    Container:{alignItems: 'center', justifyContent: 'center',  paddingTop: 25},
    ImageCont:{height: '15%',alignItems: 'center', justifyContent: 'center'},
    Image: { width: 100, height:100, borderRadius: 75/2 },
    mainContainer: {backgroundColor: Colors.LightGrey.color ,alignItems: 'center', justifyContent: 'center'},
    ScrollView:{backgroundColor: Colors.LightGrey.color, height:'100%'}
  })