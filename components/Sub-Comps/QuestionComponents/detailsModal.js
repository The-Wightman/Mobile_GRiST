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



export default class DetailModal extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            Input: "",                        
            } 
               
        }      
    

    render() { 
      return (
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
