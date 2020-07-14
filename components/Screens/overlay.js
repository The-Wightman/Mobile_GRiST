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
} from 'react-native';
export default class Overlay extends Component{
    render() {
        return(
                <View style={style.container}>
                    <Text style={styles.title}></Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
      fontSize: 24
  }
})