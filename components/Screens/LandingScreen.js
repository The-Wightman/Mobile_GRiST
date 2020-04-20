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

export default class signup extends Component{ 
  constructor(props) {
    super(props);
      this.state = {
        isLoading:true,
        user: ""
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
          if(cardTypes[index].type == true || cardTypes[index].type =="both"){
              selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation} /></View>  
              foundCards++        
            }
         }
      else {
        if(cardTypes[index].type == false || cardTypes[index].type =="both"){
          selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} navigation={this.props.navigation}/></View> 
          foundCards++       
        }
      }
      }       
      selectedCards = <View>{selectedCards}</View>  
      return selectedCards     
      
          
  } 
  
  
  render() {         
      if (this.state.isLoading) {
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>          
          <DefaultTemplate/>          
          <View style={styles.screenPos}>                        
            <Text style={styles.TextStyle}>One Moment while we fetch your options.</Text>
            <View style={styles.logo}>
              <Image source={Images.GristLogo} />
              </View>
            
                      
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
            {this.RelevantCards(this.state.user)}
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