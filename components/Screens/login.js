import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native'
import { Typography, Colors, Spacing, Images} from '../../Styles'
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import { StackActions } from '@react-navigation/native';


export default class Login extends Component {
    constructor(props){
        super(props);
        
        
        this.state={
            username:'',
            password:'',
        }
    }
    render() {
        
        return ( 
            <View>        
            <DefaultTemplate/>
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
                        <TextInput placeholder="Email" style={StyleSheet.TextInputStyle} />
                        <TextInput placeholder="Password" style={StyleSheet.TextInputStyle} />
                        <TouchableOpacity style={StyleSheet.container}>
                            <Text style={StyleSheet.TextStyle} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.push('Landing')) }>
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
    screenPos:{
        paddingTop:100,
        width:'100%',
        height: '50%',
        alignContent:'center',
        justifyContent:'center',
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
       padding: 50,
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