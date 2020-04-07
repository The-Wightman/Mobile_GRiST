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

export default class AssessmentModal extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
            Input: "",
            Type: "",
            modalVisible: false
            } 
               
        }    
    setModalVisible(){
      this.setState({modalVisible: !modalVisible})
    }

    render() { 
      return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{this.props.title}</Text>
            <TextInput name="Answer" style={styles.TextInputStyle} value={this.props.existing} onChangeText={(text) => { this.setState({ Input: text})}} />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.setModalVisible();
                updateInformation(Type,this.state.Input)
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      </View>
  );
};

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
})
}
