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
      visQuestObjects: null,
      XMLParser: require('react-xml-parser'),
      XMLDocument: "",
      questionstructure: {}
    }
    
}
componentDidMount(){
  var response = this.getIntialQuestions()  
  this.setState({visibleQuestions : response[0],questionstructure: response[1], visQuestObjects: response[2]});
  
}
answerHandler(Type){
  switch(Type){
    case "save":
      break
    case "suspend":
      this.props.closeWindow()
        break
    case "finish":
      this.props.closeWindow()
        break
    default:
  }

}
getIntialQuestions(){  
  console.log("NEW RUN")
  var xmlObj = new this.state.XMLParser().parseFromString(workingage_xml_structure);  
  this.setState({XMLDocument: xmlObj}) 
  var InitialQuestions = "";
  var BoxStructure = []
  var questionstructure = {}           
  InitialQuestions = xmlObj.children.map((question) => question.attributes.code)
  var labels = xmlObj.children.map((question) => question.attributes.label)  
  BoxStructure = this.XMLtoQuestion(InitialQuestions,questionstructure,null,labels) 
  var preSortBoxes = [...BoxStructure[0]]
 
  for(let x=0;x<BoxStructure[0].length;x++){ 
    BoxStructure[0][x] = BoxStructure[0][x].Question 
  }
  return [BoxStructure[0],BoxStructure[1],preSortBoxes]
  
}
UpdateCurrentQuestions(Code){     
  var AnsweredNodeTree = this.XMLRestructurer(this.state.XMLDocument,Code) 
  var questionstructure = this.state.questionstructure
  var parentlayer = questionstructure[Code]
  var newQuestions = AnsweredNodeTree.children.map((question) => question.attributes.code)
  var labels = AnsweredNodeTree.children.map((question) => question.attributes.label)
  var newBoxes = this.XMLtoQuestion(newQuestions,questionstructure,parentlayer,labels)   
  var oldBoxes = this.state.visQuestObjects
  var allBoxes = oldBoxes.concat(newBoxes[0])
 this.setState({questionstructure: newBoxes[1]})
  let structurekeys = Object.values(newBoxes[1])
  structurekeys.sort()  
  let sortedquestions = []
  for(let x=0;x<structurekeys.length;x++){ 
    sortedquestions[x] = this.searchforKey(structurekeys[x],allBoxes)     
  }
  this.setState({visibleQuestions: sortedquestions,visQuestObjects:allBoxes});

}
searchforKey(nameKey, myArray){
  for (var i=0; i < myArray.length; i++) {
      if (myArray[i].key === nameKey) {
          return myArray[i].Question;
      }
  }
}
  filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).find(k => o[k].toLowerCase() == string));
    }
   XMLtoQuestion(questioncodes,givenstructure,curlayer,labels){
     if (curlayer == null){
       curlayer = 1
     }
    let reducedcodes = []    
    let structurekeys = Object.keys(givenstructure)      
    if (Array.isArray(structurekeys) && structurekeys.length > 0){
    for(let x=0;x<questioncodes.length;x++){
        if (!givenstructure[questioncodes[x]]){
          reducedcodes.push(questioncodes[x])
          
        }
    }    
    questioncodes = reducedcodes
    }
    let questionstructure = givenstructure
    let generatedBoxes =[]
    
    for(let entry of questioncodes){
      generatedBoxes.push(this.filterByValue(QuestionSet,entry))      
    }    
   
    for(let x=0;x<generatedBoxes.length;x++){      
     
      if(generatedBoxes[x] != 0){
      questionstructure[generatedBoxes[x][0].code] = curlayer + "0" + x
      generatedBoxes[x] = {key:curlayer + "0" + x, Question: <QuestionBox key={generatedBoxes[x][0].code} UpdateCurrentQuestions={this.UpdateCurrentQuestions.bind(this)} {...generatedBoxes[x][0]} />}
      }
      else{
        questionstructure[questioncodes[x]] = curlayer + "0" + x
        generatedBoxes[x] = {key: curlayer + "0" + x, Question: <QuestionBox  key={questioncodes[x]} UpdateCurrentQuestions={this.UpdateCurrentQuestions.bind(this)} code={questioncodes[x]} question={"Answer further questions on " + labels[x] + " now?"}/>}
      }
    }
    
    return [generatedBoxes,questionstructure]
  
   }
   isObjectEmpty(obj){
    return Object.getOwnPropertyNames(obj).length >= 1
 }  
   XMLRestructurer(object,Code){
    if (object.attributes.code == Code) {
        return object;
    } else {      
        for (var child of object.children) {
                    
            var objWithCode = this.XMLRestructurer(child, Code);
          
            if (this.isObjectEmpty(objWithCode)) {
                return objWithCode;
            }
        }
        return {}
    }
} 


  render() {      
    console.log(this.props.children)   
     let assessmentboxes = this.state.visibleQuestions 
         return(
          <View>          
          <AssessmentHeader type={this.props.chosenAsstype} answerHandler={this.answerHandler.bind(this)}/> 
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