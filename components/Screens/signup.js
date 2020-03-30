import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,  
    TextInput,    
    TouchableOpacity,   
} from 'react-native'
import { Typography, Colors, Spacing, Images} from '../../Styles'
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import Validate from '../Sub-Comps/Validator'


export default class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
        Email: "",
        username: "",
        password: "",
        } 
    } 
    handleSubmission(UID,Email,Pass,Action){
        if  (Validate(UID,Email,Pass,Action)){
            //HANDLE json REQUEST
        }
       }
    render() {
        return (
            <View >        
            <DefaultTemplate/>
                <View  style={styles.screenPos} >
                    <View style={styles.Logo} >
                        <Image source={Images.GristLogo} >
                        </Image>

                    </View >
                    <View style={styles.container}>
                        <Text style={styles.TextStyle}>Sign up to GRIST</Text>
                        <Text style={styles.TextStyle}>Please enter your email and Information</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput placeholder="Username" style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ username: text})}}/>
                        <TextInput placeholder="Email" style={styles.TextInputStyle}   onChangeText={(text) => { this.setState({ Email: text})}}/>
                        <TextInput placeholder="Password" style={styles.TextInputStyle}  onChangeText={(text) => { this.setState({password: text})}} />
                        <TouchableOpacity style={styles.container} onPress={() => this.handleSubmission(this.state.username,this.state.Email,this.state.password,"signup")}>
                            <Text style={styles.TextStyle} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign In') }>
                            <Text style={styles.TextStyle}>Or Go Back</Text>
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
        color: Colors.White.color,
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