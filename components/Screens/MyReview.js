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
  Alert,  
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {MYstyle,Opacity} from '../../Styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'
import * as ClientControls from '../Sub-Comps/userOutline'

export default class MyReview extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      tabledata: '',
      reviewInformation: []
    }
  }
  async loadAssessData(){
    let getuser = await ClientControls._getClient()
    let assessments = await ClientControls._getAssessArray(getuser.current_user.uid)
    this.setState({tabledata: assessments})     
  } 
  componentDidMount(){
    //get the current users assessment information from storage    
    this.loadAssessData()      
  } 
  dataFormatter(DataArray){
    let finalisedData =[]
   let arrayofKeys = Object.keys(DataArray)
    for(let x=0;x<arrayofKeys.length;x++){
      let addedbutton = (
        <TouchableOpacity  style={Opacity.opacity} onPress={() =>  this.viewReview()}>
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
  viewReview(Index){
    this.setState({reviewInformation: ["error"]})    
    Alert.alert("Review Reports","Reports are not held locally to provide an additional layer of security for your or your patients personal information, please establish an internet connection.")
  }
  render() {   
    let reviewcard
    switch(this.state.reviewInformation[0]){
      case "error":
        reviewcard = (
          <Card title="Selected Review">
              <Text style={MYstyle.TextStyle}>The review you have selected is unavailable due to either connectivity or security reasons, please try again later.</Text>
              </Card> 
        )
      break;
      case "test":
        reviewcard = (
          <Card title="Selected Review">
              <Text style={MYstyle.TextStyle}>Test Card</Text>
              </Card> 
        )
      break;
      default:
        reviewcard = (null)
    }   
    
    return(
      <View >
      <MainHeadTemplate navigation={this.props.navigation}/>
      <DefaultTemplate/>
      
      <View style={MYstyle.screenPos}>
      <KeyboardAwareScrollView>
      <Card title="My Reviews">
              <Text style={MYstyle.TextStyle}>Read & Review PDFS generated for you plans from previous assessments</Text>
              <Text style={MYstyle.TextStyle}>Plans are orderred from most recent assessment going down as you proceed down the table, older assessments may take slightly longer to load due to the age of information.</Text>
              <Text style={MYstyle.TextStyle}>If your assessments plans arent loading please contact support through either the App or at https://www.egrist.org/</Text>
              </Card>   
              <Card title="Previous Reviews">
              <Text style={MYstyle.TextStyle}>This Table keeps a record of previous Reviews to allow you to reference your submissions and re-familiarise yourself with previous answers or Key concerns.</Text>
              <CustomTable tableHead={['Date', 'Plan', 'Actions']} headflex={[1, 1, 1]} dataflex={[1, 1, 1]} tableData={this.dataFormatter(this.state.tabledata)}></CustomTable>
              <Text style={MYstyle.TextStyle}>Once a review is selected its information will be loaded in a new window below this table.</Text>
              </Card>   
              {reviewcard}              
      </KeyboardAwareScrollView>
      </View>          
      </View>

    )
}
}
