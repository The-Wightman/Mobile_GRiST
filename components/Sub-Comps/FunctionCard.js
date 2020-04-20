import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { Images } from '../../Styles/index'
import { Colors } from '../../Styles/index';

export const cardTypes = [
  { Title: "View my Profile", Image: Images.DefaultProfile, Text: " View,Edit and Update profile information for the current logged in profile", buttonText: "Go to Profile", pointer: "My Profile", type: "both" },
  { Title: "View your Patients", Image: Images.Patients, Text: "Select and manage your group and patient information or start a new assessment for a patient.", buttonText: "Go to Patients", pointer: "My Patients", type: true },
  { Title: "Downloads", Image: Images.downloads, Text: "Download handbooks and documentation detailing how to work with GRIST and the outputs the system provides.", buttonText: " Go To Downloads", pointer: "Downloads", type: true },
  { Title: "Help & Information", Image: Images.Help, Text: "View the Assistance documentation for the e-GRiST System and mobile application", buttonText: "Go To Help", pointer: "E-Grist Help", type: true },
  { Title: "Search the App", Image: Images.search, Text: "Search the grist mobile tools for your chosen feature,information, or option", buttonText: "Go to Search", pointer: "Search", type: "both" },
  { Title: "Start an assessment", Image: Images.Assessment, Text: "Start a new assessment, resume an old assessment, or manage existing assessments and answers.", buttonText: "Go to Assessments", pointer: "My Assessment", type: false },
  { Title: "View my Plan", Image: Images.plan, Text: "View your next steps and action plans to deal with issues highlighted in your assessments.", buttonText: "Go to My Plan", pointer: "My Plan", type: false },
  { Title: "GRiST Cribsheet", Image: Images.cribsheet, Text: "Download the GRiST Cribsheet to your mobile device for useful rules of system operation", buttonText: "Download Cribsheet", pointer: "My Review", type: "download" },
  { Title: "GRiST HandBook", Image: Images.handbook, Text: "Download and Read the GRiST handbook to get a better understanding of the system and its functionality", buttonText: "Download Handbook", pointer: "My Review", type: "download" }


]


export class FunctionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: "",
      Text: "",
      Navigation: ""
    }

  }

  
  render() {
     if(this.props.type == true || this.props.type == false || this.props.type == "both"){
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
    if(this.props.type == "download"){
      return (
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
  }

}