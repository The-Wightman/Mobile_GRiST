//Function:  Screen for handling the type and depth of an assessment the user wishes to undertake.
//Description: Provides both the ability to begin and continue assesments as well as information in regards to the types of assessments that can be performed. 
//             Filters can modify the types of questions that may be asked in tandem with configurations such as user type and previous assessments.
//Inputs: ScreenProps (User specific information),NavProps (Page specific information)
//Outputs: Render screen containing assessment

//import React & react native libraries
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

//Import SubComponents relevant to this pages view.
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
//Import style presets from the Styles document
import {Colors,Spacing} from '../../Styles/index'

// Create a new Assessment home object which handles information from previous pages and pass it this information through the props component
export default class AssessmentHome extends Component{ 
  constructor(props) {
    super(props);
    
  }
  //Return a render with the following information
  render() {   
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>
          
          <View style={styles.screenPos}>
          <Text style={styles.TextStyle}>MYProfile</Text>
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
    width: '100%',
    height: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
TextStyle: {
    color: Colors.DarkGreen.color,                
    fontSize: Spacing.TextSizes.navText
 }
})