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
import {MYstyle} from '../../Styles/index'
import QuestionBoxTemplate from '../Sub-Comps/QuestionComponents/QuestionBoxes'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'

const XMLnode1 = {value:'scale',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How happy are you? ',help:'Measure thy happiness',prev:5,persistence: "Hard"}
const XMLnode2 = {value:'value',leftlabel:'0 = Very sad',rightlabel:'10 = very Happy',question:'How sad are you? ',help:'Measure thy sadness',persistence: "Soft",alert:"OH MY LAWD",prev:"yes"}

export default class MyPatients extends Component{ 
  constructor(props) {
    super(props);
    
  }
  render() {   
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>
          
          <View style={MYstyle.screenPos}>
          <KeyboardAwareScrollView>
          <Card style={MYstyle.cards}title="My Patients">
                <Text style={MYstyle.cardTextStyle}>From here a list of all patients for the selected group is visible, allowing for you to view all paticipants.</Text>
                <Text style={MYstyle.cardTextStyle}>As of version 2.4 onwards you will also be able to review patients reports and begin assesments for individual patients from the screen using the option on the table below.</Text>
          </Card> 
          <Card title="Patients List">
              <Text style={MYstyle.TextStyle}>This Table keeps a record of all pateints in the currently selected group or main group depending on which is more apropriate for you.</Text>
              <CustomTable tableHead={['Head', 'Head2', 'Head3', 'Head4']}  tableTitle={['Title', 'Title2', 'Title3', 'Title4']} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]} ></CustomTable>
              </Card>                  
          </KeyboardAwareScrollView>
          </View>          
          </View>

        )
    }
  }
