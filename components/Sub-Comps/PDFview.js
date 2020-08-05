import React from 'react';
import { StyleSheet, Dimensions, View,ScrollView } from 'react-native';

import Pdf from 'react-native-pdf';

export default class PDFTemplate extends React.Component {
    constructor(props) {
        //and inherit the props of the father component
        super(props);
        //create a new state object and set the values to empty for the moment.
        this.state = {
            pages:7            
          }
      }
      
       
    render() {
        let PDFinfo={uri:this.props.URI,cache:true};
           return (
            <ScrollView >
                <Pdf
                    source={PDFinfo}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        this.setState({pages:numberOfPages});
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        this.setState({pages:numberOfPages})
                        console.log(`current page: ${page}`),
                        console.log(`numpage: ${numberOfPages}`),
                        console.log(`state: ${this.state.pages}`);
                        
                    }}
                    onError={(error)=>{
                        console.log(error);
                        PDFinfo = {uri:this.props.FILE,cache:true}
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf,{height:Dimensions.get('window').height*(this.state.pages*0.73)}}/>
            </ScrollView>
        )
  }
}

const styles = StyleSheet.create({
      pdf: {        
        width: Dimensions.get('window').width-60,        
    }
});