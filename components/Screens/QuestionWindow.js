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
import AssessmentHeader from '../Sub-Comps/Navigation/AssesmentHeader'
import {Colors,Spacing} from '../../Styles/index'
import QuestionBoxTemplate from '../Sub-Comps/QuestionComponents/QuestionBoxes'
import QuestionSet from '../Sub-Comps/QuestionComponents/QuestionNodes'
import QuestionBox from '../Sub-Comps/QuestionComponents/QuestionBoxes';

const XMLnode1 = {code:"eg1",value:'scale',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How happy are you? ',help:'Measure thy happiness',prev:5,persistence: "Hard"}
const XMLnode2 = {code:"eg1",value:'nominal',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How sad are you? ',help:'Measure thy sadness',prev:"yes", persistence: "Soft",alert:"OH MY LAWD"}
const XMLnode3 = {code:"eg1",value:'integer',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How sad are you? ',help:'Measure thy sadness',prev:"yes", persistence: "Soft",alert:"OH MY LAWD"}
const XMLnode4 = {code:"eg1",value:'date-week',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How sad are you? ',help:'Measure thy sadness',prev:"yes", persistence: "Soft",alert:"OH MY LAWD"}
export default class QuestionWindow extends Component{ 
  constructor(props) {
    super(props);
    
  }

  render() {   
    this.items = QuestionSet.map((question, key) => <QuestionBox key={} {...item.id}/>);
        return(
          <View>          
          <AssessmentHeader/> 
          <View style={{flex:1, Height:'auto'}} >
                   
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
    marginTop: '25%',       
    width: '100%',    
    alignContent: 'center',
    justifyContent: 'center',    
    paddingBottom: '10%'

},
TextStyle: {
    color: Colors.DarkGreen.color,                
    fontSize: Spacing.TextSizes.navText
 }
})