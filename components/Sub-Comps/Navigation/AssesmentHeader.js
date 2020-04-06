import React, {Component} from 'react';
import { Images,Colors,Typography } from '../../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity 
} from 'react-native'

import { DrawerActions,useNavigation } from '@react-navigation/native';

export default class AssessmentHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClin: false, 
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
            <View>
            <Text>Person being assessed: {this.state.user}</Text>
            <Text>Assessment: {this.state.assessment}</Text>
            </View>
            )
            UpperRight = (
            <View>
                <TouchableOpacity>
                    <Text>Key</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Quick Tips</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>The GRiST Process</Text>
                </TouchableOpacity>
            </View>
            )
            LowerRight = (
                <View>
                <TouchableOpacity>
                    <Text>Risk Judgements</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text>Risk Formulation</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text>Safety Plan</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Preview Report</Text>
                </TouchableOpacity>
                </View>
            )            
         } else {
            UpperLeft = (
                <View>
                <Text>Questions selected: {this.state.questionSet}</Text>               
                </View>
                )
            UpperRight = (
                <View>
                    <TouchableOpacity>
                        <Text>Key</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Quick Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Using myGRiST</Text>
                    </TouchableOpacity>
                    <Text>Welcome: {this.state.username}</Text>
                </View>
                )
            LowerRight = (
                <View>
                    <TouchableOpacity>
                        <Text>Review Answers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>GRiST Advice & My Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Guide & Next Steps</Text>
                    </TouchableOpacity>                   
                </View>
                )
         }
         LowerLeft = (
            <View style={styles.Internal}>
                <TouchableOpacity>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Suspend</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Finish</Text>
                </TouchableOpacity>
            </View>
            )

        return(            
           <View style={styles.container} navigation={navigation}>
               <View styles={styles.Internal}>                   
                        {UpperLeft}                   
                        {UpperRight}                   
               </View>
               <View styles={styles.Internal}>
                    {LowerLeft}
                    {LowerRight}                    
                </View>                              
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 30,        
        zIndex:100,
        height: '10%',
        width:'100%',
        backgroundColor: Colors.White.color
        
    },
       Icon: {
            flex:1,
            justifyContent:"flex-start",
            alignSelf:'center',           
            flexDirection: 'row',
            
        

    },
    Internal: {
        flex:4,
        justifyContent:"flex-end",
        alignSelf:'center',           
        flexDirection: 'row',
},
Heade: {
    color: Colors.DarkGreen.color,
    fontSize: Typography.Header.fontSize
},
HeadText: {
    color: Colors.White.color,
    fontSize: Typography.Header.fontSize
},
    Title: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        color : Colors.White.color
        
        
    

}
})