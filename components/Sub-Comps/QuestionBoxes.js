import React, {Component} from 'react';
import { Images,Colors,Typography,Spacing } from '../../Styles'
import {
    StyleSheet,
    Text,
    View,
    Image,   
    TouchableOpacity, 
    ColorPropType
} from 'react-native'
import { Slider,CheckBox } from 'react-native-elements';
import IconBar from './IconBar'
import DetailsModal from './detailsModal'

export default class QuestionBox extends React.Component{
    constructor(props) {
        super(props);        
        this.state = {
            Answer: "",
            Comment:"",
            Action: "", 
            value: "" ,
            yesBool: false,
            noBool: false,
            dkBool: false
                    
              }
            
    }
    summonModal(name){
        this.refs.child.setModalVisible()
    }
     UpdateInformation(Type, Content){
        switch(Type){
        case "Action":
            this.state.Action = Content
            break;
            case "Management":
            this.state.Action = Content
            break;
            default:
            this.state.Comment = Content
        }
    }
    clearAnswer(){
        {if(this.props.value=="scale"){
            this.UpdateAnswer("")}
       else{
            this.checkboxAnswer("")
          }
      }
    }
    UpdateAnswer(Answer){
        this.setState({Answer: Answer})
        
    }
    checkboxAnswer(Answer){
        switch(Answer){
            case "YES":
            this.state.yesBool = true,
            this.state.noBool = false,
            this.state.dkBool = false
            break;
            case "NO":
                this.state.yesBool = false,
                this.state.noBool = true,
                this.state.dkBool = false
            break;
            case "DK":
                this.state.yesBool = false,
                this.state.noBool = false,
                this.state.dkBool = true
            break;
            default:
                this.state.yesBool = false,
                this.state.noBool = false,
                this.state.dkBool = false
        }
        this.setState({Answer: Answer})
        
    }

    render() {
        let modal;
        let Inputtype;
        let PreviousAnswer;        
        if(this.props.value == "scale"){
            Inputtype = (
            <View>    
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center',paddingHorizontal: 20,paddingVertical:20 }}>
               <Slider
               value={this.props.prev}
               onValueChange={value => this.UpdateAnswer(value)}
               minimumValue={0}
               maximumValue={10}
               step={1} 
               animateTransitions={true} 
               thumbTintColor={Colors.DarkGreen.color}              
               />
            </View>
           <View style={styles.scaleLabel}>
           <Text style={styles.TextStyle}>{this.props.leftlabel}</Text>
           <Text style={styles.TextStyle}>Current Value: {this.state.Answer}</Text>
           <Text style={styles.TextStyle}> {this.props.rightlabel}</Text>
           </View>
           </View>
            )}
        else {
            Inputtype = (
                <View style={styles.checkboxContainer}>
                <CheckBox  title='Yes' checked={this.state.yesBool} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color} onPress={() => this.checkboxAnswer("YES" )}/>
                <CheckBox  title='No' checked={this.state.noBool} checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color} onPress={() => this.checkboxAnswer("NO" )}/>
                <CheckBox  title='Dont Know' checked={this.state.dkBool}  checkedIcon='dot-circle-o'  uncheckedIcon='circle-o'  checkedColor={Colors.DarkGreen.color}onPress={() => this.checkboxAnswer("DK")}/>
                </View>
            )
        }
        if (this.props.prev){
            PreviousAnswer = (<Text>Previous Answer: {this.props.prev}</Text>)
        }
        
        
        return(
            <View style={{paddingVertical:5}}>
            <View style={styles.mainContainer}>
                <View style={styles.topBar}>                
                 <Text style={styles.TextStyle}>{this.props.question}</Text>                                  
                 <IconBar persistence={this.props.persistence} alert={this.props.alert} help={this.props.help} />                               
                </View>
                 {PreviousAnswer}
                 {Inputtype}
                 <TouchableOpacity onPress={() => this.clearAnswer()} >               
                    <View style={styles.topBar}> 
                    <Image style={{maxWidth: '15%'}}source={Images.bin}/>
                    <Text style={styles.TextStyle}>Clear answer</Text>
                    </View>
                   
                </TouchableOpacity>
                <DetailsModal name="comment" addmethod={CommodalVisible => this.setModalVisible = CommodalVisible} UpdateInformation={ this.UpdateInformation()} />
                <DetailsModal name="plan" addmethod={PlanmodalVisible => this.setModalVisible = PlanmodalVisible} type={"Action"} UpdateInformation={ this.UpdateInformation()}/>
          </View>
          </View>
        )}
}
styles = StyleSheet.create({
    checkboxContainer: {
        alignItems: 'stretch', justifyContent: 'center', flexDirection:'row'
    },
    mainContainer:{
        borderWidth:1,
         borderColor:Colors.LightGrey.color,
         borderRadius: 15,
         backgroundColor: Colors.White.color
    },
    TextStyle: {
        color: Colors.DarkGreen.color,                
        fontSize: Spacing.TextSizes.navText
     },
     topbar: {
        flex:4, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'
     },
     scaleLabel:{
        alignItems: 'stretch', justifyContent: 'space-between', flexDirection:'row' 
     }
     
})
 