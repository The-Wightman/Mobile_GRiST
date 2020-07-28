//Function: generic header for all page screens
//Description: defined header that can be imported across screen to prevent code reptition and allow for easy modification application wide.
//Inputs: Style/Navigation Props
//Outputs: Header component

//Standard react native import statements
import React, {Component} from 'react';
import { Images,Colors,Typography } from '../../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity 
} from 'react-native'

//3rd party navigation library to link the header to the currently loaded Drawer navigator and the unauthed stack navigator.
import { DrawerActions,useNavigation } from '@react-navigation/native';

// Create a new Header object which handles information from previous pages and pass it this information through the props component
export default class MainHeader extends React.Component {
    constructor(props) {
        super(props);
     
    }
    // render the component
    render() {
        //Set the passed navigation props as a constant for the current component
        const { navigation } = this.props;
        //return the visual render using the following styling
        //line 35 features a touchable opcaity calling the drawers toggle function to allow for natural calling and dismissal of the in application navigation.
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
 //component specific styling
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
