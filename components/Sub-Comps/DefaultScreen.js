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
export default class DefaultTemplate extends React.Component {
    
    render() {
        return(
            <React.Fragment>
            <View style = {StyleSheet.container} >
            <KeyboardAvoidingView behaviour='padding'>
            <ImageBackground source={require('../../Assets/Background.png')} style={{width: '100%', height: '100%'}}>                      
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <SafeAreaView style={styles.container}>              
            <StatusBar barStyle="light-content" />
            <TouchableOpacity/>             
            
            </SafeAreaView> 
             </TouchableWithoutFeedback> 
             </ImageBackground>
            </KeyboardAvoidingView>
            </View>
            </React.Fragment>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: 30,
        zIndex:100
        
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