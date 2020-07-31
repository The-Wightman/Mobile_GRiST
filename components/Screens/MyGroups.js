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

export default class MyGroups extends Component{ 
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
          <Card title="My Groups">
                <Text style={MYstyle.TextStyle}>From this screen you can see or expand on all groups the currently signed in account is a part of or administrator/Clinician for.</Text>
                <Text style={MYstyle.TextStyle}>Groups are usually for specific regions, clinicians, or programs. With myGrist and myGrace being common groups highlighting that this user has access to these tools for use at any time.</Text>
                <Text style={MYstyle.TextStyle}>For further information on how to use the tool itself please use either the help & download pages on the app or go online to the website at https://www.egrist.org/</Text>
                </Card> 
                <Card title="Table of current groups">
              <Text style={MYstyle.TextStyle}>This Table Displays all of the groups you are currently a member or administrator of.</Text>
              <CustomTable tableHead={['Head', 'Head2', 'Head3', 'Head4']}  tableTitle={['Title', 'Title2', 'Title3', 'Title4']} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]}></CustomTable>
              </Card>                   
          </KeyboardAwareScrollView>
          </View>          
          </View>

        )
    }
  }
