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
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,Spacing} from '../../Styles/index'
import QuestionBoxTemplate from '../Sub-Comps/QuestionComponents/QuestionBoxes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';

const XMLnode1 = {value:'scale',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How happy are you? ',help:'Measure thy happiness',prev:5,persistence: "Hard"}
const XMLnode2 = {value:'value',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How sad are you? ',help:'Measure thy sadness',persistence: "Soft",alert:"OH MY LAWD",prev:"yes"}

export default class MyPatients extends Component{ 
  constructor(props) {
    super(props);
    
  }
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
    height: '90%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
questionTextStyle: {
    color: Colors.DarkGreen.color,                
    fontSize: Spacing.TextSizes.navText
 },
 cardTextStyle:{
  color: Colors.Black.color,                
  fontSize: Spacing.TextSizes.navText,
  marginBottom: 10
 },
 cards:{
   paddingBottom:50,
   marginBottom:20
 }
})