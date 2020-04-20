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
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,Spacing} from '../../Styles/index'
import {FunctionCard,cardTypes} from '../Sub-Comps/FunctionCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Downloads extends Component{ 
  constructor(props) {
    super(props);
    
  }
  DownloadCards(){
    let selectedCards = new Array();
    let index = 0;
    let foundCards = 0;
    for(index = 0; index < cardTypes.length; index++){
      if(cardTypes[index].type == "download"){
        selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]} /></View>  
        foundCards++        
      }
   }
   selectedCards = <View>{selectedCards}</View>  
    return selectedCards
  }
  render() {   
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>          
          <View style={styles.screenPos}>
          <KeyboardAwareScrollView>
            {this.DownloadCards()}
          </KeyboardAwareScrollView>
          </View>
          </View>

        )
    }
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
      fontSize: 24,
      color: 'black'
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
TextStyle: {
    color: Colors.DarkGreen.color,                
    fontSize: Spacing.TextSizes.navText
 }
})