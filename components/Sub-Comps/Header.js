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
               <TouchableOpacity style={styles.Icon} onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Image source={Images.GristLogo} ></Image>
               </TouchableOpacity>
               <View style={styles.Internal}>
                    <Text style={styles.Heade}> e</Text>
                   <Text style={styles.HeadText}> GRiST</Text>
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
        backgroundColor: Colors.LightGrey.color
        
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
