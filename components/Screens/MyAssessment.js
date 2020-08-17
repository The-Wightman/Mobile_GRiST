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
import * as ClientControls from '../Sub-Comps/userOutline'


export default class MyAssessment extends Component{ 
  constructor(props) {
    super(props);
    //create a state object to store the tracking variables and set them to empty.
    this.state = {
      CurrentOption: "Home",
      user:""
      }      
  }
  //When the screen components are rendered,only information avaiable at call is shown, once display is complete the mount flag is checked.
  //once the flag is checked the component did mount function is automaitcally called.
  componentDidMount(){
    //get the current users role information from storage
    UserAdmin = ClientControls._getRole()
    //once this is complete set the state for the user to match the role and set isloading to false.
    .then( UserAdmin => this.setState({user: UserAdmin}))    
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
   let introelement= "" 
   if(this.state.user = "administrator"){
     introelement = (
     <Card style={MYstyle.cards}title="My Assessments">      
     <Text style={MYstyle.TextStyle}>From here a list of all assesments for the selected group is visible, allowing for you to view all assessments or begin a new practice/full assesment as the need demands.</Text>
     <Text style={MYstyle.TextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assessments for individual patients from the screen using the option on the table below.</Text>
     <Button 
          icon={<Icon name='code' color='#ffffff' />}
          buttonStyle={{ borderRadius: 8, marginTop:8, marginBottom: 8, backgroundColor:Colors.DarkGreen.color }}
          title='Return to Overview' onPress={() => this.props.navigation.navigate("CLanding",{screen: "My Patients"})} />
</Card> )
   } else {
    introelement = (
      <Card style={MYstyle.cards}title="My Assessments">      
      <Text style={MYstyle.TextStyle}>From here a list of all assesments for the selected group is visible, allowing for you to view all assessments or begin a new practice/full assesment as the need demands.</Text>
      <Text style={MYstyle.TextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assessments for individual patients from the screen using the option on the table below.</Text>
 </Card> )
   }
  let commoncontent = (
    <View>
        {introelement}
        <Card title="List of previous online assessments">
              <Text style={MYstyle.TextStyle}>This Table Displays a set of your most recent assessments, note that if you have completed a large number of assessments you may need to scroll down the table.</Text>
              <Text style={MYstyle.TextStyle}>If you have not previously completed an assessment using the system we advise you select the Practice assessment option below to familiarise yourself with the system.</Text>
              <CustomTable tableHead={['Date', 'Status', 'Delete']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]}></CustomTable>
        </Card>
        <Card title="List of previous offline assessments">
              <Text style={MYstyle.TextStyle}>This table only displays assessments completed locally that have not been submitted to the server</Text>
              <Text style={MYstyle.TextStyle}>If you have not completed any offline assesments or all of your assesments have been uploaded then this table may be blank</Text>
              <Text style={MYstyle.TextStyle}>For fixing errors in uncompleted assessments please use the online tool, for reports and comment diary switch to the My Plans and My reviews.</Text>
              <CustomTable tableHead={['Date', 'Status', 'Delete']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]}></CustomTable>
        </Card>
    </View>
  )
  let PracticeAssessment = (  
    <Card title="Start a practice assessment">
          <Text style={MYstyle.TextStyle}>Begin a practice assessment to introduce the system to you while not recording any data about your answers.</Text>
          <Text style={MYstyle.TextStyle}>Due to practice data not being recorded once a practice is closed its answers cannot be retrieved and the table of previous assessments will not be populated when a practice assessment is completed.</Text>
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
          <Questionwindow chosenAsstype={this.state.CurrentOption}/> 
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
          <Questionwindow chosenAsstype={this.state.CurrentOption} closeWindow={this.UpdateSelection.bind(this)}/> 
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
