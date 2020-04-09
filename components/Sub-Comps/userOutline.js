import {AsyncStorage} from 'react-native';

async function setClient(ResponseJSON){ 
    AsyncStorage.multiSet('UserDetails',ResponseJSON);
    console.log("User details updated")
}
async function deleteClient(){
    await AsyncStorage.clear('UserDetails', null);
    console.log("User details deleted")
}
export {setClient,deleteClient}