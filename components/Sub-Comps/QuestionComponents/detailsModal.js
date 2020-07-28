//Function: Take user input
//Description: Hide additional user inputs like comments and action plans but provide a dismissable input box when needed.
//Inputs: Component Props (Assessment questions box/Certain styling elements)
//Outputs: DetailModal modal.


//Import react native and react libraries
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

//Styles library import for adjustments at the component level.
import { Images,Colors,Typography,Spacing } from '../../../Styles'

// Create a new modal object which handles information from the parent component such as hierarchy and styling
export default class DetailModal extends React.Component{
    constructor(props) {
        super(props);
        //define a state object to store the users input
        this.state = {
            Input: "",                        
            } 
               
        }      
    
        //return the following to th screen
    render() { 
      
      return (
        //Create a new modal that uses the parents is visible boolean to set the visibility state
        //the props also contains the parents controls for modal toggling
        //an example of this can be found on lines 58 and 59 where the props update and props summon commands are used.
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.summonModal()          
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.props.title}</Text>
            <TextInput multiline numberOfLines={4} name="Answer" style={styles.TextInputStyle} value={this.props.existing} onChangeText={(text) =>  this.props.modalAnswer(text)} />
            <View style={styles.rack}><TouchableHighlight
              style={styles.openButton}
              onPress={() => {  
                this.props.UpdateInformation()
                this.props.summonModal()              
                
               
              }}
            >
              <Text style={styles.textStyle}>Submit Changes</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.openButton}
              onPress={() => {                  
                this.props.summonModal()              
              }}>
              <Text style={styles.textStyle}>Go Back</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
      </View>
  );
};
}
