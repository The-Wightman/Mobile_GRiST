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
import { EmailReg, PassReg, IDReg } from '../Sub-Comps/Regex'

export default class _Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        username: "",
        password: "",
        }   
        
    }
    Validate(UserID, Password) {    
    var isValid = true;
    var message = "";    
    if (EmailReg.test(UserID) || IDReg.test(UserID)) {
        if (PassReg.test(Password)) {
           this.props.navigation.navigate('CLanding')
        } else {
            message = "The password entered was not secure enough"
            isValid = false
        }
    }
    else {
        message = "There was a problem with username or email"
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
}
    render() {
        return (
            <View>
                <DefaultTemplate />
                <View behaviour='padding' style={styles.screenPos} >
                    <View style={styles.container} >
                        <Image source={Images.GristLogo} style={StyleSheet.Logo} >
                        </Image>

                    </View >
                    <View style={styles.container}>
                        <Text style={StyleSheet.TextStyle}>Welcome to Mobile GRiST</Text>
                        <Text style={StyleSheet.TextStyle}>Please enter your login credentials or tap sign up</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput name="username"placeholder="Email" style={StyleSheet.TextInputStyle} value={this.state.username} onChangeText={(text) => { this.setState({ username: text})}} />
                        <TextInput name="password" placeholder="Password" style={StyleSheet.TextInputStyle} secureTextEntry={true} value={this.state.password} onChangeText={(text) => { this.setState({ password: text})}} />
                        <TouchableOpacity style={StyleSheet.container}onPress={() => this.Validate(this.state.username,this.state.password)}>
                            <Text style={StyleSheet.TextStyle} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text style={StyleSheet.TextStyle}>Or sign Up</Text>
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
        paddingVertical: 30,

    },
    screenPos: {
        paddingTop: 100,
        width: '100%',
        height: '50%',
        alignContent: 'center',
        justifyContent: 'center',
        position: 'absolute',

    },
    Logo: {
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%'


    },
    TextInputStyle: {
        borderColor: 'black',
        borderWidth: 10,
        padding: 20,
        color: Colors.White.color,
        maxHeight: 50,
        maxWidth: 200

    },

    TextStyle: {
        color: Colors.White.color,
        textAlign: 'center',
        borderWidth: 1,
        padding: 10,
        fontSize: Spacing.TextSizes.SubText
    }
}
)