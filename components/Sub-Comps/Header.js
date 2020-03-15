import React, {Component} from 'react';
import { Images,Colors,Typography } from '../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity 
} from 'react-native'

import { DrawerActions,useNavigation } from '@react-navigation/native';

export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);
     
    }
    render() {
        const { navigation } = this.props;
        return(
            
           <View style={styles.container} navigation={navigation}>
               <TouchableOpacity style={styles.Internal} onPress={() => DrawerActions.toggleDrawer()}>
                <Image source={Images.GristLogo} ></Image>
               </TouchableOpacity>
               <View style={styles.Internal}>
                   <Text style={Typography.Header}> E-Grist Mobile</Text>
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
        height: 50,
        width:'100%',
        backgroundColor: Colors.LightGrey.color
        
    },
       Internal: {
            flex:1,
            justifyContent:"flex-start",
            alignSelf:'center',           
            flexDirection: 'row',
            
        

    },
    Title: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        color : Colors.White.color
        
        
    

}
})
