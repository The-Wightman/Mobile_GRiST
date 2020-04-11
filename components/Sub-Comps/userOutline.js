import {AsyncStorage} from 'react-native';
import {   
    Alert
} from 'react-native'
export async function _storeClient(responseJson){    
    try {      
      await AsyncStorage.setItem('responseString', JSON.stringify(responseJson));        
      
    } catch (error) {
      alert(error)
    } 

  }
  export async function _clearClient(){    
    try {      
      await AsyncStorage.removeItem('responseString');        
      
    } catch (error) {
      alert(error)
    } 

  }

export async function _getClient(){    
    try {
     var value = await AsyncStorage.getItem('responseString');       
     return JSON.parse(value)  
    } catch (error) {
       alert(error)
    }
    
  };
  

