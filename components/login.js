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
} from 'react-native'
import { Typography, Colors, Spacing, Images} from '../Styles'

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container, { padding: 30 }}>
               
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behaviour='padding' >
               
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View>
                            <View>
                           <Image source = {Images.GristLogo} style={{height: 128, width: 128 }} resizeMode={'cover'}>
                            </Image>  
                            
                        </View>
                        <Text>Welcome to Mobile GRiST</Text>
                        <Text>Please enter your login credentials or tap sign up</Text>
                        <View>
                            <TextInput placeholder="Email" style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
                            <TextInput placeholder="Password" style={{ borderColor: 'black', borderWidth: 1, padding: 10 }} />
                            <TouchableOpacity>
                                <Text>Sign In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Or sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </TouchableWithoutFeedback>
                    
                </KeyboardAvoidingView>
                          </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32,53,70)',
        flexDirection: 'column'
    }
})
