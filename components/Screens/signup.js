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



export default function _signup ({navigation}){
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
                        <TextInput placeholder="First Name" style={StyleSheet.TextInputStyle} />
                        <TextInput placeholder="Last Name" style={StyleSheet.TextInputStyle} />
                        <TextInput placeholder="Email" style={StyleSheet.TextInputStyle} />
                        <TouchableOpacity style={StyleSheet.container}>
                            <Text style={StyleSheet.TextStyle} >Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign In') }>
                            <Text style={StyleSheet.TextStyle}>Or Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                          
              </View>
        )
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