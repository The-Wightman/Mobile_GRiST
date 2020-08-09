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
import QuestionBox from '../Sub-Comps/QuestionComponents/QuestionBoxes'
import workingage_xml_structure from '../Sub-Comps/QuestionComponents/Questionorder'

export default class QuestionWindow extends Component{ 
  constructor(props) {
    super(props);   
    this.state = {
      visibleQuestions: null,
      XMLParser: require('react-xml-parser'),
      XMLDocument: "",
      questionstructure: {}
    }
    
}
componentDidMount(){
  var response = this.getIntialQuestions()
  this.setState({visibleQuestions : response[0],questionstructure: response[1]});
}
getIntialQuestions(){  
  var xmlObj = new this.state.XMLParser().parseFromString(workingage_xml_structure); 
  this.setState({XMLDocument: xmlObj}) 
  var InitialQuestions = "";
  var BoxStructure = []
  var questionstructure = {}           
  InitialQuestions = xmlObj.children.map((question) => question.attributes.code)  
  BoxStructure = this.XMLtoQuestion(InitialQuestions,questionstructure)     
  return [BoxStructure[0],BoxStructure[1]]
  
}
UpdateCurrentQuestions(Code){
  var xml = new this.state.XMLParser().parseFromString(workingage_xml_structure); 
  console.log(Code)
  var AnsweredNodeTree = xml.getElementsByTagName(Code)
  console.log(AnsweredNodeTree)
  var questionstructure = this.state.questionstructure
  var parentlayer = questionstructure.Code
  var newQuestions = AnsweredNodeTree.children.map((question) => question.attributes.Code)
  newBoxes = this.XMLtoQuestion(newQuestions,questionstructure,parentlayer)
  
  var arr = questionstructure.getOwnPropertyNames(x)


  this.setState({visibleQuestions : newBoxes[0],questionstructure: newBoxes[1]});
  //for (var key in arr) {   
  //  
  //}
  //return null

}
  filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase() == string));
    }
   XMLtoQuestion(questioncodes,givenstructure,curlayer){
     if (curlayer == null){
       curlayer = 1
     }
     let questionstructure = givenstructure
    let generatedBoxes =[]
    for(let entry of questioncodes){
      generatedBoxes.push(this.filterByValue(QuestionSet,entry))
    }
    for(let x=0;x<generatedBoxes.length;x++){
      questionstructure[generatedBoxes[x][0].code] = curlayer + "." + x + "."
      generatedBoxes[x] = <QuestionBox key={generatedBoxes[x][0].code} UpdateCurrentQuestions={this.UpdateCurrentQuestions.bind(this)} {...generatedBoxes[x][0]} />
    } 
    console.log(questionstructure)
    return [generatedBoxes,questionstructure]
   }    


  render() {       
     let assessmentboxes = this.state.visibleQuestions 
         return(
          <View>          
          <AssessmentHeader/> 
          <View style={{flex:1, Height:'auto'}} >
                  {assessmentboxes}
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