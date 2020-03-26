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
import MainHeadTemplate from '../Sub-Comps/Header'
import QuestionBox from '../Sub-Comps/QuestionBoxes'
const XMLnode = {name:XMLnode,values:"scale",leftlabel:"0 = Very sad",rightlabel:"10 = very Happy",question:"How happy are you",help:"Measure thy happiness",prev:"5"}

export default class signup extends Component{ 
  constructor(props) {
    super(props);
   
  }
  render() {   
        return(
          <View>
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>
          <Text >Landing screen text???</Text>
          <QuestionBox {...XMLnode}/>
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
  }
})