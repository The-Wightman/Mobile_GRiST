//Function: return downloads screen view and handle pdfs
//Description: Returns a screen of cards representing the pdfs stored in the program files.
//             allows for the user to open the files using an on device pdf system of thier choice through the android request handler.
//Inputs: ScreenProps (User specific information),NavProps (Page specific information)
//Outputs: PDF views, Render screen of all pdfs

//Common import statments for react native, sub components, & styles
import React, {Component} from 'react';
import { 
  StyleSheet,  
  View,  
  Dimensions, 
} from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,Spacing} from '../../Styles/index'
import {FunctionCard,cardTypes} from '../Sub-Comps/FunctionCard';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Create a new Downloads object which handles information from previous pages and pass it this information through the props component
export default class Downloads extends Component{ 
  constructor(props) {
    super(props);
    //define a starting state for this page when a user arrives, as well as its variables
    
  } 
// Call the card types array and for all pdf download cards add them to a new array.
  DownloadCards(){    
    let selectedCards = new Array();
    let index = 0;
    let foundCards = 0;
    for(index = 0; index < cardTypes.length; index++){
      if(cardTypes[index].type == "download"){
        selectedCards[foundCards] =  <View><FunctionCard {...cardTypes[index]}/></View>  
        foundCards++        
      }
   }
   //when the correct cards are found , add them to a view variable, then return that variable
   selectedCards = <View>{selectedCards}</View>  
    return selectedCards
  }  
  render() { 
    // if the page is not currently showing a PDF
    
      //Return the PDF card list view, calling the download cards function to load the scrolling view area.
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
//Page specific styling kept seperate as a style sheet to overwriet elements of the generic styling when necessary.
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
 },
 pdf: {
  flex:1,
  width:Dimensions.get('window').width,
  
}
})