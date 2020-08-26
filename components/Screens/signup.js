//Function: Handle user additions and inclusion into the system
//Description: Provide a means for individuals not currently linked to the sytem to access a demonstration style environment and create accounts which can later be linked to patient groups if need be.
//Inputs: String UserPassword,String UserEmail, String UserUID
//Outputs: String AlertText, Error LoginError, Props navigation(navigate)

//import standard react libraries for visual components.
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,  
    TextInput,    
    TouchableOpacity,   
} from 'react-native'
import { Typography, Colors, Spacing, Images} from '../../Styles'
// import the Default template for all Non-authed screens
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
// import the validator function
import Validate from '../Sub-Comps/GenericComps/Validator'

// Create a new signup object which handles information from previous pages and pass it this information through the props component
export default class signup extends Component {
    constructor(props) {
        super(props);
         //create a state object to store the expected inputs and set them to empty.
        this.state = {
        Email: "",
        username: "",
        password: "",
        } 
    } 
//function for submitting the provided user information to the validator and the jsonHandler
 //inputs:Strings UID,Email,Pass, & Action (represents validate action)
 //output: null
    handleSubmission(UID,Email,Pass,Action){
        //if the validator confirms the information is acceptable
        if  (Validate(UID,Email,Pass,Action)){
            //call the JSONhandler
            this.JsonHandler(UID,Email,Pass,)
        }
       }
//function for calling the GRiST sign_up API
 //inputs:Strings UID,Email,Pass
 //output: Object responseJSON
       //asynchronous function declaration
       async JsonHandler(UID,Email,Pass){  
        //define temporary variables for storage
        let response
        let responseJSON
        //set constants for the api call and the details for use by the fetch command
        const apicall = 'http://public-grist-test.aston.ac.uk/user/signup?_format=hal_json'
        const details = {
            header: 'Content-type: application/json',
            method: 'POST',
            redirect: 'manual',   
            //pre emptively Stringify the body to turn it into a single string as opposed to a set of concatenations.                     
            body: JSON.stringify({"email":Email,"name":UID,"pass":Pass}),
        }
        //create a try catch loop in the event that the call errors
        try {
            //wait for the response of the fetch command using the defined call and details constants above.
            response = await fetch(apicall,details)
            //once a response is given then
            .then(response => {
                //if the response is 200 (Good) then return the responseJSON object
                if (response.status === 200) {
                responseJSON = response.json() 
                //else log the error to the console and throw a new error to the device information system.           
                } else {
                    console.log(response)
                  throw new Error('The server is currently unable to service your request, Please check your internet and try again.');
                }
              })
            //if the try catch log fails take the error thrown in the else statement or a fetch fail error, and present it to the device information system        
            .catch(function(error) {                        
              throw error;
            })            
                              
        }
        //convert the error in the system to an alert and then present it as such.
        catch(err){
            alert(err)
        }
        //return the response json object.
        finally{  
            console.log(responseJSON)           
            return responseJSON
        }
        } 
    // render the SignUp screen for the user
    render() {
        return (
            <View >        
            <DefaultTemplate/>
                <View  style={styles.screenPos} >
                    <View style={styles.Logo} >
                        <Image source={Images.GristLogo} >
                        </Image>

                    </View >
                    <View style={styles.container}>
                        <Text style={styles.TextStyle}>Sign up to GRIST</Text>
                        <Text style={styles.TextStyle}>Please enter your email and Information</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput placeholder="Username" style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ username: text})}}/>
                        <TextInput placeholder="Email" style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ Email: text})}}/>
                        <TextInput placeholder="Password" style={styles.TextInputStyle}  onChangeText={(text) => { this.setState({password: text})}} />
                        <TouchableOpacity style={styles.container} onPress={() => this.handleSubmission(this.state.username,this.state.Email,this.state.password,"signup")}>
                            <Text style={styles.TextStyle} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign In') }>
                            <Text style={styles.TextStyle}>Or Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                          
              </View>
        )
    }
}

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
        color: Colors.White.color,
        maxHeight: 50,
        width: '75%',
        backgroundColor: Colors.White.color,
        
    },

    TextStyle: {
        color: Colors.DarkGreen.color,
        textAlign: 'center',
        padding: 10,
        fontSize: Spacing.TextSizes.FieldText
    }
}
)