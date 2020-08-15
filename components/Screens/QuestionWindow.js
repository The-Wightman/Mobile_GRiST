//Function: Provide an assessment window with inputs and control system
//Description: Render a complete assesment handling both the calling and storage of information as well as maintaining a structure for the question to update as the user provides more information.
//Inputs: String assessment type, Function closewindow
//Outputs: Assesment window render/Question window component.

//import standard react libraries
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,  
} from 'react-native';
//impiort the assesment header to control the question window.
import AssessmentHeader from '../Sub-Comps/Navigation/AssesmentHeader'
//call in application specific style sheets.
import {Colors,Spacing} from '../../Styles/index'
//fetch the question box componenet and question order xml and question node strings
import QuestionSet from '../Sub-Comps/QuestionComponents/QuestionNodes'
import QuestionBox from '../Sub-Comps/QuestionComponents/QuestionBoxes'
import workingage_xml_structure from '../Sub-Comps/QuestionComponents/Questionorder'
//import client controls to handle user information and savve assesments to hardware.
import * as ClientControls from '../Sub-Comps/userOutline'
//import moment for unique time ID information to be given to the assesments as they are saved.
import moment from 'moment';



export default class QuestionWindow extends Component{ 
  constructor(props) {
    super(props);  
    //create a state object to store the tracking variables and set them to empty. 
    this.state = {
      //store the questions as component jsx fragments so this array can be rendered without special treatment
      visibleQuestions: null,
      //store the questions with key and value information to allow them to be index more easily when re-organising the structure.
      visQuestObjects: null,
      //the way the XML parser module describes as best for inclusion in projects, even though import x as y from z is best practice for ES6 onwards.
      XMLParser: require('react-xml-parser'),
      XMLDocument: "",
      questionstructure: {},
      userAnswers: {}
    }
    
}
//when the component succesfully loads on scree update the question set and render the initial questions for the user to begin the assessment.
componentDidMount(){  
  var response = this.getIntialQuestions()  
  this.setState({visibleQuestions : response[0],questionstructure: response[1], visQuestObjects: response[2]});
  
}

 //function for updating the asnwer array storing all of the users currently given answers comments and actions.
 //inputs:Question code , answer details array
 //output: null
  submitAnswer(code,Array){   
      let updatedAnswers = this.state.userAnswers  // creating copy of state variable jasper
      updatedAnswers[code] = Array;                // update the name property, assign a new value                 
      this.setState({userAnswers: updatedAnswers}) // return new object jasper object
    
}
 //function for submitting the answers given in an assessment
 //inputs:String Type, denotes the type of process to use based on the user choice of ending the session
 //output: null
async answerHandler(Type){
  //fetch the users information and thier master assesment array stored in the hardware
  let getuser = await ClientControls._getClient()
  let getAssessments = await ClientControls._getAssessArray(getuser.current_user.uid) 
  //create a local manipulatable copy of the assessment answers.
  let storedAnswers = {...this.state.userAnswers} 
  //console.log(getAssessments)
  //console.log(storedAnswers) 
  //get trhe device current time and save it as the date information which will be used as the assessments unique key. 
  //set precision to the second incase of multiple submissions within a short period of time.
  var date = moment().utcOffset('+1.00').format('YYYY-MM-DD hh:mm:ss a');
  //in the event the user has no locally stored assessments then we must create the master array and wrap the first assessment with it. 
  //set a new assesment in the master assesment object using the date as the key and the answers as the value
  getAssessments[date] = storedAnswers
  //handle wether or not the window is closed and information is modified based on wether the user selected save,suspen or finish.
  switch(Type){
    case "save":
      //wait for the system to complete storing the information upon the local hardware using the store array async command.
      await ClientControls._storeAssessArray(getuser.current_user.uid,getAssessments)
      break
    case "suspend":
      //wait for the system to complete storing the information upon the local hardware using the store array async command.
      await ClientControls._storeAssessArray(getuser.current_user.uid,getAssessments)
      this.props.closeWindow()
        break
    case "finish":
      //wait for the system to complete storing the information upon the local hardware using the store array async command.
      await ClientControls._storeAssessArray(getuser.current_user.uid,getAssessments)
      this.props.closeWindow()
        break
    default:
  }

}
 //function Display the inital opening 6 questions provided by the systems master xml tree
 //inputs:null
 //output: Array OF arrays , [[JSX components],[Objects],[Objects]]
getIntialQuestions(){  
  //console.log("NEW RUN")
  //Create a new XML parser and then run the master XML document for working age adults through it to convert it into an object of objects in tree structure.
  var xmlObj = new this.state.XMLParser().parseFromString(workingage_xml_structure);
  //set this new object as a state variable to allow it to be accessed later without the need for reparsing  
  this.setState({XMLDocument: xmlObj}) 
  //define empty variables to stor the intial questions, the structure of the qeustion boxes, and the question structure values.
  var InitialQuestions = "";
  var BoxStructure = []
  var questionstructure = {}  
  //Map the children of the master xml object (6 questions) codes into the inital questions variable         
  InitialQuestions = xmlObj.children.map((question) => question.attributes.code)
  //let the labels for the questions be stored in a new variable called labels as an array.
  var labels = xmlObj.children.map((question) => question.attributes.label)
  //set box structure to equal the output of the XMLto Question function  
  BoxStructure = this.XMLtoQuestion(InitialQuestions,questionstructure,null,labels) 
  //copy the value in Boxstructure index 1 as a new variable before it is modified.
  var preSortBoxes = [...BoxStructure[0]]
 //for each element in the first index of boxstructure,set the value to be equal to the value stored in the key of that object.
  for(let x=0;x<BoxStructure[0].length;x++){ 
    BoxStructure[0][x] = BoxStructure[0][x].Question 
  }
  //return indexes 1 and 2 of the box structure and the pre sorted boxes variable.
  return [BoxStructure[0],BoxStructure[1],preSortBoxes]
  
}
 //function updating the currently visible questions in the correct order given the code of the just answered question
 //inputs:String code
 //output: Array of Arrays, [[Object],[Object]]
UpdateCurrentQuestions(Code){ 
  //acquire the xml node object for the provided user code with the existing state XML information.    
  var AnsweredNodeTree = this.XMLRestructurer(this.state.XMLDocument,Code)
  //store a local copy of the current question structure 
  var questionstructure = this.state.questionstructure
  //get the information about the parent from the existing question layer, checking it exists.
  var parentlayer = questionstructure[Code]
  //map the childrens question codes into an array
  var newQuestions = AnsweredNodeTree.children.map((question) => question.attributes.code)
  //map the childrens label strings into an array
  var labels = AnsweredNodeTree.children.map((question) => question.attributes.label)
  //generate new boxes for all of the children identified by the xml search.
  var newBoxes = this.XMLtoQuestion(newQuestions,questionstructure,parentlayer,labels)  
  //Get the old list of question boxes and add the new boxes to it 
  var oldBoxes = this.state.visQuestObjects
  var allBoxes = oldBoxes.concat(newBoxes[0])
  //updaste the question structure state to contain the new list of all questions.
 this.setState({questionstructure: newBoxes[1]})
 // find and sort the keys for all of the questions by thier layer code to give them the correct order
  let structurekeys = Object.values(newBoxes[1])
  structurekeys.sort()  
  //iterate over the current list finding the next question in the order list and adding them in turn to recreate the order in the questions array
  let sortedquestions = []
  for(let x=0;x<structurekeys.length;x++){ 
    sortedquestions[x] = this.searchforKey(structurekeys[x],allBoxes)     
  }
  //set the visible questions array to be the new sorted array, and the visible questions object information to be equal to the new master list.
  this.setState({visibleQuestions: sortedquestions,visQuestObjects:allBoxes});

}
 //function search an array of objects for a matching object key and then return that object
 //inputs:String Key, Array myarray
 //output: JSX fragment Question
searchforKey(nameKey, myArray){
  //for the length of my array 
  for (var i=0; i < myArray.length; i++) {
    //if the key value matches the given string
      if (myArray[i].key === nameKey) {
        //return that indexes question value.
          return myArray[i].Question;
      }
  }
}
//function search an array of objects for a matching key and then return that key
 //inputs:String Key, Array array
 //output: Filtered Array
  filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).find(k => o[k].toLowerCase() == string));
    }

 //function to take an object representation of an XML tree section and render the apropriate questions as questionbox components
 //inputs:Array Questioncodes, Array givenstructure, Int Layer, Array Labels.
 //output: Array of Arrays ,[[JSX fragments],[Objects]]
   XMLtoQuestion(questioncodes,givenstructure,curlayer,labels){
    // if the current layer provided is not given then it is set to 1, as it has no parent in the structure
    if (curlayer == null){
       curlayer = 1
     }
     //store a local copy of the structure keys
    let reducedcodes = []    
    let structurekeys = Object.keys(givenstructure)  
    //If the strcuture keys array is not null,0 length or undefined    
    if (Array.isArray(structurekeys) && structurekeys.length > 0){
    //for each of the question codes
    for(let x=0;x<questioncodes.length;x++){
      //if it does not currently exist in the question structure.
        if (!givenstructure[questioncodes[x]]){
          //add it to the list of codes that need questions.
          reducedcodes.push(questioncodes[x])
          
        }
    }   
    //set the question codes equal only to those not currently represented. 
    questioncodes = reducedcodes
    }
    // let the question structure equal the given strcuture.
    let questionstructure = givenstructure
    let generatedBoxes =[]
    //for every question code, find its node information in the question set if it exists.
    for(let entry of questioncodes){
      generatedBoxes.push(this.filterByValue(QuestionSet,entry))      
    }    
    //for each element in the generated boxes array
    for(let x=0;x<generatedBoxes.length;x++){      
     //if the node was found and stored
      if(generatedBoxes[x] != 0){
        //assign it a layer code to allow it to be sorted
      questionstructure[generatedBoxes[x][0].code] = curlayer + "0" + x
      //generate a question box using the node information as the question boxes props
      generatedBoxes[x] = {key:curlayer + "0" + x,
                           Question: <QuestionBox key={generatedBoxes[x][0].code}
                                                  submitAnswers={this.submitAnswer.bind(this)}
                                                  UpdateCurrentQuestions={this.UpdateCurrentQuestions.bind(this)}
                                                  {...generatedBoxes[x][0]} />}
      }
      // if the code does not have a corresponding node in the qeustion tree it is likely a filter question and simply needs a yes or no to if the user wants to see these questions.
      else{
        //assign it a layer code to allow it to be sorted
        questionstructure[questioncodes[x]] = curlayer + "0" + x
        //provide the basic prop information for the question box to default and assign it a code and key value.Set the question equal to the label information from the XML tree object.
        generatedBoxes[x] = {key: curlayer + "0" + x,
                             Question: <QuestionBox  key={questioncodes[x]} 
                                                     submitAnswers={this.submitAnswer.bind(this)}
                                                     UpdateCurrentQuestions={this.UpdateCurrentQuestions.bind(this)}
                                                     code={questioncodes[x]} question={"Answer further questions on " + labels[x] + " now?"}/>}
      }
    }
    //return the newly generated question boxes and the new question structure.
    return [generatedBoxes,questionstructure]
  
   }
   //check if the object is empty.
   isObjectEmpty(obj){
    return Object.getOwnPropertyNames(obj).length >= 1
 }  
 //function for finding the parent node from a given code and its children in an xml tree
 //inputs:xml object, attribute code
 //output: xml object where parent code = given code
   XMLRestructurer(object,Code){
     // this objects attributes code matches the searched value
    if (object.attributes.code == Code) {
        //this is the correct object return it.
        return object;
        //else for all of this objects children
    } else {      
        for (var child of object.children) {
               //call this function recursively to search through the tree     
            var objWithCode = this.XMLRestructurer(child, Code);
            
            if (this.isObjectEmpty(objWithCode)) {
                return objWithCode;
            }
        }
        // if the code cannot be found within this set of children return an empty object.
        return {}
    }
} 


  render() {      
       
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