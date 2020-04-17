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
    Platform,    
} from 'react-native'
import { Typography, Colors, Spacing, Images} from '../../Styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class DefaultTemplate extends React.Component {    
    render() {
        return(
            <React.Fragment>
            <View style = {styles.Background} >
                             
                    
            <ImageBackground source={require('../../Assets/Background.png')} style={{width: '100%', height: '100%'}}> 
            <KeyboardAwareScrollView 
                    behavior='padding'
                    style={{width: '100%', height: '100%'}}>                        
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
            <SafeAreaView style={styles.container}>              
            <StatusBar barStyle="light-content" />
            <TouchableOpacity/>             
            
            </SafeAreaView> 
             </TouchableWithoutFeedback> 
             </KeyboardAwareScrollView> 
             </ImageBackground>
           
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
    },
    Background: {
        width: '100%',
        height: '100%'
    }
}
)