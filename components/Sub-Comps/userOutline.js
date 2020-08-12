//Function: localised storage for application information
//Description: Store and recall information about the user such as the role,assessment information, and connection strings.
//Inputs: None
//Outputs: Async functions _storeClient,_storeRole,clearclient, getclient, getrole

//call the Android/IOS agnostic helper library from te react native libraries
import {AsyncStorage} from 'react-native';
import {   
    alert
} from 'react-native'

//function to handle the server response string,and store it locally for reference when validating internal app functions
export async function _storeClient(responseJson){    
  try {  
      //wait for the Asyncstroage set function to create a new key value pair, overwriting any previous information such as session keys.    
      await AsyncStorage.setItem('responseString', JSON.stringify(responseJson));        
      
      //catch issues and present them as an error to the user
    } catch (error) {
      alert(error)
    } 

  }
 //function to store the users role bool
  export async function _storeRole(role){    
    try {      
      //wait for the Storage library to return from storing the key value pair succesfully
      await AsyncStorage.setItem('isClin', role);
      //catch issues and present them as an error to the user
    } catch (error) {
      alert(error)
    } 

  }
  //function to store the users Assessment Array
  export async function _storeAssessArray(UserUID,AssessArray){    
    try {      
      //wait for the Storage library to return from storing the key value pair succesfully
      await AsyncStorage.setItem(UserUID + 'Assessments',JSON.stringify(AssessArray));
      //catch issues and present them as an error to the user
    } catch (error) {
      alert(error)
    } 

  }
  // function to return the current clients Assesment array
  export async function _getAssessArray(UID){    
    try {
     //wait for the Storage library to return from retrieving the key value pair succesfully
     var value = await AsyncStorage.getItem(UID + 'Assessments');
     //parse the JSON string and then retun the output to the calling component.       
     return JSON.parse(value)  
     //catch issues and present them as an error to the user
    } catch (error) {
       alert(error)
    }
    
  };
  
  //function to clear currently stored user session information
  export async function _clearClient(){    
    try {  
      //wait for the Storage library to return from clearing the key value pair succesfully    
      await AsyncStorage.removeItem('responseString');        
      //catch issues and present them as an error to the user
    } catch (error) {
      alert(error)
    } 

  }
// function to return the current clients session information
export async function _getClient(){    
    try {
     //wait for the Storage library to return from retrieving the key value pair succesfully
     var value = await AsyncStorage.getItem('responseString');
     //parse the JSON string and then retun the output to the calling component.       
     return JSON.parse(value)  
     //catch issues and present them as an error to the user
    } catch (error) {
       alert(error)
    }
    
  };
  //return the current users role classificiation
export async function _getRole(){    
  try {
  //wait for the Storage library to return from retrieving the key value pair succesfully
   var value = await AsyncStorage.getItem('isClin');       
   return value  
   //catch issues and present them as an error to the user
  } catch (error) {
     alert(error)
  }
  
};

