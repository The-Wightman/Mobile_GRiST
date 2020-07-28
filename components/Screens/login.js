//Function: Handle user authorisation
//Description: Take user login requests validate the information client side to prevent server load, then create,send,recieve and handle login request communications.
//Inputs: String UserPassword, String UserUID, string responseJSON 
//Outputs: String AlertText, Error LoginError, Props navigation(navigate)

//Common import statments for react native, sub components, & styles
import React, { Component, isValidElement } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import { Typography, Colors, Spacing, Images } from '../../Styles'
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import Validate from '../Sub-Comps/GenericComps/Validator'
import * as ClientControls from '../Sub-Comps/userOutline'


// Create a new login object which handles information from previous pages and pass it this information through the props component
export default class _Login extends React.Component{
    constructor(props) {
        super(props);
        //creat a state object to store the expected inputs and set them to empty.
        this.state = {
        username: "",
        password: "",
        responseJSON: ""
        }   
        
    }
    //asynchronous function declaration
    async ContentReset(){
        // create an alert for the user describing the process and what will occur
        Alert.alert(
            'Reset Connection',
            'This can help resolve UID and connection issue but will delete your local information which may cause slight increases to loading times when you next use the app.',
            [
               //provide two text areas with onpress functions, one nulls the function to cancel
              {text: 'Cancel', onPress: () => {return null}},
              //the other calls the logout method, removing any currently existing session keys.
              {text: 'Confirm', onPress: () => {
                fetch('http://public-grist-test.aston.ac.uk/user/logout?q=user/logout', {
                  method: 'GET',
                  header: "Content-Type : application/json",
                })
                //clear the locally stored session key as this has now become void.
                ClientControls._clearClient()
              }},
            ],
            //do not allow the user to dismiss this alert box without making a decision
            { cancelable: false }
          )  
    }
    //asynchronous function declaration, expecting three variables of dynamic type.
   async userLogin(UID,Pass,Action){
    let UserInfo = null 
    //call the validate function on the provided information 
     if  (Validate(UID,null,Pass,Action)){
        //wait for JSONhandler to process the variables UID and pass before proceeding
     UserInfo = await this.JsonHandler(UID,Pass)  
        //if the information is validated, check if it is not null                  
        if(UserInfo !== null && UserInfo !== undefined && typeof(UserInfo) !== undefined){                
            // store the valid client information in the devices local memory under userinfo 
            await ClientControls._storeClient(UserInfo)    
            //check the users role information, for administrators navigate to the Clinician landing page         
             if(UserInfo.current_user.roles[1] == "administrator"){
                await ClientControls._storeRole("administrator")
                this.props.navigation.navigate('CLanding')  
            // if non admin user navigate to the individual user landing page.       
            } else if(UserInfo.current_user.roles[1] !== null) {
                await ClientControls._storeRole("authenticated")
                this.props.navigation.navigate('ILanding')
            }
            // should none of the above conditions be met then give an alert detailing that an issue with the server side information has occured
            else {
                Alert.alert("Invalid UID", "The server has not responded with a valid UID and the login request has failed, please contact us online at https://www.egrist.org/contact-us")
            }
        //if the response elements are null or void it is usually due to changes on the server side credential revocation, so display an apropriate error message. 
       }else {
           Alert.alert("Invalid server response","The server has not responded with a valid JSON response object, please double check your login credentials")
       }
    
}
   }//declare an asychronous function for handling the JSON
     async JsonHandler(UID,Pass){  
        let response
        let responseJSON
        //create the APIcall, with apropriate body and header information
        const apicall = 'http://public-grist-test.aston.ac.uk/user/login?_format=hal_json'
        const details = {
            header: 'Content-type: application/json',
            method: 'POST',
            redirect: 'manual',                        
            body: JSON.stringify({"name":UID,"pass":Pass}),
        }// try to perform the call
        try {
            //load response with the response of the fetch and wait for this action to complete.
            response = await fetch(apicall,details)
            .then(response => {
                //if the response returns code 200 then success
                if (response.status === 200) {
                responseJSON = response.json()            
                } else {
                // else log the reponse to the console and inform the client with clean error message
                    console.log(response)
                  throw new Error('The server is currently unable to service your request, this could be due to too many failed login attempts, Internet connection issues, or Recently edited details. Please check your internet and try again.');
                }
              })
            // catch issues that are due to internal code changes as opposed to server side    
            .catch(function(error) {                        
              throw error;
            })            
                              
        }
        catch(err){
            alert(err)
        }
        finally{  
            console.log(responseJSON)           
            return responseJSON
        }
        } 
    // render the login screen for the user   
    render() {
        return (
            <View>
                <DefaultTemplate />
                <View  style={styles.screenPos} >
                    <TouchableOpacity style={styles.Logo} onLongPress={() => this.ContentReset()}>
                        <Image source={Images.GristLogo} >
                        </Image>

                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.TextStyle}>Welcome to Mobile GRiST</Text>
                        <Text style={styles.TextStyle}>Please enter your login credentials or tap sign up</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput name="username"placeholder="Email" style={styles.TextInputStyle} value={this.state.username} onChangeText={(text) => { this.setState({ username: text})}} />
                        <TextInput name="password" placeholder="Password" style={styles.TextInputStyle} secureTextEntry={true} value={this.state.password} onChangeText={(text) => { this.setState({ password: text})}} />
                        <TouchableOpacity style={styles.container}onPress={() => this.userLogin(this.state.username,this.state.password,"signin")}>
                            <Text style={styles.TextStyle} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>                            
                            <Text style={styles.TextStyle}>Or sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
//Page specific styling kept seperate as a style sheet to overwriet elements of the generic styling when necessary.

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 15,

    },
    screenPos: {
        paddingTop: 100,
        width: '100%',
        height: '70%',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',

    },
    Logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '30%'
        
    },
    TextInputStyle: {
        borderColor: Colors.LightGrey.color,
        borderWidth: 3,
        padding: 10,
        color: Colors.Black.color,
        maxHeight: 50,
        width: '75%',
        backgroundColor: Colors.White.color,
        
    },

    TextStyle: {
        color: Colors.DarkGreen.color,
        textAlign: 'center',
        padding: 5,
        fontSize: Spacing.TextSizes.FieldText
    }
}
)