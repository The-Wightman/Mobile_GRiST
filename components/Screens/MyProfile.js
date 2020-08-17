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
  TouchableOpacity,
  Alert,  
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,Spacing} from '../../Styles/index'
import UserProfile from '../Sub-Comps/userprofile'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card,Button,Icon} from 'react-native-elements';
import * as ClientControls from '../Sub-Comps/userOutline'

async function callInfo(){            
  let [getcl,getrl] = await Promise.all([ClientControls._getClient(),ClientControls._getRole()])             
  return [getcl,getrl]

}
async function editUser(currentpas,nickname,Email,password,confpass,UID){    
  const apicall = 'http://public-grist-test.aston.ac.uk/user/'+ UID +'/edit'
  const details = {
      header: 'Content-type: application/json',
      method: 'POST',
      redirect: 'manual',                        
      body: JSON.stringify({"current_pass": currentpas,"mail": Email,"name":nickname,"pass[pass1]":password,"pass[pass2]": confpass}),
  }
  try {
      response = await fetch(apicall,details)
      .then(response => {
          if (response.status === 200) {
            Alert.alert("Update succesful","You should logout and re-log with your new information to ensure everything is up to date.")
          } else {
              console.log(response)
            throw new Error('The server is currently unable to service your request, this could be due to too many failed login attempts, Internet connection issues, or Recently edited details. Please check your internet and try again.');
          }
        })
                 
      .catch(function(error) {                        
        throw error;
      })            
                        
  }
  catch(err){
      alert(err)
  }  
  }

export default class MyProfile extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      USERJSON: "",
      current_user: "",      
      USERROLE: "",
      Description: "",
      currentpas:"",
      username:"",
      email:"",
      password:"",
      confpass:"",
    }
    this.role_desc = {Administrator: "Work on development of GRiST services or 3rd party extensions to the GRiST environment",
    Clinician:"Responsible for a number of patients, performance and management of assessments as well as overseeing thier action plans and comments.",
    Authenticated:"User has the app for self-assessment to help provide guidance and advice on a number of subjects."}
    
  }
  componentDidMount(){
    response = callInfo()
    .then(response => this.statemanage(response));      
    }    
     statemanage(response){        
        this.setState({USERJSON: response[0],USERROLE: response[1]});
        switch(this.state.USERROLE){
        case "administrator":
          this.setState({Description:this.role_desc.Administrator})
        break;
        case "clinician":
          this.setState({Description:this.role_desc.Clinician})
        break;
        default:
          this.setState({Description:this.role_desc.Authenticated})
        }       
        this.setState({current_user: this.state.USERJSON.current_user})

    }
  render() {   
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>
          
          <View style={styles.screenPos}>
          <KeyboardAwareScrollView >
          <View style={styles.container}>
           <UserProfile/>
          </View>
          <Card title="Your Information">    
          <Text style={styles.TextStyle}>
               User ID: {this.state.current_user.uid}
            </Text>        
            <Text style={styles.TextStyle}>
               Roles: {this.state.USERROLE}
            </Text>
            <Text style={styles.TextStyle}>
              Roles highlight what activities you are permitted to perform, a brief explanation is found in the description below.
            </Text>  
            <Text style={styles.TextStyle}>
               Description: {this.state.Description}
            </Text>
               
            <Text style={styles.TextStyle}>
               Logout Key: {this.state.USERJSON.logout_token}
            </Text> 
            <Text style={styles.TextStyle}>
               Note the logout key is only for use when issues arise from multiple sign-ons caused by many devices attempting to submit assessments at the same time. Hold the GRiST Icon on the login page to reset the token. 
            </Text>       
            </Card>   
            <Card title="Edit My profile">
            <Text style={styles.TextStyle}>
              This form can be used to edit profile information ,to edit more information like timezones and profile images please use the web browser for conveinience:
              </Text>
            <Text style={styles.TextStyle}>
            "https://www.egrist.org/user/{this.state.current_user.uid}/edit"
            </Text > 
            <View>
            <Text style={styles.TextStyle}>Enter current password</Text>
              <TextInput placeholder="Current Password" style={styles.TextInputStyle} secureTextEntry={true}  onChangeText={(text) => { this.setState({currentpas: text})}}/>
            <Text style={styles.TextStyle}>Change your nickname</Text>
              <TextInput placeholder="Username"  defaultValue={this.state.current_user.name} style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ username: text})}}/>
              <Text style={styles.TextStyle}>Change your email</Text>
              <TextInput placeholder="Email" defaultValue={this.state.current_user.name} style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ email: text})}}/>
              <Text style={styles.TextStyle}> Change your password</Text>
              <TextInput placeholder="Password" style={styles.TextInputStyle} secureTextEntry={true}  onChangeText={(text) => { this.setState({password: text})}}/> 
              <Text style={styles.TextStyle}>Confirm new password</Text>
              <TextInput placeholder="Confirm password" style={styles.TextInputStyle} secureTextEntry={true} onChangeText={(text) => { this.setState({passconf: text})}}/>
              <Button icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={styles.buttonStyle}
              title="Submit changes" onPress={() => editUser(this.state.currentpas,this.state.username,this.state.email,this.state.password,this.state.confpass,this.state.current_user.uid)} />                
             </View>
            
            </Card>  
            
          </KeyboardAwareScrollView>
          </View>
          </View>

        )
    }
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LightGrey.color,
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    minHeight:'15%',
    paddingTop: 20
  },
  title: {
      fontSize: 24,
      color: 'black'
  },
  screenPos: {
    paddingTop: '14%',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingBottom: 50

},
TextStyle: {
    color: Colors.Black.color,                
    fontSize: Spacing.TextSizes.navText,
    marginBottom: 10
 },
 buttonStyle:{
  borderRadius: 8, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: Colors.DarkGreen.color,marginTop:10,
 }
 ,
 TextInputStyle: {
  borderColor: Colors.LightGrey.color,
  borderWidth: 3,
  padding: 10,
  color: Colors.Black.color,
  maxHeight: 50,
 
  backgroundColor: Colors.White.color,
  
},
 Container:{alignItems: 'center', justifyContent: 'center',  paddingTop: 25,minWidth:'100%',backgroundColor:Colors.LightGrey.color},
})