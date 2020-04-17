import React, {Component} from 'react';
import { Images,Colors,Typography,Spacing } from '../../../Styles'
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
            userInput: "",
            yesBool: false,
            noBool: false,
            dkBool: false,
            actionModal:false,
            commentModal:false,          
                    
              }
              
            
    }
    modalAnswer(Text){
        this.setState({userInput: Text})
    }
    clearModals(){
        this.setState({commentModal: false,actionModal: false, userInput: ""})
    }
    summonModal(modal){
        if (modal == "comment") {
            this.setState({commentModal: !this.commentModal})
        }
        if (modal == "plan"){
            this.setState({actionModal: !this.actionModal})
        }
       
    }
     UpdateInformation(){
         let bool = true
        switch(bool){
        case this.state.actionModal = bool:
            this.state.Action = this.state.userInput
            break;
            case commentModal = bool:
            this.state.Comment = this.state.userInput
            break;
            default:
            
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
            PreviousAnswer = (<Text style={styles.TextStyle}>Previous Answer: {this.props.prev}</Text>)            

        }
        
        
        return(
            <View style={{paddingVertical:6}}>
            <View style={styles.mainContainer}>
                <View style={styles.IconBar}> 
                <View style={{flex:1,maxWidth:'50%'}}>
                    <Text style={styles.MainQuestion}>{this.props.question}</Text> 
                </View>               
               <View > 
                   <IconBar persistence={this.props.persistence} alert={this.props.alert} help={this.props.help} summonModal={this.summonModal.bind(this)}/>                               
               </View>                                   
                </View>
                 {PreviousAnswer}
                 {Inputtype}
                 <TouchableOpacity onPress={() => this.clearAnswer()} >               
                    <View style={styles.IconBar}> 
                    <Image style={styles.Iconsize}source={Images.bin}/>
                    <Text style={styles.TextStyle}>Clear answer</Text>
                    </View>
                   
                </TouchableOpacity>
                <View>
                    <DetailsModal ref={(ref) => this.commentmodal = ref}  UpdateInformation={ this.UpdateInformation.bind(this)} modalVisible={this.state.commentModal} summonModal={this.clearModals.bind(this)} modalAnswer = {this.modalAnswer.bind(this)} type={"comment"} title={"Leave a comment"}/>
                    <DetailsModal ref={(ref) => this.planmodal = ref}  UpdateInformation={ this.UpdateInformation.bind(this)} modalVisible={this.state.actionModal} summonModal={this.clearModals.bind(this)} modalAnswer = {this.modalAnswer.bind(this)} type={"comment"} title={"Leave an action plan"}/>
                </View>
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
         backgroundColor: Colors.White.color,
         paddingVertical:10
    },
    TextStyle: {
        color: Colors.DarkGreen.color,                
        fontSize: Spacing.TextSizes.navText
     }, 
     MainQuestion:{
        color: Colors.DarkGreen.color,                
        fontSize: Spacing.TextSizes.FieldText
     },    
     scaleLabel:{
        alignItems: 'stretch', justifyContent: 'space-between', flexDirection:'row' 
     },
     centeredView: {
        
        width: '100%',
        height: '100%',
        minWidth: '100%',
        minHeight: '100%',
        alignContent: 'center',
        paddingTop: '25%',
        position: 'absolute',
      },
      modalView: {
        minWidth:'90%',
        maxHeight:'100%',                
        borderWidth:2,
        marginHorizontal: '5%',
        backgroundColor: Colors.White.color,
        borderColor:Colors.LightGrey.color,
        borderRadius: 8,       
        alignItems: "center",
        shadowColor: Colors.DarkGrey.color,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: Colors.LightGreen.color,
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color:Colors.White.color,
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: '100%'
      },
      
      modalText: {
        color:Colors.LightGreen.color,
        marginBottom: 15,
        textAlign: "center"
      },
      TextInputStyle: {
        borderColor: Colors.LightGrey.color,
        borderWidth: 3,
        padding: 10,
        color: Colors.Black.color,        
        width: '75%',
        height:'60%',
        backgroundColor: Colors.White.color,
        
    },
    rack:{
        flex:4, alignItems: 'center', justifyContent: 'space-between', flexDirection:'row'
    },
    IconBar:{      
        flexDirection:'row',       
        minWidth:'50%',
        alignContent:'center',
        justifyContent:'center',
        paddingTop: 5

      },
      Iconstyle:{
          flex: 1,
          minWidth:30,
          minHeight:30,
          marginHorizontal:5
      },
      Iconsize:{
        minWidth:30,
        minHeight:30
      }
})
 