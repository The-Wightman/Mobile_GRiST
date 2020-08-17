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

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
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
          <KeyboardAwareScrollView>
          <Card style={styles.cards}title="My Patients">
                <Text style={styles.cardTextStyle}>From here a list of all patients for the selected group is visible, allowing for you to view all paticipants.</Text>
                <Text style={styles.cardTextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assesments for individual patients from the screen using the option on the table below.</Text>
          </Card>                 
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
width: '100%',
height: '70%',
alignContent: 'center',
justifyContent: 'center',
position: 'absolute',

},
TextStyle: {
color: Colors.Black.color,                
fontSize: Spacing.TextSizes.navText,
marginBottom: 10},

})