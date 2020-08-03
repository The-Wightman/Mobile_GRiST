//Function: 
//Description: 
//Inputs: 
//Outputs: 

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  View,
  Text } from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,MYstyle} from '../../Styles/index'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card,Button, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'
import Questionwindow from '../Screens/QuestionWindow'

export default class MyAssessment extends Component{ 
  constructor(props) {
    super(props);
    //create a state object to store the tracking variables and set them to empty.
    this.state = {
      CurrentOption: "Home"
      }      
  }
  UpdateSelection(AssessType){
    switch(AssessType){
      case "Practice":
        this.setState({CurrentOption: "Practice"})
      break;
      case "Full":
        this.setState({CurrentOption: "Full"})
      break;
      default:
        this.setState({CurrentOption: "Home"})
    }
  }
  
 //Return a render with the following information
 render() { 
  let commoncontent = (
    <View>
    <Card style={MYstyle.cards}title="My Assessments">
              <Text style={MYstyle.cardTextStyle}>From here a list of all patients for the selected group is visible, allowing for you to view all paticipants.</Text>
              <Text style={MYstyle.cardTextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assessments for individual patients from the screen using the option on the table below.</Text>
        </Card> 
        <Card title="List of previous assessments">
              <Text style={MYstyle.TextStyle}>This Table Displays a set of your most recent assessments, note that if you have completed a large number of assessments you may need to scroll down the table.</Text>
              <Text style={MYstyle.TextStyle}>If you have not previously completed an assessment using the system we advise you select the Practice assessment option below to familiarise yourself with the system.</Text>
              <CustomTable tableHead={['Head', 'Head2', 'Head3', 'Head4']}  tableTitle={['Title', 'Title2', 'Title3', 'Title4']} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]}></CustomTable>
        </Card>
    </View>
  )
  let PracticeAssessment = (  
    <Card title="Start a practice assessment">
          <Text style={MYstyle.TextStyle}>Begin a practice assessment to introduce the system to you while not recording any data about your answers.</Text>
          <Text style={MYstyle.TextStyle}>Due to practice data not being recorded once a practice is closed its answers cannot be reetrieved and the table of previous assessments will not be populated when a practice assessment is completed.</Text>
          <Button 
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:Colors.DarkGreen.color }}
          title='Start Practice' onPress={() => this.UpdateSelection("Practice")} />
    </Card>     
  )
  let FullAssessment = (
    <Card title="Start a New assessment" style={{MarginBottom:50}}>
      <Text style={MYstyle.TextStyle}>Begin an assessment that can be used to generate action plans, advice, and be reviewed in the future.</Text>
      <Text style={MYstyle.TextStyle}>Completed assessments may take a few minutes to appear in the table as a complete report is generated.</Text>
      <Button 
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:Colors.DarkGreen.color }}
        title='Start Assessment' onPress={() => this.UpdateSelection("Full")} />
    </Card>
  )
   switch(this.state.CurrentOption){
    case "Practice":
      PracticeAssessment = (
      <Card style={{flex:0}}>
        <Button 
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 10, backgroundColor:Colors.DarkGreen.color }}
        title='Close Assessment' onPress={() => this.UpdateSelection("Home")} />
        <ScrollView>
          <Questionwindow/> 
        </ScrollView>
             
      </Card>)        
    break;
    case "Full":
      FullAssessment = (
      <Card>
        <Button 
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 10, backgroundColor:Colors.DarkGreen.color }}
        title='Close Assessment' onPress={() => this.UpdateSelection("Home")} />
        <ScrollView>
          <Questionwindow/> 
        </ScrollView>     
      </Card>)
    break;
    default: 
         
  }      
  return(
    <View >
    <MainHeadTemplate navigation={this.props.navigation}/>
    <DefaultTemplate/>
    <View style={MYstyle.screenPos}>
        <KeyboardAwareScrollView>
        {commoncontent}
        {PracticeAssessment}
        {FullAssessment}                           
        </KeyboardAwareScrollView>
        </View>      
    </View>          
    
  )
}
}
