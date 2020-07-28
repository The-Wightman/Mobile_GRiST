//Function: 
//Description: 
//Inputs: 
//Outputs: 

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Picker,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity, 
  Image 
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {FunctionCard,cardTypes} from '../Sub-Comps/FunctionCard';
import * as ClientControls from '../Sub-Comps/userOutline'
import {  Colors, Spacing, Images } from '../../Styles'
import {Card} from 'react-native-elements';

export default class Search extends Component{ 
  constructor(props) {
    super(props);
      this.state = {
        isLoading:true,
        user: "",
        searchkey: " "
      }
    
  }
  
  componentDidMount(){
    UserAdmin = ClientControls._getRole()
    .then( UserAdmin => this.setState({user: UserAdmin, isLoading:false})) 
  }
  RelevantCards(role){     
    let selectedCards = new Array();
    let index = 0;
    let foundCards = 0;
      for(index = 0; index < cardTypes.length; index++){                                 
        if (role == "administrator"){
          if((cardTypes[index].type == true || cardTypes[index].type =="both") && (cardTypes[index].Text.includes(this.state.searchkey) || cardTypes[index].Title.includes(this.state.searchkey))){
              selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation} /></View>  
              foundCards++        
            }
         }
      else {
        if((cardTypes[index].type == false || cardTypes[index].type =="both" ) && (cardTypes[index].Text.includes(this.state.searchkey) || cardTypes[index].Title.includes(this.state.searchkey))){
          selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation}/></View> 
          foundCards++       
        }
      }
      }  
      if (foundCards > 0){    
      selectedCards = <View>{selectedCards}</View>       
      return selectedCards 
      } else {
        selectedCards =  <View><Text style={styles.TextStyle}>Your search term didnt match any of the apps current functions </Text></View>
      }    
      return selectedCards


  } 
  
  
  render() {         
      if (this.state.isLoading) {
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>          
          <DefaultTemplate/>          
          <View style={styles.screenPos}>  
          <Card title="L O A D I N G">
              <Text style={styles.TextStyle}>One Moment while we fetch your options.</Text>
            <View style={styles.logo}>
              <Image source={Images.GristLogo} />
            </View>              
              </Card>                      
                   
           </View>
          </View>

        )
      } else {
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>          
          <DefaultTemplate/>          
          <View style={styles.screenPos}> 
          
          <ScrollView>            
            <Card title="Search">        
            <Text style={styles.TextStyle}>Please enter the desired feature</Text>
              <TextInput style={styles.TextInputStyle} onChangeText={(text) => { this.setState({searchkey: text})}}/> 
              </Card>
               {this.RelevantCards(this.state.user,this.state.searchkey)}
          </ScrollView>            
           </View>
          </View>

        )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  TextStyle: {
    color: Colors.Black.color,                
    fontSize: Spacing.TextSizes.navText,
    marginBottom: 10
 }, 
 TextInputStyle: {
  borderColor: Colors.LightGrey.color,
  borderWidth: 3,
  padding: 10,
  color: Colors.Black.color,
  maxHeight: 50, 
  backgroundColor: Colors.White.color,
  
},
  screenPos: {
    paddingTop: '15%',
    paddingBottom: '5%',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
Logo: {  
  width: '100%',
  height: '100%',
  alignContent: 'center',
  justifyContent: 'center',
  position: 'absolute',
},
})