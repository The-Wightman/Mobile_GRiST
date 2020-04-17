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
import {silver_lock, gold_lock} from '../Text_Excerpts'

export default class IconBar extends React.Component{
    constructor(props) {
        super(props);     
        }    
    render() {                
       let PersistenceComp
       let HelpComp
       let hasAlert
       switch(this.props.persistence){
           case 'Hard': 
          PersistenceComp = (
            <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Information',gold_lock)}>
            <Image style={styles.Iconsize} source={Images.lock_g}/>
            </TouchableOpacity>
           )
           break;
           case 'Soft': 
           PersistenceComp = (
            <TouchableOpacity style={styles.Iconstyle}  onPress={() => Alert.alert('Information',silver_lock)}>
            <Image style={styles.Iconsize} source={Images.lock_s}/>
            </TouchableOpacity>
           )
           break;
           default:                  
       }    
       if (this.props.help){
           HelpComp = (
        <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Information',this.props.help)}>
        <Image style={styles.Iconsize} source={Images.info}/>
        </TouchableOpacity>
        )
       }
       if (this.props.alert){
            hasAlert=(
        <TouchableOpacity style={styles.Iconstyle} onPress={() => Alert.alert('Constraint',this.props.alert)}>
        <Image style={styles.Iconsize} source={Images.exclamation}/>
        </TouchableOpacity>
            )
       }
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
    )       
        return(  
            <View style={styles.IconBar}>          
                {fullBar}
                 
            </View>           
        )
        }

}