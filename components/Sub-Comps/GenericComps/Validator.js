//Function: Validate information to prevent illegal or unwarranted access.
//Description: Recieve information submitted by user before making requests to the server ensuring that the information is valid to increase the likelihood
//             of a succesful response from the server.
//Inputs: String UserID, String Email, String Password, String Action
//Outputs: Boolean isValid

//import regex statements from the regex.js file
import { EmailReg, PassReg, IDReg, UIDREG} from './Regex'
//import react native libraries
import {  Alert  } from 'react-native'

// export the validate function for use by other classes
export default function ValidateLogin(UserID,Email,Password,action) {    
    //set isValid to true, so that should information be special case but valid it is still sent
    var isValid = true;
    var message = "";  
    //if the user is trying to create an account, validate the provided email, else provide error message string
    if (action == "signup"){
        if(!EmailReg.test(Email)){
            message = "The email you provided to sign up is not a valid email address \n\n"
            isValid = false
        }
    }
    //a user can use the UserID in place of an email and as such we test as both an email or a user ID and if either pass
    if (EmailReg.test(UserID) || IDReg.test(UserID)) {
        //test the password to make sure that it is strong enough for the system
        if (PassReg.test(Password)) {
           isValid = true
        } else {
            //else alert the user the seelcted password si not strong enough
            message += "The password entered was not secure enough \n\n"
            isValid = false
        }
    }
    //if the username & email both fail then alert the user as to that being the cause of the issue
    else {
        message += "There was a problem with the username or email \n\n"
        isValid = false
    }
    //if the validation fails take the set error string, and present it using the alert box to the user
    if (!isValid) {
        Alert.alert("Validation error",
            message,
            [
                { text: 'Go Back' },
            ],
            { cancelable: false },
        );
    }   
    //return the boolean to the calling function to signal wether information is acceptable or not.
    return isValid;
} 

