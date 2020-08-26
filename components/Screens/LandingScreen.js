//Function: Present options to authorised users
//Description: render the landing page post succesful user authorisation, showing a list of actions relevant to that user type.
//Inputs: ScreenProps (User specific information),NavProps (Page specific information), Auth information
//Outputs: Render screen of authorised activites.

//Common import statments for react native, sub components, & styles
import React, {Component} from 'react';
import {  
  StyleSheet,
  ScrollView,
  View,
  Text, 
  Image 
} from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {FunctionCard,cardTypes} from '../Sub-Comps/FunctionCard';
import * as ClientControls from '../Sub-Comps/userOutline'
import {  Colors, Spacing, Images } from '../../Styles'
import {Card} from 'react-native-elements';

// Create a new Downloads object which handles information from previous pages and pass it this information through the props component
export default class signup extends Component{ 
  constructor(props) {
    super(props);
    //creat a state object for this instance and set isloading to true, with an empty variable for user information.
      this.state = {
        isLoading:true,
        user: ""        
      }
    
  }
  //When the screen components are rendered,only information avaiable at call is shown, once display is complete the mount flag is checked.
  //once the flag is checked the component did mount function is automaitcally called.
  componentDidMount(){
    //get the current users role information from storage
    UserAdmin = ClientControls._getRole()
    //once this is complete set the state for the user to match the role and set isloading to false.
    .then( UserAdmin => this.setState({user: UserAdmin, isLoading:false}))    
  }
  // once the user role is returned check if the users role is an administrator
  RelevantCards(role,searchkey){     
    let selectedCards = new Array();
    let index = 0;
    let foundCards = 0;
      for(index = 0; index < cardTypes.length; index++){                                 
        if (role == "administrator"){
          // if they are an admin find all options that are either admin or all user clearence
          if(cardTypes[index].type == "admin" || cardTypes[index].type =="all"){
              selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation} /></View>  
              foundCards++        
            }
         }
      else {
        //else if the user is not an admin find all and client user clearence
        if(cardTypes[index].type == "nonadmin" || cardTypes[index].type =="all"){
          selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation}/></View> 
          foundCards++       
        }
      }
      }  
      //load a variable with all the cards found after the search has completed, and return it.     
      selectedCards = <View>{selectedCards}</View>  
      return selectedCards     
      
          
  } 
  
  
  render() {    
    //if the page does not have the user information     
      if (this.state.isLoading) {
        //return a loading screen with a message telling the user to wait one moment while we fetch thier options
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
        //render checks at the screen refresh rate and updates only on change, so once isloading is changed
      } else {
        //return a view of the selected cards relevant to the users clearence and permitted activities.
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>          
          <DefaultTemplate/>          
          <View style={styles.screenPos}>   
          <ScrollView>            
            {this.RelevantCards(this.state.user,this.state.searchkey)}
          </ScrollView>            
           </View>
          </View>

        )
    }
  }
}
//Page specific styling kept seperate as a style sheet to overwriet elements of the generic styling when necessary.
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  TextStyle: {
    color: Colors.Black.color,
    textAlign: 'center',
    padding: 10,
    fontSize: Spacing.TextSizes.FieldText
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
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  height: '30%'
  
},
})