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
                <View behaviour='padding' style={styles.screenPos} >
                    <View style={styles.container} >
                        <Image source={Images.GristLogo} style={StyleSheet.Logo} >
                        </Image>

                    </View >
                    <View style={styles.container}>
                        <Text style={StyleSheet.TextStyle}>Sign up to GRIST</Text>
                        <Text style={StyleSheet.TextStyle}>Please enter your email and Information</Text>
                    </View>
                    <View style={styles.container}>
                        <TextInput placeholder="Username" style={StyleSheet.TextInputStyle}   onChangeText={(text) => { this.setState({ username: text})}}/>
                        <TextInput placeholder="Email" style={StyleSheet.TextInputStyle}   onChangeText={(text) => { this.setState({ Email: text})}}/>
                        <TextInput placeholder="Password" style={StyleSheet.TextInputStyle}  onChangeText={(text) => { this.setState({password: text})}} />
                        <TouchableOpacity style={StyleSheet.container} onPress={() => this.handleSubmission(this.state.username,this.state.Email,this.state.password,"signup")}>
                            <Text style={StyleSheet.TextStyle} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign In') }>
                            <Text style={StyleSheet.TextStyle}>Or Go Back</Text>
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