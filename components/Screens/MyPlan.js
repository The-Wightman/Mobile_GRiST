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
import {MYstyle,Opacity} from '../../Styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements'
import CustomTable from '../Sub-Comps/tableview'
import * as ClientControls from '../Sub-Comps/userOutline'

export default class MyPlan extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      tabledata: '',
      planInformation: []
    }
    
  }
  async loadAssessData(){
    let getuser = await ClientControls._getClient()
    let assessments = await ClientControls._getAssessArray(getuser.current_user.uid)
    this.setState({tabledata: assessments})    
  } 
  componentDidMount(){
    //get the current users role information from storage
    this.loadAssessData()        
  }  
  dataFormatter(DataArray){
    let finalisedData =[]
   let arrayofKeys = Object.keys(DataArray)
    for(let x=0;x<arrayofKeys.length;x++){
      let addedbutton = (
        <TouchableOpacity  style={Opacity.opacity} onPress={() =>  this.viewPlan(arrayofKeys[x])}>
          <View >
            <Text >View</Text>
          </View>
        </TouchableOpacity>) 
        let rowArray = []
        rowArray[1] = arrayofKeys[x]
        rowArray[2] = "Complete"   
        rowArray[3] = addedbutton
        finalisedData[x] = rowArray
      
    }
    return finalisedData
  }
  viewPlan(Index){
    var planArray = []
    var selectedAssessment = this.state.tabledata[Index]
    var questions = Object.keys(selectedAssessment)
    for(let x=0;x<questions.length;x++){
      let QuestionInfo = selectedAssessment[questions[x]]
      let formatteddata = (
        <View>
        <Text style={MYstyle.TextStyle}>Question: {QuestionInfo[1]} </Text>
        <Text style={MYstyle.TextStyle}>Question Code: {questions[x]} </Text>
        <Text style={MYstyle.TextStyle}>Your Answer: {QuestionInfo[0]}</Text>
        <Text style={MYstyle.TextStyle}>Your Comment: {QuestionInfo[2]} </Text>
        <Text style={MYstyle.TextStyle}>Your Plan: {QuestionInfo[3]}</Text>
        <Text style={MYstyle.TextStyle}> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
        </View>
      )
      planArray[x] = formatteddata
    }
    this.setState({planInformation: planArray})
    this.loadAssessData()
  }
render() { 
  let plancard = this.state.planInformation
    if(this.state.planInformation && this.state.planInformation.length){
        plancard = (
          <Card title="Selected Plan">
              {this.state.planInformation}
              </Card> 
        )
    }  
      return(
        <View >
        <MainHeadTemplate navigation={this.props.navigation}/>
        <DefaultTemplate/>
        
        <View style={MYstyle.screenPos}>
        <KeyboardAwareScrollView>
        
        <Card title="My Plan Page">
              <Text style={MYstyle.TextStyle}>Read & Review PDFS generated for you plans from previous assessments</Text>
              <Text style={MYstyle.TextStyle}>Plans are orderred from most recent assessment going down as you proceed down the table, older assessments may take slightly longer to load due to the age of information.</Text>
              <Text style={MYstyle.TextStyle}>If your assessments plans arent loading please contact support through either the App or at https://www.egrist.org/</Text>
              </Card>
              <Card title="Previous plans">
              <Text style={MYstyle.TextStyle}>This Table keeps a record of previous Plans to allow you to reference & review your submissions</Text>
              <CustomTable tableHead={['Date', 'Plan', 'Actions']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={this.dataFormatter(this.state.tabledata)}></CustomTable>
              <Text style={MYstyle.TextStyle}>Once a plan is selected its information will be loaded in a new window below this table.</Text>
              </Card> 
              {plancard} 
                          
        </KeyboardAwareScrollView>
        </View>          
        </View>

      )
  }
}
