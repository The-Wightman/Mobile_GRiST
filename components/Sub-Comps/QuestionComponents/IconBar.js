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
            <TouchableOpacity onPress={() => Alert.alert('Information',gold_lock)}>
            <Image source={Images.lock_g}/>
            </TouchableOpacity>
           )
           break;
           case 'Soft': 
           PersistenceComp = (
            <TouchableOpacity onPress={() => Alert.alert('Information',silver_lock)}>
            <Image source={Images.lock_s}/>
            </TouchableOpacity>
           )
           break;
           default:                  
       }    
       if (this.props.help){
           HelpComp = (
        <TouchableOpacity onPress={() => Alert.alert('Information',this.props.help)}>
        <Image source={Images.info}/>
        </TouchableOpacity>
        )
       }
       if (this.props.alert){
            hasAlert=(
        <TouchableOpacity onPress={() => Alert.alert('Constraint',this.props.alert)}>
        <Image source={Images.exclamation}/>
        </TouchableOpacity>
            )
       }
        let fullBar = (  
        <View style={this.styles.IconBar}>      
        <TouchableOpacity >
            <Image source={Images.ballon}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={Images.document}/>
        </TouchableOpacity>    
        {PersistenceComp}
        {HelpComp}
        {hasAlert}
        </View>
    )       
        return(  
            <View>          
                {fullBar}
                 
            </View>           
        )
        }
styles = StyleSheet.create({
    IconBar: { 
        flex:0,     
        maxWidth:'33%',
       flexDirection:'row'
     }
})
}