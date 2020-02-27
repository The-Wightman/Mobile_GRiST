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
import { Typography, Colors, Spacing, Images} from '../Styles'

export default class Login extends Component {
    render() {
        return (
            <View style = {StyleSheet.container} >
                <KeyboardAvoidingView behaviour='padding'>
             <ImageBackground source={Images.Background} style={{width: '100%', height: '100%'}}>                      
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
                <SafeAreaView style={styles.container}>              
                
                     <StatusBar barStyle="light-content" />
                             
                   
                        <View  >
                            <View style={styles.container} >
                           <Image source = {Images.GristLogo} style={StyleSheet.Logo} >
                            </Image>  
                            
                        </View >
                        <View style={styles.container}>
                            <Text style = {StyleSheet.TextStyle}>Welcome to Mobile GRiST</Text>
                            <Text style = {StyleSheet.TextStyle}>Please enter your login credentials or tap sign up</Text>
                        </View>
                            <View style={styles.container}>
                            <TextInput placeholder="Email" style={StyleSheet.TextInputStyle} />
                            <TextInput placeholder="Password" style={StyleSheet.TextInputStyle} />
                            <TouchableOpacity style = {StyleSheet.container}>
                                <Text style = {StyleSheet.TextStyle} >Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <Text style = {StyleSheet.TextStyle}>Or sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                          
                </SafeAreaView> 
                </TouchableWithoutFeedback> 
             </ImageBackground>
            </KeyboardAvoidingView>
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
       borderWidth: 1,
       padding: 50,
       color: Colors.White.color
       
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