import { EmailReg, PassReg, IDReg } from './Regex'
import {  Alert  } from 'react-native'
export default function Validate(UserID,Email,Password,action) {    
    var isValid = true;
    var message = "";    
    if (action == "signup"){
        if(!EmailReg.test(Email)){
            message = "The email you provided to sign up is not a valid email address \n\n"
            isValid = false
        }
    }
    if (EmailReg.test(UserID) || IDReg.test(UserID)) {
        if (PassReg.test(Password)) {
           isValid = true
        } else {
            message += "The password entered was not secure enough \n\n"
            isValid = false
        }
    }
    else {
        message += "There was a problem with the username or email \n\n"
        isValid = false
    }

    if (!isValid) {
        Alert.alert("Validation error",
            message,
            [
                { text: 'Go Back' },
            ],
            { cancelable: false },
        );
    }   
    return isValid;
} 

