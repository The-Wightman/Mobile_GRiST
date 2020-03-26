import React, {Component} from 'react';
import { Images,Colors,Typography } from '../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity 
} from 'react-native'
import { Slider } from 'react-native-elements';

export class QuestionBox extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            Answer: "",
            Comment:"",
            Action: ""
            }  
            
    }
    render() {
        let Inputtype;
        if(this.props.values == "scale"){
            Inputtype = (
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
               <Slider
               value={this.state.value}
               onValueChange={value => this.setState({ value })}
               />
           <Text>Current Value: {this.state.value}</Text>
           <Text>{XMLnode.leftlabel} + {XMLnode.rightlabel}</Text>
           </View>
            )}
        else {
            Inputtype = (
                <View>
                <CheckBox  title='Yes' checked={this.setState.Answer("YES")}/>
                <CheckBox  title='No' checked={this.setState.Answer("NO")}/>
                <CheckBox  title='Dont Know' checked={this.setState.Answer("DK")}/>
                </View>
            )
        }
        return(
            <View>
                <View>
                 <Text>{XMLnode.Question}</Text>
                 <TouchableOpacity>
                    <Image source={Images.ballon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Images.document}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Images.lock_s}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert(XMLnode.help)}> 
                    <Image source={Images.info}/>
                </TouchableOpacity>
                </View>
                 <Text> Previous Answer : {XMLnode.Prev}</Text>
                 {Inputtype}
                 <TouchableOpacity onPress={() => this.setState.Answer("")}>
                    <Image source={Images.bin}/>
                    <Text>Clear answer</Text>
                </TouchableOpacity>
          </View>
        )}
}
const styles = StyleSheet.create({

})
 