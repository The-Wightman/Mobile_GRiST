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
                <KeyboardAvoidingView behaviour='padding' >
             <ImageBackground source={Images.Background} style={{width: '100%', height: '100%'}}>                      
               <SafeAreaView style={{ padding: 30 }}>              
                <StatusBar barStyle="light-content"  />
                             
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style = {StyleSheet.container} >
                            <View >
                           <Image source = {Images.GristLogo} style={StyleSheet.Logo} >
                            </Image>  
                            
                        </View>
                            <Text>Welcome to Mobile GRiST</Text>
                            <Text>Please enter your login credentials or tap sign up</Text>
                        <View>
                            <TextInput placeholder="Email" style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
                            <TextInput placeholder="Password" style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
                            <TouchableOpacity style = {StyleSheet.container}>
                                <Text>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Or sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </TouchableWithoutFeedback>                   
               
            </SafeAreaView>
         </ImageBackground>
          </KeyboardAvoidingView>
         </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 30
    }
})
const Logo = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            height: '100%'
        }
})
