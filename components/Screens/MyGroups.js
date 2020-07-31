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
import {Colors,Spacing} from '../../Styles/index'
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
          
          <View style={styles.screenPos}>
          <KeyboardAwareScrollView>
          <Card title="My Groups">
                <Text style={styles.TextStyle}>From this screen you can see or expand on all groups the currently signed in account is a part of or administrator/Clinician for.</Text>
                <Text style={styles.TextStyle}>Groups are usually for specific regions, clinicians, or programs. With myGrist and myGrace being common groups highlighting that this user has access to these tools for use at any time.</Text>
                <Text style={styles.TextStyle}>For further information on how to use the tool itself please use either the help & download pages on the app or go online to the website at https://www.egrist.org/</Text>
                </Card> 
                <Card title="Table of current groups">
              <Text style={styles.TextStyle}>This Table Displays all of the groups you are currently a member or administrator of.</Text>
              <CustomTable></CustomTable>
              </Card>                   
          </KeyboardAwareScrollView>
          </View>          
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
  },
  screenPos: {
    paddingTop: '15%',
    width: '100%',
    height: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
TextStyle: {
    color: Colors.Black.color,                
  fontSize: Spacing.TextSizes.navText,
  marginBottom: 10},
 
})