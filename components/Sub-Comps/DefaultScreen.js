//Function: Create a default screen frame
//Description: Create a platform upon which other smaller screen componenets can be placed 
//             to ensure consitsent styling and spacing across all mobile devices as well as certain usage elements 
//             such as dismiss on background select.
//Inputs: Components Subcomps, StyleProps
//Outputs: Class Defaulttemplate

//Import react and react native libraries
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
//import custom styling
import { Typography, Colors, Spacing, Images} from '../../Styles/index'
//import 3rd party keyboard view to allow keyboard dismissal on background select.
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Create a new class that is a component base with additional visual elements.
export default class DefaultTemplate extends React.Component {    
    //return the visual element of the newly defined component
    render() {
        //return a react fragment to allow for React elements to all becontained inside of one tag set
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
//Component specific styling
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