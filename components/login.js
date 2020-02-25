import React, {Component} from 'react'
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

export default class Login extends Component {
    render() {
    <View style={styles.container,{padding:30}}>
        <View style={styles.logoContainer}>
            <Image style={styles.Logo}>

            </Image>
        </View>
      <Text>Welcome to Mobile GRiST</Text>
      <Text>Please enter your login credentials or tap sign up</Text>
      <View>
         <TextInput placeholder="Email" style={{borderColor: 'black', borderWidth:1, padding:10}}/>
         <TextInput placeholder="Password" style={{borderColor: 'black', borderWidth:1, padding:10}}/>
         <Button title="Submit Details"/>
      </View>
    </View>
    
    }
}   
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgb(32,53,70)',
            flexDirection: 'column'
        }
    })
