import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Picker,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,  
} from 'react-native';
import { color } from 'react-native-reanimated';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Header'
import QuestionBoxTemplate from '../Sub-Comps/QuestionBoxes'

export default class signup extends Component{ 
  constructor(props) {
    super(props);
    
  }
  render() {   
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>
         
          <View style={styles.screenPos}>          
           <Text >Landing screen text???</Text>
           </View>
          </View>

        )
    }
  }
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
      fontSize: 24,
      color: 'black'
  },
  screenPos: {
    paddingTop: '15%',
    width: '100%',
    height: '70%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
})