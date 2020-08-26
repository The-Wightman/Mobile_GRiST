//Function: Provide a screen to present to the user the Patient information
//Description: Show a list of the current patietns allow for the selection of patients and the addition of new patients to the ongoing list in the table.
//Inputs: String PatientID,PatientFor,PatientSur
//Outputs: Visual screen render

//import React & react native libraries
import React, {Component} from 'react';
import {  
  View,
  Text,  
  TextInput,  
  StyleSheet,
  TouchableOpacity,   
  Alert
} from 'react-native';
//Import the default template
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
//Import the header component to allow for navigation
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
//import the colors ,Mystyle, and spacing style information from the styles index.
import {Colors,MYstyle,Opacity} from '../../Styles/index'
//Import the keyboard aware scrolling view component from the community module.
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//Import the Card,Button and Icon componenets from the react native elements module.
import {Card, Button, Icon} from 'react-native-elements';
//import the customTable component from the sub component folder.
import CustomTable from '../Sub-Comps/tableview'

//Create a new MyGroups object which handles information from previous pages and pass it this information through the props componen
export default class MyPatients extends Component{ 
  constructor(props) {
    super(props);
    //create a state object to store the expected inputs and set them to empty.
    this.state = {
      newPatientID: "",
      newPatientFore:"",
      newPatientSur:"",
      selectedpatient:"",
      tabledata: [['DVD2013', 'David', 'Wightman'],['DVD2014', 'James', 'reynolds'],['DVD2015', 'William', 'wallace'],['DVD2016', 'edgard', 'example']]
        } 
   }
//function for Updating the information the State Patient Data used to render the table and pass information to future pages.
 //inputs: Strings ID,fore,sur
 //output: Null
  UpdatePatients(ID,fore,sur){
    let nextPatient = [ID,fore,sur]
    //Create a new array using the old state.tabledata
    let newdata = [...this.state.tabledata]
    //add the new data to the end of that array using the push command
    newdata.push(nextPatient)
    //update the state object with the newly created data array
    this.setState({tabledata: newdata})
  }

//function formatting the able data as to allow for its rendering and provide each column with a relevant button that calls the selected patients information.
 //inputs: Array DataArray
 //output: Array FinalisedData
  dataFormatter(DataArray){
    //create a new empty array called finalised data
    let finalisedData =[]
    //for x incrementing up to the length of the data array
    for(let x=0;x<DataArray.length;x++){
      //create a new added button component that contains a button referencing the current tabledata index information.
      let addedbutton = (
        <TouchableOpacity  style={Opacity.opacity} onPress={() =>  this.selectPatient(DataArray[x][1] + " " + DataArray[x][2])}>
          <View >
            <Text >Select</Text>
          </View>
        </TouchableOpacity>) 
      //Add this new button to the end of the data array   
      DataArray[x][4] = addedbutton
      //and add that data array index to the matching index in the finalised data array.
      finalisedData[x] = DataArray[x]
    }
    //Return the finalised data array once the loop has completed.
    return finalisedData
  }
//function for selecting a patients data and passing it to the currently selected patient state object
 //inputs: String Givendata
 //output: null
  selectPatient(givendata){
    this.setState({selectedpatient: givendata})
  } 
//function for ensuring a patient is seelected and allow navigation to that patients information.
 //inputs: null
 //output: Alert PatientNotSelectedAlert
  NavigationHandler(){
    //if the currently seelcted patient is not currently null/empty string
    if(this.state.selectedpatient !== ""){
      //navigate to the my assesments screen in the individual navigator passing the current patient as a props key under userinfo
    this.props.navigation.navigate("ILanding",{screen: "My Assessments", userInfo: this.state.selectedpatient})
    }
    //if there is no currently seelcted patient
    else {
      //throw a new alert telling the user they must select a patient to view a specific patients information.
      Alert.alert("No Patient Error","You must select a patient to view thier information. Please select one from your existing list or add a new patient using the form below.")
    }
  }
  // render the MyPatients screen for the user
  render() { 
    let patientinfotext
    if(this.state.selectedpatient !== ""){
       patientinfotext = (<Text style={MYstyle.TextStyle}>Currently Selected patient: {this.state.selectedpatient}</Text>)
    }  
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
              <CustomTable tableHead={['Patient ID', 'Forename', 'Surname','Actions']} headflex={[1, 1, 1,1]} dataflex={[1, 1, 1,1]}tableData={this.dataFormatter(this.state.tabledata)} ></CustomTable>
              {patientinfotext}
                <Button 
                  icon={<Icon name='code' color='#ffffff' />}
                  buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:Colors.DarkGreen.color }}
                  title='View Selected patient' onPress={() => this.NavigationHandler()  } />
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
                  title='Add Patient' onPress={() => this.UpdatePatients(this.state.newPatientID,this.state.newPatientFore,this.state.newPatientSur)} />
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
    
},


})