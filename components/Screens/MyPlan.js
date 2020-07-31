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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'

export default class MyPlan extends Component{ 
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
        <Card title="My Plan Page">
              <Text style={styles.TextStyle}>Read & Review PDFS generated for you plans from previous assessments</Text>
              <Text style={styles.TextStyle}>Plans are orderred from most recent assessment going down as you proceed down the table, older assessments may take slightly longer to load due to the age of information.</Text>
              <Text style={styles.TextStyle}>If your assessments plans arent loading please contact support through either the APP or at https://www.egrist.org/</Text>
              </Card>
              <Card title="Previous plans">
              <Text style={styles.TextStyle}>This Table keeps a record of previous Plans to allow you to reference & review your submissions</Text>
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