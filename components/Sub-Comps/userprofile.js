//Function: 
//Description: 
//Inputs: 
//Outputs: 

import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        Button,
        TouchableOpacity,
        Alert} from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Colors,Images,Spacing,Buttons } from '../../Styles'
import * as ClientControls from './userOutline'

async function callUser(){          
      thisUser = await ClientControls._getClient()               
      return thisUser
    
}
export default class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    userUID: "" ,
    userName: "",    
    }
    
  }
 
    componentDidMount(){
    thisUser = callUser()
    .then( thisUser => this.statemanage(thisUser));
      
    }    
     statemanage(responsejson){        
        this.setState({userUID: responsejson.current_user.uid, userName: responsejson.current_user.name});
        }
    render() {      
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