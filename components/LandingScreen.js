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
export default class LandingScreen extends Component{
    render() {
        return(
                <View style={style.container}>
                    <Text style={styles.title}> LANDING SCREEN</Text>
                    <TouchableOpacity><Text>
                      Go Back
                      </Text>
                      </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
      fontSize: 24
  }
})