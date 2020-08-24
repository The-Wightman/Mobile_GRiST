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
  Text,
  TouchableOpacity, 
  Alert} from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,MYstyle,Opacity} from '../../Styles/index'
import {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card,Button, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'
import Questionwindow from '../Screens/QuestionWindow'
import * as ClientControls from '../Sub-Comps/userOutline'
import {Picker} from '@react-native-community/picker';


export default class MyAssessment extends Component{ 
  constructor(props) {
    super(props);
    //create a state object to store the tracking variables and set them to empty.
    this.state = {
      CurrentOption: "Home",
      user:"",
      UID:"",
      assessmenttype:"working-age",
      offlinetypes: ["working-age"],
      onlineAssessments: [['2020-08-01, 4:23:23 pm', 'Complete'],['2020-08-04, 4:23:23 pm', 'Suspended'],['2020-08-11, 4:23:23 pm', 'Complete'],['2020-08-12, 4:23:23 pm', 'Complete']],
      offlineAssessments: '' 
      }      
  }
  async loadAssessData(){
    let getuser = await ClientControls._getClient()
    let UserUID = await ClientControls._getUID()
    console.log(UserUID)
    let previousoffline = await ClientControls._getAssessArray(getuser.current_user.uid)    
    this.setState({offlineAssessments: previousoffline,UID: UserUID})
    console.log(this.state.offlineAssessments) 
  } 
  //When the screen components are rendered,only information avaiable at call is shown, once display is complete the mount flag is checked.
  //once the flag is checked the component did mount function is automaitcally called.
  componentDidMount(){
    //get the current users role information from storage
    UserAdmin = ClientControls._getRole()    
    this.loadAssessData()    
    //once this is complete set the state for the user to match the role and set isloading to false.
    this.setState({user: UserAdmin})  
     
  }
  UpdateSelection(AssessType){
    if(this.state.offlinetypes.includes(this.state.assessmenttype)){
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
  else {
    Alert.alert("Assessment error","The assessment type you have chosen is not currently supported, this may be either due to a lack of internet connection or an outdated app version.")
  }
  this.loadAssessData()
  }
  dataFormatter(DataArray,Storage){
    let finalisedData =[]
    if(Storage == "local"){
    let arrayofKeys = Object.keys(DataArray)
    for(let x=0;x<arrayofKeys.length;x++){
      let addedbutton = (
        <TouchableOpacity  style={Opacity.opacity} onPress={() => this.DeleteEntry(arrayofKeys[x],'local')}>
          <View >
            <Text >Delete</Text>
          </View>
        </TouchableOpacity>) 
        let rowArray = []
        rowArray[1] = arrayofKeys[x]
        rowArray[2] = "Complete"   
        rowArray[3] = addedbutton
        finalisedData[x] = rowArray
      
    }
  }
  ///handle online information with an API call, currently unimplemented due to lack of API access.
  else {
    for(let x=0;x<DataArray.length;x++){
      let addedbutton = (
        <TouchableOpacity  style={Opacity.opacity} onPress={() =>  this.DeleteEntry(x,'online')}>
          <View >
            <Text >Delete</Text>
          </View>
        </TouchableOpacity>)    
      DataArray[x][3] = addedbutton
      finalisedData[x] = DataArray[x]
    }
  }  
    return finalisedData
  }
  DeleteEntry(key,Storage){
    if(Storage == 'online'){
      Alert.alert("Online Assessment","Currently due to either connection issues with the internet or the server the deletion of this assessment cannot be completed, please go online or contact support for further information and assistance")
    }
    else {      
      let localOffAssess = {...this.state.offlineAssessments}
      delete localOffAssess[key]
      console.log(this.state.UID)
      console.log(localOffAssess)
      ClientControls._storeAssessArray(this.state.UID,localOffAssess)
      Alert.alert("Process successful", "This offline assessment has been deleted and will not be uploaded, if the assesment still appears in local tables try refreshing the page.")
      this.setState({offlineAssessments: localOffAssess})
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
   let typepicker = (
    <Picker
      selectedValue={this.state.assessmenttype}
      style={{height: 75, width:'100%'}}
      onValueChange={(itemValue) => this.setState({assessmenttype: itemValue})
  }>
    <Picker.Item value="working-age" label="Working Age Adult" />
    <Picker.Item value="child-adolescent" label="Child/Young Person" />
    <Picker.Item value="older" label="Older Adult" />
    <Picker.Item value="service-user" label="Self Assessment" />
    <Picker.Item value="iapt" label="Therapy (eg IAPT)" />
    <Picker.Item value="learning-disabilties" label="Learning Disabilities" />
    <Picker.Item value="hybrid-forensic-working-age" label="Forensic Working Age Adult" />
    <Picker.Item value="hybrid-forensic-child-adolescent" label="Forensic Child/Young Person" />
    <Picker.Item value="hybrid-forensic-older" label="Forensic Older Adult" />
    <Picker.Item value="hybrid-forensic-service-user" label="Forensic Self Assessment" />
    <Picker.Item value="hybrid-veteran-working-age" label="Veteran Working Age Adult" />
    <Picker.Item value="hybrid-veteran-older" label="Veteran Older Adult" />
    <Picker.Item value="hybrid-veteran-service-user" label="Veteran Self Assessment" />
    <Picker.Item value="hybrid-substance-working-age" label="Substance Working Age Adult" />
    <Picker.Item value="hybrid-substance-child-adolescent" label="Substance Child/Young Person" />
    <Picker.Item value="hybrid-substance-older" label="Substance Older Adult" />
    <Picker.Item value="hybrid-substance-service-user" label="Substance Self Assessment" />
    <Picker.Item value="hybrid-informal-working-age" label="Informal Working Age Adult" />
    <Picker.Item value="hybrid-informal-child-adolescent" label="Informal Child/Young Person" />
    <Picker.Item value="hybrid-informal-older" label="Informal Older Adult" />
    <Picker.Item value="hybrid-emergency-working-age" label="Emergency Working Age Adult" />
    <Picker.Item value="hybrid-emergency-service-user" label="Emergency Self Assessment" />    
</Picker>
  )    
  let commoncontent = (
    <View>
        {introelement}
        <Card title="List of previous online assessments">
              <Text style={MYstyle.TextStyle}>This Table Displays a set of your most recent assessments, note that if you have completed a large number of assessments you may need to scroll down the table.</Text>
              <Text style={MYstyle.TextStyle}>If you have not previously completed an assessment using the system we advise you select the Practice assessment option below to familiarise yourself with the system.</Text>
              <CustomTable tableHead={['Date', 'Status', 'Delete']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={this.dataFormatter(this.state.onlineAssessments,'online')}></CustomTable>
        </Card>
        <Card title="List of previous offline assessments">
              <Text style={MYstyle.TextStyle}>This table only displays assessments completed locally that have not been submitted to the server</Text>
              <Text style={MYstyle.TextStyle}>If you have not completed any offline assesments or all of your assesments have been uploaded then this table may be blank</Text>
              <Text style={MYstyle.TextStyle}>For fixing errors in uncompleted assessments please use the online tool, for reports and comment diary switch to the My Plans and My reviews.</Text>
              <CustomTable tableHead={['Date', 'Status', 'Delete']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={this.dataFormatter(this.state.offlineAssessments,'local')}></CustomTable>
        </Card>
    </View>
  )
  let PracticeAssessment = (  
    <Card title="Start a practice assessment">
          <Text style={MYstyle.TextStyle}>Begin a practice assessment to introduce the system to you while not recording any data about your answers.</Text>
          <Text style={MYstyle.TextStyle}>Due to practice data not being recorded once a practice is closed its answers cannot be retrieved and the table of previous assessments will not be populated when a practice assessment is completed.</Text>
          {typepicker}
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
      {typepicker}
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
