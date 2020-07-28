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
            <QuestionBoxTemplate {...XMLnode1}/>
          <QuestionBoxTemplate {...XMLnode2}/>         
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
    color: Colors.DarkGreen.color,                
    fontSize: Spacing.TextSizes.navText
 }
})