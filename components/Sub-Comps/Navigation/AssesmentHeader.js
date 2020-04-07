import React, {Component} from 'react';
import { Images,Colors,Typography, Spacing } from '../../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity 
} from 'react-native'

import { DrawerActions,useNavigation } from '@react-navigation/native';
import AssessmentModal from '../AssessmentModals/Asessmentmodal';

export default class AssessmentHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClin: true, 
            user: "Eh",
            assessment: "full",
            questionSet: "State of mind",
            username: "David Wightman"
        }        
         
    }
    render() {
        let UpperLeft;
        let UpperRight
        let LowerRight;
        let LowerLeft;
        const { navigation } = this.props;
         if (this.state.isClin) {
            UpperLeft = (
            <View style={styles.Internal}>
            <Text style={styles.HeadText}>Person being assessed: {this.state.user}</Text>
            <Text style={styles.HeadText}>Assessment: {this.state.assessment}</Text>
            </View>
            )
            UpperRight = (
            <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons} >
                    <Text>Key</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Quick Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>GRiST Process</Text>
                </TouchableOpacity>
            </View>
            )
            LowerLeft = (
                <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Risk </Text>
                    <Text>Judgements</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Risk</Text>
                    <Text>Formulation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Safety Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Preview Report</Text>
                </TouchableOpacity>
                </View>
            )            
         } else {
            UpperLeft = (
                <View style={styles.Internal}>
                <Text style={styles.HeadText}>Questions selected: {this.state.questionSet}</Text>
                <Text style={styles.HeadText}>Welcome: {this.state.username}</Text>              
                </View>
                )
            UpperRight = (
                <View style={styles.Internal}>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>Key</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>Quick Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>Using myGRiST</Text>
                    </TouchableOpacity>
                   
                </View>
                )
            LowerLeft = (
                <View style={styles.Internal}>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>My Answers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>GRiST Advice </Text>
                        <Text>& My Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons}>
                        <Text>Guide &</Text>
                        <Text> Next Steps</Text>
                    </TouchableOpacity>                   
                </View>
                )
         }
         LowerRight = (
            <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Suspend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons}>
                    <Text>Finish</Text>
                </TouchableOpacity>
            </View>
            )

        return(            
           <View style={styles.container} navigation={navigation}>
               <View style={styles.controller}>                                 
                {UpperLeft}                                    
                {UpperRight}                         
               </View>
               <View style={styles.controller}>               
                {LowerLeft}               
                {LowerRight}                    
                </View> 
                <AssessmentModal name="AssModal"/>                                           
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {                
        height: '18%',
        width:'100%',
        backgroundColor: Colors.White.color
        
    },     
    controller: {
        flex:1,
        justifyContent:"space-between",
        alignSelf:'center',           
        flexDirection: 'column',
        width:'100%',
        height:'50%',
        backgroundColor: Colors.LightGreen.color
    },
    Internal: {
        flex:1,
        justifyContent:"space-evenly",  
        
        alignContent: 'center',                         
        flexDirection: 'row',
        maxWidth:'100%',
        height: '50%'
        
},
Buttons:{ 
    borderWidth:1,
    borderColor:Colors.LightGrey.color,
    borderRadius: 8,
    backgroundColor: Colors.White.color,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',   
    minWidth:'24%',
    minHeight:'90%',
    maxWidth:'25%',
    textAlign:'center'
},
HeadText: {
    color: Colors.White.color,
    fontSize: Spacing.TextSizes.navText,
    maxWidth: '50%'
}
})