import React, {Component} from 'react';
import {  
  Text   
} from 'react-native';
import { Button, Card, Icon} from 'react-native-elements';
import { Images } from '../../Styles/index'

export const cardTypes = {
    Profile: {Title: "View my Profile", Image: Images.DefaultProfile,Text:" View,Edit and Updae profile information for the current logged in profile",buttonText: "Go to Profile", pointer: "My Profile", isClin:"both" },
    Patients: {Title: "View your Patients", Image: Images.Patients,Text:"Select and manage your group and patient information or start a new assessment for them.",buttonText: "Go to Patients", pointer: "My Patients", isClin:true},
    Downloads: {Title: "Downloads", Image: Images.downloads,Text:"Download handbooks and documentation detailing how to work with GRIST and the outputs the system provides.",buttonText: " Go To Downloads", pointer: "Downloads", isClin:true},
    Help: {Title: "Help", Image: Images.Help,Text:"View the Assistance documentation for the e-GRiST System and mobile application",buttonText: "Go To Help", pointer: "E-Grist Help", isClin:true},
    Search: {Title: "Search", Image: Images.search,Text:"",buttonText: "Go to Search", pointer: "Search", isClin:"both"},
    Assessment: {Title: "Start an assessment", Image: Images.Assessment,Text:"Start a new assessment,resume an old assessment, or manage existing assessments and answers.",buttonText: "Go to Assessments", pointer: "My Assessment", isClin:false},
    Plan: {Title: "View my Plan", Image: Images.plan,Text:"View your next steps and action plans to deal with issues highlighted in your assessments.",buttonText: "Go to My Plan", pointer: "My Plan", isClin:false},
    Review: {Title: "My Review", Image: Images.review,Text:"Read your previous review and areas in which the system has highlighted trends and information.",buttonText: "Go to My Review", pointer: "My Review", isClin:false}    

}

export class FunctionCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Image: "",
            Text: "",
            Navigation:""
        }    
        
    }
    render(){
    return (
<Card title={this.props.Title}
  image={this.props.Image}>
  <Text style={{marginBottom: 10}}>
        {this.props.Text}}
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title={this.props.buttonText} onpress={() => this.props.navigation.navigate(this.props.pointer)} />
</Card>
    
)
}
   
}