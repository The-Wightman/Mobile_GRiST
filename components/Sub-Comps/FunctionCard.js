//Function: Create cards detailing user options.
//Description: Hold a library of premade cards that can be extended as new features are added. For each option hold information on who can see it and what information that specific card can hold.
//Inputs: ScreenProps (User specific information),NavProps (Page specific information)
//Outputs: Class functionCard, ObjectArray Cardtypes

//import react native and react libraries
import React, { Component } from 'react';
import {
  Text,
  ScrollView
} from 'react-native';
//import react native elements third party library for base component
import { Button, Card, Icon } from 'react-native-elements';
//import style documents from the subcomponents library.
import { Colors, Images,PDFS } from '../../Styles/index';
// import defined variables for the PDFS stored in the assets library
import Pdf from 'react-native-pdf';
import PDFtemplate from '../Sub-Comps/PDFview'

//create a new object array containing objects that represent the possible card types and export it to make it accessible.
export const cardTypes = [
  { Title: "View my Profile", Image: Images.DefaultProfile, Text: "view,Edit and Update profile information for the current logged in profile", buttonText: "Go to Profile", pointer: "My Profile", type: "both" },
  { Title: "View your Patients", Image: Images.Patients, Text: "select and manage your group and patient information or start a new assessment for a patient.", buttonText: "Go to Patients", pointer: "My Patients", type: true },
  { Title: "Downloads", Image: Images.downloads, Text: "download handbooks and documentation detailing how to work with GRIST and the outputs the system provides.", buttonText: " Go To Downloads", pointer: "Downloads", type: true },
  { Title: "Help & Information", Image: Images.Help, Text: "view the help, information, & assistance documentation for the e-GRiST System and mobile application", buttonText: "Go To Help", pointer: "E-Grist Help", type: true },
  { Title: "Search the App", Image: Images.search, Text: "search the grist mobile tool for your chosen feature, information, or option", buttonText: "Go to Search", pointer: "Search", type: "both" },
  { Title: "Start an assessment", Image: Images.Assessment, Text: "start a new assessment, resume an old assessment, or manage existing assessments and answers.", buttonText: "Go to Assessments", pointer: "My Assessment", type: false },
  { Title: "My Plan", Image: Images.plan, Text: "view your next steps and action plans to deal with issues highlighted in your assessments.", buttonText: "Go to My Plan", pointer: "My Plan", type: false },
  { Title: "My Review", Image: Images.review, Text: "review previous answers and a learn more about the answers previously given and the impact they may have.", buttonText: "Go to My Review", pointer: "My Review", type: false },
  { Title: "GRiST Cribsheet", Image: Images.cribsheet, Text: "download the GRiST Cribsheet to your mobile device for useful rules of system operation", buttonText: "Download Cribsheet", pointer: "pdfscreen", type: "download", payload:PDFS.PDFcribsheet,URI:"https://www.egrist.org/sites/default/files/grist-crib-sheet_1.pdf" },
  { Title: "GRiST HandBook", Image: Images.handbook, Text: "download and Read the GRiST handbook to get a better understanding of the system and its functionality", buttonText: "Download Handbook", pointer: "pdfscreen", type: "download", payload: PDFS.PDFhandbook, URI:"https://www.egrist.org/sites/default/files/grist-practitioners-manual.pdf" }
]

//Create a new class functioncard that extends the basic react component
export class FunctionCard extends React.Component {
  //pass it any props objects from the calling function 
  constructor(props) {
    //and inherit the props of the father component
    super(props);
    //create a new state object and set the values to empty for the moment.
    this.state = {
      Image: "",
      Text: "",
      Navigation: "",
      pdfsource: "",
      isPDF: false
    }
    
  }

  togglePDF(){
    this.setState({isPDF: !this.state.isPDF})
  }

  //Return the visual element of the class
  render() {
    //if the type is one of the three valid primary types
     if(this.props.type == true || this.props.type == false || this.props.type == "both"){
       //return the basic card layout with the navigation function button.
      return(
        <Card title={this.props.Title} image={this.props.Image}>
          <Text style={{ marginBottom: 10 }}>
            {this.props.Text}
          </Text><Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: Colors.DarkGreen.color }}
            title={this.props.buttonText} onPress={() => this.props.navigation.navigate(this.props.pointer)} />
        </Card>
      )
    }
    //if the type is download then load a specific button for opening/downloading PDFS.
    if(this.props.type == "download"){
      if(this.state.isPDF == false){
      return (
        <Card title={this.props.Title} image={this.props.Image}>
          <Text style={{ marginBottom: 10 }}>
            {this.props.Text}
          </Text><Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{ borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: Colors.DarkGreen.color }}
            title={this.props.buttonText} onPress={() => this.togglePDF()}/>
        </Card>
      )
      }
      else {
        return (
          <Card>
            <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{  marginLeft: 0, marginRight: 0, marginBottom: 8, backgroundColor: Colors.DarkGreen.color }}
            title='Close PDF' onPress={() => this.togglePDF()}/>
            <PDFtemplate URI={this.props.URI}/>
          </Card>
            
              
        )
      }
    }
  }

}