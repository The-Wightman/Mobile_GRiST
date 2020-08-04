//Function: 
//Description: 
//Inputs: 
//Outputs: 
import React, {Component} from 'react';
import {  
  View,
  Text,  
  TextInput,  
  StyleSheet   
} from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,MYstyle} from '../../Styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Button, Icon} from 'react-native-elements';
import CustomTable from '../Sub-Comps/tableview'

export default class MyPatients extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      newPatientID: "",
      newPatientFore:"",
      newPatientSur:""
    } 
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
              <CustomTable tableHead={['Patient ID', 'Forename', 'Surname','Actions']} tableData={[['DVD2013', 'Test', 'Data'],['DVD2013', 'Test', 'Data'],['DVD2013', 'Test', 'Data'],['DVD2013', 'Test', 'Data']]} ></CustomTable>
              <Button 
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:Colors.DarkGreen.color }}
                  title='View Selected patient' onPress={() => this.props.navigation.navigate("ILanding",{screen: "My Assessments"})} />
              </Card> 
              <Card style={MYstyle.cards}title="Add a New patient">
                <Text style={MYstyle.cardTextStyle}>Fill in the form below to add a new patient to the system. You need to ensure the patient id is unique by, for example, basing it on the patient intials and the current date (e.g. jfk171210 for a patient created on the 17th December, 2010) or by using the unique identifiers you already have for your patients.</Text>
                <Text style={MYstyle.cardTextStyle}>Patient ID</Text>
                <TextInput name="patientID" style={styles.TextInputStyle} onChangeText={(text) => this.setState({newPatientID: text})} />
                <Text style={MYstyle.cardTextStyle}>Forename</Text>
                <TextInput name="forename" style={styles.TextInputStyle} onChangeText={(text) => this.setState({newPatientFore: text})} />
                <Text style={MYstyle.cardTextStyle}>Surname</Text>
                <TextInput name="surname" style={styles.TextInputStyle} onChangeText={(text) => this.setState({newPatientSur: text})} />
                <Button 
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:Colors.DarkGreen.color }}
                  title='Add Patient' onPress={() => this.UpdateSelection("Full")} />
          </Card>                 
          </KeyboardAwareScrollView>
          </View>          
          </View>

        )
    }
  }

const styles = StyleSheet.create({
  TextInputStyle: {
    borderColor: Colors.LightGrey.color,
    borderWidth: 3,
    alignContent:'center',
    justifyContent:'center',
    paddingBottom: 10,
    marginBottom: 10,
    color: Colors.Black.color,
    maxHeight: 50,    
    backgroundColor: Colors.White.color,
    
}
})