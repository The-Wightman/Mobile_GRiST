import * as Buttons from './buttons'
import * as Colors from './colors'
import * as Spacing from './spacing'
import * as Typography from './typography'
import * as Images from './Images'
import * as PDFS from './pdfs'
import React from 'react';
import {StyleSheet} from 'react-native'

const MYstyle = StyleSheet.create({
    container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    },
    title: {
      fontSize: 24,
      color: 'black'
    },
    screenPos: {
    paddingTop: '15%',
    paddingBottom: '5%',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    
    },
    TextStyle: {
    color: Colors.Black.color,                
    fontSize: Spacing.TextSizes.navText,
    marginBottom: 10},
    
    })

    const NavStyle = ({
      activeTintColor : Colors.White.color,
      activeBackgroundColor: Colors.LightGreen.color,
      inactiveTintColor: Colors.White.color,
      inactiveBackgroundColor: Colors.DarkGreen.color,
      itemStyle: { marginVertical: 5 },
      contentContainerStyle: {backgroundColor:Colors.LightGrey.color }
    })
export { Typography, Spacing, Colors, Buttons, Images, PDFS ,MYstyle,NavStyle}

