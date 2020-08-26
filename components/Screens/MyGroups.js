//Function: Provide a screen for viewing the users Groups
//Description: Show a table of the users groups and what they are in a brief description, future versions will allow the user to view group information in great depth through action buttons.
//Inputs: Null
//Outputs: Visual screen render

//import React & react native libraries
import React, {Component} from 'react';
import {  
  View,
  Text,  
} from 'react-native';
//Import the default template
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
//Import the header component to allow for navigation
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
// import the my-series page stylesheet for all pages with this prefix.
import {MYstyle} from '../../Styles/index'
//Import the keyboard aware scrolling view component from the community module.
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//Import the Card componenet from the react native elements module.
import {Card} from 'react-native-elements';
//import the customTable component from the sub component folder.
import CustomTable from '../Sub-Comps/tableview'

//Create a new MyGroups object which handles information from previous pages and pass it this information through the props component
export default class MyGroups extends Component{ 
  constructor(props) {
    super(props);    
  }
  // render the MyGroups screen for the user
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
              <CustomTable tableHead={['Group', 'Description']} 
                           headflex={[1, 3]} dataflex={[1, 3]} 
                           tableData={[
                                        ['GRiST Demo', 'Group for testing GRiST'],
                                        ['myGRiST', 'myGRACE for self assessments'],
                                        ['myGRiST', 'A group for launching myGRiST Pathway assessments']
                                       ]}></CustomTable>
              </Card>                   
          </KeyboardAwareScrollView>
          </View>          
          </View>

        )
    }
  }
