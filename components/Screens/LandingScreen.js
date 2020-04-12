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
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {FunctionCard,cardTypes} from '../Sub-Comps/FunctionCard';


export default class signup extends Component{ 
  constructor(props) {
    super(props);
    
  }
  RelevantCards(){
    let selectedCards;
      for(x of cardTypes){
        if(this.props.isClin || x.isClin == "both"){
          selectedCards += <FunctionCard {...x} />
        }
      } 
    RelevantCards = (<View>{selectedCards}</View>)       
  } 
  render() { 
      let RelevantCards
      this.RelevantCards
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>          
          <DefaultTemplate/>          
          <View style={styles.screenPos}>   
          <ScrollView>
            {RelevantCards}
          </ScrollView>       
           <Text >Landing screen text???</Text>
           <FunctionCard {...cardTypes.Downloads}/>
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