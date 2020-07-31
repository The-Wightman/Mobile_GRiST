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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'

export default class MyAssessment extends Component{ 
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
        <Card style={styles.cards}title="My Assessments">
              <Text style={styles.cardTextStyle}>From here a list of all patients for the selected group is visible, allowing for you to view all paticipants.</Text>
              <Text style={styles.cardTextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assesments for individual patients from the screen using the option on the table below.</Text>
        </Card> 
        <Card title="List of previous assessments">
              <Text style={styles.TextStyle}>This Table Displays a set of your most recent assessments, note that if you have completed a large number of assesments you may need to scroll down the table.</Text>
              <Text style={styles.TextStyle}>If you have not previously completed an assessment using the system we advise you select the Practice assessment option below to familiarise yourself with the system.</Text>
              <CustomTable></CustomTable>
        </Card>
        <Card title="Start a New assessment">
              <Text style={styles.TextStyle}>Begin an assessment that can be used to generate action plans, advice, and be reviewed in the future.</Text>
              <Text style={styles.TextStyle}>Completed assessments may take a few minutes to appear in the table as a complete report is generated.</Text>
        </Card> 
        <Card title="Start a practice assesment">
              <Text style={styles.TextStyle}>Begin a practice assessment to introduce the system to you while not recording any data about your answers.</Text>
              <Text style={styles.TextStyle}>Due to practice data not being recorded once a practice is closed its answers cannot be reetrieved and the table of previous assessments will not be populated when a practice assessment is completed.</Text>
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