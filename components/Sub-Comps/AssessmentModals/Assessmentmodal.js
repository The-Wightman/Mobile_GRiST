//Function: Component to be called when modals are needed in assessment
//Description: provide a text input region that can be attached to other componenets and called/dismissed
//             using both contact buttons on the component as well as through native gestures.
//Inputs: Props, Type
//Outputs: Modal object

//import standard react/react native libraries and styling.
import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";
import { Images,Colors,Typography,Spacing } from '../../../Styles'
import { Switch } from "react-native-gesture-handler";
import  {Key,Tips,Process,Indvhelp} from '../Text_Excerpts'

// Create a new modal object which handles information from previous pages and pass it this information through the props component
export default class AssessmentModal extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            Input: "",
            Type: ""
            
            } 
               
        }  
  

    render() { 
      let modalcontent
      let textExcerpt
    switch(this.props.modalType){
        case "key":
          textExcerpt = (<Key/>)
          break        
        case "tips":
          textExcerpt = (<Tips/>)
          break
        case "process":
          textExcerpt = (<Process/>)
          break
        case "indvhelp":
          textExcerpt = (<Indvhelp/>)  
        break
        default:
    }
    switch(this.props.modalType){         
      case "key":
      case "tips":
      case "process":
      case "indvhelp":
        modalcontent = (
          <View>
            {textExcerpt}                         
          <View style={styles.rack}>
          <TouchableHighlight style={styles.openButton}
            onPress={() => {                  
              this.props.setModalVisible(false)              
            }}>
            <Text style={styles.textStyle}>Go Back</Text>
          </TouchableHighlight>
          </View>
          </View>
        )
      break
      case "formulation":
      case "plan": 

        let preamble
        if (this.props.modalType == "Plan"){
          preamble = <Text>Use this box to record your thoughts about risk management as they emerge during the assessment.</Text>
        }
        else {
          preamble = <Text>Use this box to summarise your overall thoughts about the person's risk(s). Which ones need addressing? How quickly does action need to be taken? What past, present and persistent factors in the person's life are the main influences?</Text>
        }
        modalcontent = (
          <View>  
            {preamble}        
          <TextInput name="Answer"  multiline numberOfLines={4} style={styles.TextInputStyle} value={this.props.existing} onChangeText={(text) => { this.setState({ Input: text})}} />
          <View style={styles.rack}><TouchableHighlight
            style={styles.openButton}
            onPress={() => {  
              this.props.setModalVisible(false)              
              
             
            }}
          >
            <Text style={styles.textStyle}>Submit Changes</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.openButton}
            onPress={() => {                  
              this.props.setModalVisible(false)              
            }}>
            <Text style={styles.textStyle}>Go Back</Text>
          </TouchableHighlight>
          </View>
          </View>
        )     
      break
      case "judgement":
        modalcontent = (
          <View>          
           <Text>TESTING TESTING PLEASE RESPOND</Text>      
          <View style={styles.rack}>
          <TouchableHighlight style={styles.openButton}
            onPress={() => {                  
              this.props.setModalVisible(false)              
            }}>
            <Text style={styles.textStyle}>Go Back</Text>
          </TouchableHighlight>
          </View>
          </View>
        )
      break
      case "preview":
        modalcontent = (
          <View>          
           <Text>TESTING TESTING PLEASE RESPOND</Text>      
          <View style={styles.rack}>
          <TouchableHighlight style={styles.openButton}
            onPress={() => {                  
              this.props.setModalVisible(false)              
            }}>
            <Text style={styles.textStyle}>Go Back</Text>
          </TouchableHighlight>
          </View>
          </View>
        )
      break
      default:
        modalcontent = (
          <View>          
           <Text>An error has occured during the loading process or this feature is yet to be implemented, please consult the help documentation or get in touch using our online website.</Text>      
          <View style={styles.rack}>
          <TouchableHighlight style={styles.openButton}
            onPress={() => {                  
              this.props.setModalVisible(false)              
            }}>
            <Text style={styles.textStyle}>Go Back</Text>
          </TouchableHighlight>
          </View>
          </View>
        )
    }
      return (
    <View style={styles.centeredView}>
      <Modal
        //configure how the modal appears on screen and background settings.
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        //when the modal is closed provide an alert for the modal closing to the user
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.props.title}</Text>
            {modalcontent}
          </View>
        </View>
      </Modal>
      </View>
  );
};
// component specific styling
styles = StyleSheet.create({
  centeredView: {    
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    color:Colors.LightGreen.color,
    marginBottom: 15,
    textAlign: "center",
    fontSize: Spacing.TextSizes.FieldText,
  },
  TextInputStyle: {
    borderColor: Colors.LightGrey.color,
    borderWidth: 3,
    padding: 10,
    color: Colors.Black.color,        
    minWidth: '75%',
    height:'20%',
    backgroundColor: Colors.White.color,
    flex:1   

},
rack:{
  flex:1, alignItems: 'center', flexDirection:'row', alignContent:'center',justifyContent:'center', backgroundColor: "#111111",borderWidth:2,
}
})
}
