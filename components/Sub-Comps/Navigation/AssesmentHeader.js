//Function: Sub header to provide current assessment information
//Description: Used to inform the user of the current logged in profile and the type of assessment,also responsible for handling sub modals for help and advice panels
//Inputs: Nav props, Screen Props
//Outputs: SubHeader component

//import standard react/react native libraries and styling.
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
//Import modal component to create as called from header
import AssessmentModal from '../AssessmentModals/Assessmentmodal';

// Create a new Header object which handles information from previous pages and pass it this information through the props component
export default class AssessmentHeader extends React.Component {
    constructor(props) {
        super(props);
        //Load the state object with default information to ensure that the header components are visible
        this.state = {
            isClin: true, 
            user: "Eh",
            assessment: "full",
            questionSet: "State of mind",
            username: "David Wightman",
            modalVisible: false
        }        
         
    }
    //create render of the screen
    render() {
        //define empty dynamic variables for the quadrants of the header
        let UpperLeft;
        let UpperRight
        let LowerRight;
        let LowerLeft;
        //Store the navigation props as a constant
        const { navigation } = this.props;
        // if the user is a clinician
         if (this.state.isClin) {
            //make upper left store information of the current patient
            UpperLeft = (
            <View style={styles.Internal}>
            <Text style={styles.HeadText}>Person being assessed: {this.state.user}</Text>
            <Text style={styles.HeadText}>Assessment: {this.state.assessment}</Text>
            </View>
            )
            // make the upper right store the assistant information for clinicians
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
            // make the lower left provide adjustment and additional options only shown to clinicians
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
            // if the user is not a clinician they must be an ibndvidual user.          
         } else {
             //change the upper left wording to be apropriate for an individual
            UpperLeft = (
                <View style={styles.Internal}>
                <Text style={styles.HeadText}>Questions selected: {this.state.questionSet}</Text>
                <Text style={styles.HeadText}>Welcome: {this.state.username}</Text>              
                </View>
                )
                //provide the user with assistant information and relevant help guides.
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
                //provide adjustment and additional options only relevant to the user
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
         //the lower right quadrant is the same for all users as it oversees assesment handling such as leaving or saving progress.
         LowerRight = (
            <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons} >
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
            //take the loaded variables and return them as a render to the screen
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
                <AssessmentModal ref="modal" modalVisible={this.state.modalVisible}/>                                           
           </View>
        )
    }
}
//component specific styling
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