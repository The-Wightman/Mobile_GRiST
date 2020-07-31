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
        
        <View style={MYstyle.screenPos}>
        <KeyboardAwareScrollView>
        
        <Card title="My Plan Page">
              <Text style={MYstyle.TextStyle}>Read & Review PDFS generated for you plans from previous assessments</Text>
              <Text style={MYstyle.TextStyle}>Plans are orderred from most recent assessment going down as you proceed down the table, older assessments may take slightly longer to load due to the age of information.</Text>
              <Text style={MYstyle.TextStyle}>If your assessments plans arent loading please contact support through either the APP or at https://www.egrist.org/</Text>
              </Card>
              <Card title="Previous plans">
              <Text style={MYstyle.TextStyle}>This Table keeps a record of previous Plans to allow you to reference & review your submissions</Text>
              <CustomTable tableHead={['Head', 'Head2', 'Head3', 'Head4']}  tableTitle={['Title', 'Title2', 'Title3', 'Title4']} tableData={[['1', '2', '3'],['a', 'b', 'c'],['1', '2', '3'],['a', 'b', 'c']]}></CustomTable>
              </Card>  
                          
        </KeyboardAwareScrollView>
        </View>          
        </View>

      )
  }
}
