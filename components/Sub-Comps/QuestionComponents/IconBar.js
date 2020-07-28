//Function: Format the icons used on each question box
//Description: Create a re usable component for the questions icon bar, prevents code duplication
//Inputs: Style Props
//Outputs: IconBar bar

//Import react native and react standard libraries
import React, {Component} from 'react';
import { Images,Colors,Typography,Spacing } from '../../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity,
    Alert
} from 'react-native'
//pull text from store of text to allow for single point of update
import {silver_lock, gold_lock} from '../Text_Excerpts'


// Create a new Iconbar object which handles information from father component and pass it this information through the props component
export default class IconBar extends React.Component{
    constructor(props) {
        super(props);     
        }    
    render() {  
        //create variables for components that change based on question type and user             
       let PersistenceComp
       let HelpComp
       let hasAlert
       //handle the the persistence element of the father question component
       switch(this.props.persistence){
        //if the persistence is HARD then use the golden lock, call the questions information for persistence and store it in an alert.   
        case 'Hard': 
          PersistenceComp = (
            <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Information',gold_lock)}>
            <Image style={styles.Iconsize} source={Images.lock_g}/>
            </TouchableOpacity>
           )
           break;
           //else use the Soft and silver lock options
           case 'Soft': 
           PersistenceComp = (
            <TouchableOpacity style={styles.Iconstyle}  onPress={() => Alert.alert('Information',silver_lock)}>
            <Image style={styles.Iconsize} source={Images.lock_s}/>
            </TouchableOpacity>
           )
           break;
           default:                  
       }  
       //if a help component for the question exists, then load the help component with this information behind an on touch alert.  
       if (this.props.help){
           HelpComp = (
        <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Information',this.props.help)}>
        <Image style={styles.Iconsize} source={Images.info}/>
        </TouchableOpacity>
        )
       }
       //if the question also has an alert then perform the same actions as help but for an additional alert symbol.
       if (this.props.alert){
            hasAlert=(
        <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Constraint',this.props.alert)}>
        <Image style={styles.Iconsize} source={Images.exclamation}/>
        </TouchableOpacity>
            )
       }
       //create the fullbar using the loaded componeents plus componenets that must always be present.
        let fullBar = (  
        <View style={styles.IconBar}>      
        <TouchableOpacity style={styles.Iconstyle} onPress={() => this.props.summonModal("comment")} >
            <Image style={styles.Iconsize} source={Images.ballon}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Iconstyle} onPress={() => this.props.summonModal("plan")}>
            <Image  style={styles.Iconsize} source={Images.document}/>
        </TouchableOpacity> 
        {PersistenceComp} 
        {HelpComp}
        {hasAlert}       
        </View>
    )   //return the completed component as the renderable object back to the question component.
        return(  
            <View style={styles.IconBar}>          
                {fullBar}
                 
            </View>           
        )
        }

}