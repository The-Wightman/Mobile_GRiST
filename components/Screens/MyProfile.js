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
import UserProfile from '../Sub-Comps/userprofile'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card, Icon} from 'react-native-elements';
import * as ClientControls from '../Sub-Comps/userOutline'

async function callInfo(){            
  let [getcl,getrl] = await Promise.all([ClientControls._getClient(),ClientControls._getRole()])             
  return [getcl,getrl]

}

export default class MyProfile extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      USERJSON: "",
      USERROLE: "",
      Description: ""
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
              This form can be used to edit profile information or you can visit:
              </Text>
            <Text style={styles.TextStyle}>
              "https://www.egrist.org/user/YOUR-UID/edit"
            </Text > 
            <View>
              <Text style={styles.TextStyle}>
              Content
              </Text >
              <TextInput></TextInput>
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
 Container:{alignItems: 'center', justifyContent: 'center',  paddingTop: 25,minWidth:'100%',backgroundColor:Colors.LightGrey.color},
})