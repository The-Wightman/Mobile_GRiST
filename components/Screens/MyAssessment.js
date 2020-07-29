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

export default class MyAssessment extends Component{ 
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
      <Card title="My Assessments">
            <Text style={styles.TextStyle}>Choose what style of assessment you would like to undertake from the options below.</Text>
            <Text style={styles.TextStyle}>If you have already started an assessment then it should be rejoinable from the Current assessment option.</Text>
            <Text style={styles.TextStyle}>Dont forget you can perform an assessment at any time if you feel it may help or previous answers to questions are now incorrect or inaccurate.</Text>
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