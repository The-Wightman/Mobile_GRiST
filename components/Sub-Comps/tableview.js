import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class CustomTable extends Component {
  constructor(props) {
    super(props); 
    
  } 
  render() {    
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={this.props.tableHead} flexArr={this.props.headflex} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={this.props.tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={this.props.tableData} flexArr={this.props.dataflex} style={this.props.rowHeight} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, padding: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },  
  text: { textAlign: 'center' }
});