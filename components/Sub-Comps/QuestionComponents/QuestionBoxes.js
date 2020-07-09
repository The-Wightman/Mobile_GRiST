//Function: Create a generic question box component
//Description: Create a new componenet that can be fed the xml document from the question list relevant to a single question
//             and allow both for inputs and visual display of all relevant information in a clean and efficient manner , 
//             through a single stackable card style component.
//Inputs: Object XMLnode, Style and navigation props
//Outputs: Component Questionbox 

//Import standard react and react native libraries
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity, 
    ColorPropType
} from 'react-native'
//import styling documents for text colors and images
import { Images,Colors,Typography,Spacing } from '../../../Styles'
//import 3rd party libraries for inputs such as sliders for better overall quality.
import { Slider,CheckBox } from 'react-native-elements';
//import sub componenets that are required to make a complete question box.
import IconBar from './IconBar'
import DetailsModal from './detailsModal'


// Create a new Questionbox object which handles information from previous pages and pass it this information through the props component
//Additionally create a state object within to handle the elements of the XML node that is passed through props.
export default class QuestionBox extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            Answer: "",
            Comment:"",
            Action: "", 
            value: "" ,
            userInput: "",
            yesBool: false,
            noBool: false,
            dkBool: false,
            actionModal:false,
            commentModal:false,          
                    
              }
              
            
    }
    //declare a function to take subcomponent modal answers and assign them to the state object for the question for later storage
    modalAnswer(Text){
        this.setState({userInput: Text})
    }
    //dismiss all modals and clear the usersInput so that any previous text saved is removed.
    clearModals(){
        this.setState({commentModal: false,actionModal: false, userInput: ""})
    }
    //call the modal for the user to provide further information based on which option was selected from the question box.
    summonModal(modal){
        if (modal == "comment") {
            this.setState({commentModal: !this.commentModal})
        }
        if (modal == "plan"){
            this.setState({actionModal: !this.actionModal})
        }
       
    }
    //declare a boolean and use it to check which of the modals was called and update either comment or plan with the provided user input.
     UpdateInformation(){
         let bool = true
        switch(bool){
        case this.state.actionModal = bool:
            this.state.Action = this.state.userInput
            break;
            case commentModal = bool:
            this.state.Comment = this.state.userInput
            break;
            default:
            
        }
    }
    //clear any previously given answer and reset the input of sliders to the default middle value if the type is slider.
    clearAnswer(){
        {if(this.props.value=="scale"){
            this.UpdateAnswer("")}
       else{
            this.checkboxAnswer("")
          }
      }
    }
    //set the answer for this question type to the given user value.
    UpdateAnswer(Answer){
        this.setState({Answer: Answer})
        
    }
    //Switch statement for overwriting the answers provided, expressly verbose due to having to give a new form to all elements for the visual display to update.
    checkboxAnswer(Answer){
        switch(Answer){
            case "YES":
            this.state.yesBool = true,
            this.state.noBool = false,
            this.state.dkBool = false
            break;
            case "NO":
                this.state.yesBool = false,
                this.state.noBool = true,
                this.state.dkBool = false
            break;
            case "DK":
                this.state.yesBool = false,
                this.state.noBool = false,
                this.state.dkBool = true
            break;
            default:
                this.state.yesBool = false,
                this.state.noBool = false,
                this.state.dkBool = false
        }
        //once switch statement finished and the variables are in the correct states update the actual state answer.
        this.setState({Answer: Answer})
        
    }
    //function for disp,laying the constructed component
    render() {        
        let Inputtype;
        let PreviousAnswer; 
        // if the question type is scaler it requires a slider to allow for input.       
        if(this.props.value == "scale"){
            //create a custom inputype object with a slider.
            //assign the values for the scale and question information from the XML node in the props object.
            Inputtype = (
            <View>    
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',paddingHorizontal: 20,paddingVertical:20 }}>
               <Slider
               //pull the current answer from the previous answer if it exists.
               value={this.props.prev}
               onValueChange={value => this.UpdateAnswer(value)}
               minimumValue={0}
               maximumValue={10}
               step={1} 
               animateTransitions={true} 
               thumbTintColor={Colors.DarkGreen.color}              
               />
            </View>
           <View style={styles.scaleLabel}>
           <Text style={styles.TextStyle}>{this.props.leftlabel}</Text>
           <Text style={styles.TextStyle}>Current Value: {this.state.Answer}</Text>
           <Text style={styles.TextStyle}> {this.props.rightlabel}</Text>
           </View>
           </View>
            )}
            //if the question is not scalar it is a checkbox question
            //create a usable input type with the 3rd party checkbox and icon library.
        else {
            //checked icon and unchecked icon denote the visual representation of the inputs, chosen as they closely match the online website version
            Inputtype = (
                <View style={styles.checkboxContainer}>
                <CheckBox  title='Yes' checked={this.state.yesBool} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color} onPress={() => this.checkboxAnswer("YES" )}/>
                <CheckBox  title='No' checked={this.state.noBool} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color} onPress={() => this.checkboxAnswer("NO" )}/>
                <CheckBox  title='Dont Know' checked={this.state.dkBool}  checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color}onPress={() => this.checkboxAnswer("DK")}/>
                </View>
            )
        }
        // if a previous answer exists proivde a display of it underneath the input type to remind the user of previously given information.
        if (this.props.prev){
            PreviousAnswer = (<Text style={styles.TextStyle}>Previous Answer: {this.props.prev}</Text>)            

        }      
        //once the component has benn set up return it to be displayed by the screen.
        return(
            <View style={{paddingVertical:6}}>
            <View style={styles.mainContainer}>
                <View style={styles.IconBar}> 
                <View style={{flex:1,maxWidth:'50%'}}>
                    <Text style={styles.MainQuestion}>{this.props.question}</Text> 
                </View>               
               <View > 
                   <IconBar persistence={this.props.persistence} alert={this.props.alert} help={this.props.help} summonModal={this.summonModal.bind(this)}/>                               
               </View>                                   
                </View>
                 {PreviousAnswer}
                 {Inputtype}
                 <TouchableOpacity onPress={() => this.clearAnswer()} >               
                    <View style={styles.IconBar}> 
                    <Image style={styles.Iconsize}source={Images.bin}/>
                    <Text style={styles.TextStyle}>Clear answer</Text>
                    </View>
                   
                </TouchableOpacity>
                <View>
                    <DetailsModal ref={(ref) => this.commentmodal = ref}  UpdateInformation={ this.UpdateInformation.bind(this)} modalVisible={this.state.commentModal} summonModal={this.clearModals.bind(this)} modalAnswer = {this.modalAnswer.bind(this)} type={"comment"} title={"Leave a comment"}/>
                    <DetailsModal ref={(ref) => this.planmodal = ref}  UpdateInformation={ this.UpdateInformation.bind(this)} modalVisible={this.state.actionModal} summonModal={this.clearModals.bind(this)} modalAnswer = {this.modalAnswer.bind(this)} type={"comment"} title={"Leave an action plan"}/>
                </View>
                </View>
          </View>
        )}
}
//stylesheet for component specific style overrides and as a hierarchical style sheet for sub components such as the iconbar and modals.
styles = StyleSheet.create({
    checkboxContainer: {
        alignItems: 'stretch', justifyContent: 'center', flexDirection:'row'
    },
    mainContainer:{
        borderWidth:1,
         borderColor:Colors.LightGrey.color,
         borderRadius: 15,
         backgroundColor: Colors.White.color,
         paddingVertical:10
    },
    TextStyle: {
        color: Colors.DarkGreen.color,                
        fontSize: Spacing.TextSizes.navText
     }, 
     MainQuestion:{
        color: Colors.DarkGreen.color,                
        fontSize: Spacing.TextSizes.FieldText
     },    
     scaleLabel:{
        alignItems: 'stretch', justifyContent: 'space-between', flexDirection:'row' 
     },
     centeredView: {
        
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        alignContent: 'center',
        paddingTop: '25%',
        position: 'absolute',
      },
      modalView: {
        minWidth:'90%',
        maxHeight:'100%',                
        borderWidth:2,
        marginHorizontal: '5%',
        backgroundColor: Colors.White.color,
        borderColor:Colors.LightGrey.color,
        borderRadius: 8,       
        alignItems: "center",
        shadowColor: Colors.DarkGrey.color,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: Colors.LightGreen.color,
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color:Colors.White.color,
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: '100%'
      },
      
      modalText: {
        color:Colors.LightGreen.color,
        marginBottom: 15,
        textAlign: "center"
      },
      TextInputStyle: {
        borderColor: Colors.LightGrey.color,
        borderWidth: 3,
        padding: 10,
        color: Colors.Black.color,        
        width: '75%',
        height:'60%',
        backgroundColor: Colors.White.color,
        
    },
    rack:{
        flex:4, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'
    },
    IconBar:{      
        flexDirection:'row',       
        minWidth:'50%',
        alignContent:'center',
        justifyContent:'center',
        paddingTop: 5

      },
      Iconstyle:{
          flex: 1,
          minWidth:30,
          minHeight:30,
          marginHorizontal:5
      },
      Iconsize:{
        minWidth:30,
        minHeight:30
      }
})
 