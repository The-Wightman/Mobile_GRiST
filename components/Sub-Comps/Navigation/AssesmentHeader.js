//Function: Sub header to provide current assessment information
//Description: Used to inform the user of the current logged in profile and the type of assessment,also responsible for handling sub modals for help and advice panels
//Inputs: Nav props, Screen Props
//Outputs: SubHeader component

//import standard react/react native libraries and styling.
import React, {Component} from 'react';
import { Colors, Spacing } from '../../../Styles'
import {
    StyleSheet,
    Text,
    View,       
    TouchableOpacity, 
    Modal
} from 'react-native'
//Import modal component to create as called from header
import AssessmentModal from '../AssessmentModals/Assessmentmodal';

// Create a new Header object which handles information from previous pages and pass it this information through the props component
export default class AssessmentHeader extends React.Component {
    constructor(props) {
        super(props);
        //Load the state object with default information to ensure that the header components are visible
        this.state = {
            isClin: true, 
            user: this.props.usernick,
            assessment: this.props.type,
            questionSet: this.props.subtype,
            username: this.props.useremail,
            modalVisible: false,
            modalType: "",
            modalTitle: "",
            formulation: "",
            safetyPlan: ""
        }        
        
    }
    setModalVisible(newstate){
        this.setState({modalVisible: newstate})
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
            <Text style={styles.HeadText}>Person being assessed: {this.state.username}</Text>
            <Text style={styles.HeadText}>Assessment: {this.state.assessment}</Text>
            </View>
            )
            // make the upper right store the assistant information for clinicians
            UpperRight = (
            <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"key",modalTitle: "Key Breakdown"}) }} >
                    <Text style={styles.TextStyle}>Key</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"tips",modalTitle: "Quick Tips"}) }}>
                    <Text style={styles.TextStyle}>Quick Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"process",modalTitle: "The Grist process"}) }}>
                    <Text style={styles.TextStyle}>GRiST Process</Text>
                </TouchableOpacity>
            </View>
            )
            // make the lower left provide adjustment and additional options only shown to clinicians
            LowerLeft = (
                <View style={styles.Internal}>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"judgement",modalTitle: "Risk Judgements"}) }}>
                    <Text style={styles.TextStyle}>Risk </Text>
                    <Text style={styles.TextStyle}>Judgements</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"formulation",modalTitle: "Risk Formulation"}) }}>
                    <Text style={styles.TextStyle}>Risk</Text>
                    <Text style={styles.TextStyle}>Formulation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"plan",modalTitle: "Safety Plan"}) }}>
                    <Text style={styles.TextStyle}>Safety Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"preview",modalTitle: "Preview Report"}) }}>
                    <Text style={styles.TextStyle}>Preview Report</Text>
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
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"key",modalTitle: "Key Breakdown"}) }}>
                        <Text style={styles.TextStyle}>Key</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"tips",modalTitle: "Quick Tips"}) }}>
                        <Text style={styles.TextStyle}>Quick Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"mygrist",modalTitle: "Using MyGrist"}) }}>
                        <Text style={styles.TextStyle}>Using myGRiST</Text>
                    </TouchableOpacity>
                   
                </View>
                )
                //provide adjustment and additional options only relevant to the user
            LowerLeft = (
                <View style={styles.Internal}>
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"answers",modalTitle: "My Answers"}) }}>
                        <Text style={styles.TextStyle}>My Answers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"advice",modalTitle: "Advice and Planning"}) }}>
                        <Text style={styles.TextStyle}>GRiST Advice </Text>
                        <Text style={styles.TextStyle}>& My Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Buttons} onPress={() => {this.setModalVisible(),this.setState({modalType:"guide",modalTitle: "My Next Steps"}) }}>
                        <Text style={styles.TextStyle}>Guide &</Text>
                        <Text style={styles.TextStyle}> Next Steps</Text>
                    </TouchableOpacity>                   
                </View>
                )
         }
         //the lower right quadrant is the same for all users as it oversees assesment handling such as leaving or saving progress.
         if(this.props.type !== "Practice"){
         LowerRight = (
             
            <View style={styles.Internal}>                
                <TouchableOpacity style={styles.Buttons} onPress={() => this.props.answerHandler("save")}>
                    <Text style={styles.TextStyle}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => this.props.answerHandler("suspend")}>
                    <Text style={styles.TextStyle}>Suspend</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Buttons} onPress={() => this.props.answerHandler("finish")}>
                    <Text style={styles.TextStyle}>Finish</Text>
                </TouchableOpacity>
            </View>             
            )
         }else {
             <View style={styles.Internal}></View>
         }
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
                <AssessmentModal 
                ref={modal => {this.modal = modal}}
                modalType={this.state.modalType}
                modalVisible={this.state.modalVisible}
                setModalVisible={this.setModalVisible.bind(this)}
                title = {this.state.modalTitle}
                content />                                           
           </View>
        )
    }
}
//component specific styling
const styles = StyleSheet.create({
    container: {                
        height:250,
        width:'100%',
        backgroundColor: Colors.White.color 

    },     
    controller: {
        flex:1,
        justifyContent:"space-between",
        alignSelf:'center',           
        flexDirection: 'column',
        width:'100%',        
        backgroundColor: Colors.LightGreen.color,
        height: '50%'
    },
    Internal: {
        flex:1,
        justifyContent:"space-evenly",  
        
        alignContent: 'center',                         
        flexDirection: 'row',
        maxWidth:'100%',                
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
    maxWidth:'25%',
    maxHeight: 100,
    textAlign:'center'
},
HeadText: {
    color: Colors.White.color,
    fontSize: Spacing.TextSizes.navText,
    maxWidth: '50%'
},
TextStyle: {
    fontSize: Spacing.TextSizes.smallText,
    textAlign:'center'
}
})