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
            isClin : false, 
        }        
         
    }
    render() {
        let UpperLeft ;
        let LowerRight;
        let LowerLeft;
        const { navigation } = this.props;

        return(            
           <View style={styles.container} navigation={navigation}>
               <View>
                   <View>
                        {UpperLeft}
                   </View>
                   <View>

                   </View>
               </View>
               <View style={styles.Internal}>
                    <View>

                    </View>
                    <View>

                    </View>

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
        flex:1,
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