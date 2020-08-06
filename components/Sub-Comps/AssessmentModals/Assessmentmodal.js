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
import  {GRiST_Process,Quick_Tips} from '../Text_Excerpts'

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
    switch(this.props.type){
      case "key":
      case "tips":
      case "process":
      case "indvhelp":
        modalcontent = (
          <View>
          <Text style={styles.modalText}>{this.props.title}</Text>
                  
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
      case "formulation":
      case "plan": 
        modalcontent = (
          <View>
          <Text style={styles.modalText}>{this.props.title}</Text>
          <TextInput name="Answer" style={styles.TextInputStyle} value={this.props.existing} onChangeText={(text) => { this.setState({ Input: text})}} />
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
      break
      case "preview":
      break
      default:

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    marginBottom: 15,
    textAlign: "center"
  },
  TextInputStyle: {
    borderColor: Colors.LightGrey.color,
    borderWidth: 3,
    padding: 10,
    color: Colors.Black.color,
    maxHeight: 50,
    width: '75%',
    backgroundColor: Colors.White.color,
    
},
rack:{
  flex:4, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'
}
})
}
