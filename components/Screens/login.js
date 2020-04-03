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
import Validate from '../Sub-Comps/Validator'


export default class _Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        responseJSON: ""
        }   
        
    }
    userLogin(UID,Pass,Action){
    let UserInfo = null
     if  (Validate(UID,null,Pass,Action)){
     UserInfo =  this.JsonHandler(UID,Pass)
        console.log(UserInfo)
        //if(!Promise.resolve(UserInfo) == UserInfo) {                
            this.props.navigation.navigate('CLanding')
    // }
    }
}
     async JsonHandler(UID,Pass){  
        let response
        let responseJSON      
        const apicall = 'https://www.egrist.org/user/login?_format=hal_json'
        console.log(UID)
        console.log(Pass)
        const details = {
            header: 'Content-type: application/json','Accept': 'application/json',
            method: 'POST',                        
            body: JSON.stringify({
            "name":UID ,"pass": Pass 
        }),
        }
        try {
            response = await fetch(apicall,details)
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);             
              throw error;
            })
            console.log(response)
            responseJSON = response.json();
        }
        catch(err){
            alert(err)
        }
        finally{
            return responseJSON
        }
        } 
        
    render() {
        return (
            <View>
                <DefaultTemplate />
                <View  style={styles.screenPos} >
                    <View style={styles.Logo} >
                        <Image source={Images.GristLogo} >
                        </Image>

                    </View >
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
        padding: 10,
        fontSize: Spacing.TextSizes.FieldText
    }
}
)