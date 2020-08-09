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
      questionstructure: {}
    }
    
}
componentDidMount(){
  var response = this.getIntialQuestions()
  this.setState({visibleQuestions : response[0],questionstructure: response[1]});
}
UpdateCurrentQuestions(Code){
  var xml = new this.state.XMLParser()
  var AnsweredNodeTree = xml.getElementsByTagName('Name')
  return null

}
getIntialQuestions(){  
  var xmlObj = new this.state.XMLParser().parseFromString(workingage_xml_structure);  
  var InitialQuestions = "";
  var assessmentboxes2 = []
  var questionstructure = {}           
  InitialQuestions = xmlObj.children.map((question) => question.attributes.code)  
  for(let entry of InitialQuestions){
    assessmentboxes2.push(this.filterByValue(QuestionSet,entry))
  }
  for(let x=0;x<assessmentboxes2.length;x++){
    assessmentboxes2[x] = <QuestionBox key={assessmentboxes2[x][0].code} {...assessmentboxes2[x][0]}/>
  }      
  return [assessmentboxes2,questionstructure]
  
}
  filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase() == string));
        
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