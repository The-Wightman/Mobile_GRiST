//Function: Display additional app information
//Description: Hnadles the creation and rendering of the help screen containing a range of text that provides guidance for using the app and resolving common issues.
//Inputs: ScreenProps (User specific information),NavProps (Page specific information)
//Outputs: None

//Common import statments for react native, sub components, & styles
import React, {Component} from 'react';
import {  
  StyleSheet,
  View,
  Text,    
} from 'react-native';
import DefaultTemplate from '../Sub-Comps/DefaultScreen'
import MainHeadTemplate from '../Sub-Comps/Navigation/Header'
import {Colors,Spacing} from '../../Styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Card} from 'react-native-elements';

// Create a new Help object which handles information from previous pages and pass it this information through the props component
export default class Help extends Component{ 
  constructor(props) {
    super(props);
    
  }
  // create a new render for this page which has distinct cards related to eacxh common issue, with the navigation bar at the top of the application.
  render() {       
        return(
          <View >
          <MainHeadTemplate navigation={this.props.navigation}/>
          <DefaultTemplate/>          
          <View style={styles.screenPos}>
          <KeyboardAwareScrollView>
            <View >
            <Card title="Guide to GRiST Mobile">
                <Text style={styles.TextStyle}>The GRiST mobile interface is deisgned to directly reflect the Parent website however certain elements are changed</Text>
                <Text style={styles.TextStyle}>To find any feature please use the search tab by clicking the icon top left and selecting search or swiping the menu in from the left of the screen.</Text>
                <Text style={styles.TextStyle}>Note many pages uses scrolling views, if your phone does not support this for any reason please use the online website.</Text>
                <Text style={styles.TextStyle}> Features and functionality are added regurlarly ,make sure your version is up to date by visiting the GRiST website.</Text >           
                
              </Card>
              <Card title="Assessment Types">
                <Text style={styles.TextStyle}>Assessment mode — There are two modes of assessment: </Text>
                <Text style={styles.TextStyle}>Full assessments show all the questions for assessing and managing risks and safety.</Text>
                <Text style={styles.TextStyle}>Screening assessments highlight the most important questions for rapid assessment of risks only.</Text>
                <Text style={styles.TextStyle}>Sensible options are chosen by default, so you may find that you do not need to change any settings in many cases.</Text>
              </Card>
              <Card title="Conducting Assessments">
                <Text style={styles.TextStyle}>If this is the first assessment for a person then you will need to select the 'start new assessment' button. If some previous assessments exist, then you should normally either resume or repeat the most recent assessment (i.e. the one in the first row of the table).</Text>
                <Text style={styles.TextStyle}>IMPORTANT: Please save your assessment regularly</Text>
                <Text style={styles.TextStyle}>You must make regular saves of your assessment so that the information is sent to the GRiST database. Otherwise, you could lose all your work if the assessment window was closed by mistake.</Text>
                <Text style={styles.TextStyle}>What happens if you lose the assessment window </Text>
                <Text style={styles.TextStyle}> We have tried to make it difficult for you to close the GRiST assessment window by mistake. However, it is easy for the window to be hidden by other browser windows or other applications on your desktop so please try to find it again before assuming it has disappeared permanently. Also, do not try to close the browser altogether unless you are certain there is not a GRiST assessment still in progress.
                  If you do lose the assessment for whatever reason, rest assured that the latest saved version will still be available if you access the person again and launch GRiST. You can resume the assessment when you get to the GRiST window and view the person's assessment information.</Text>
                
              </Card>
              <Card title="Previous assessments">
                <Text style={styles.TextStyle}>We currently have three different reports that can be generated for assessments. These are described below.</Text>
                <Text style={styles.TextStyle}>Report: </Text>
                <Text style={styles.TextStyle}>This is our main report. If you want to see a report on a previous assessment then select the 'Answers' link in the same row of that assessment. This will display the person's information in a concise and legible format. You can save the report as a PDF file in either monochrome or colour versions by selecting the appropriate link in the Key beneath the risk summary at the top of the page. You will be able to close the report at any time and return to the assessment list by selecting on the 'close report' button at the top of the page.</Text>
                <Text style={styles.TextStyle}>Comment Diary:</Text>
                <Text style={styles.TextStyle}>The 'Comment Diary' report pulls in all the historical clinical comments made for this person from all previous assessments and presents them in a diary format. The report can be launched via the appropriate link. This report complements the 'Risk History' report described below.</Text>
                <Text style={styles.TextStyle}>Risk History:</Text>
                <Text style={styles.TextStyle}>The 'Risk History' report is an interactive graphical report that allows you to view how risk levels have changed across assessments. This will enable you to focus on the factors that are of interest to you and spot trends in their associated risk over time. The report can be launched via the appropriate link, similar to how the other reports are launched.</Text>
              </Card>
              <Card title="Feedback">                
                <Text style={styles.TextStyle}>Please feel free to use the 'Contact Us' link to submit any suggestions for improvements or requests for clarification. We are always working on GRiST, both with respect to researching new ideas and also to ensure that our system is meeting clinical requirements in the workplace. </Text>
                
              </Card>
              <Card title="Buttons & Iconography">
                <Text style={styles.TextStyle}>Assessment Save Log icon</Text>
                <Text style={styles.TextStyle}>Each time you press the save button when you make an assessment, the time of the save and the person providing the information is listed here. The most recent save, and thus the final submit if the assessment has been completed, is listed first (on the top row).</Text>
                <Text style={styles.TextStyle}>Fix Errors:</Text>
                <Text style={styles.TextStyle}>If you have submitted an assessment but realise that you made a mistake, you can correct the mistake with the Fix Errors button. It changes the status of the assessment from completed (and thus only being able to be repeated) to suspended, so that it can be resumed and resubmitted. However, there is a time-limit on the period for which this is possible and the ability to correct a submitted assessment is removed after a week. This is on the grounds that the assessment will be out of date after a week with regard to any errors that may have been entered and a repeat assessment is a more appropriate way to update the information.</Text>
                <Text style={styles.TextStyle}>Repeat:</Text>
                <Text style={styles.TextStyle}>Repeating an assessment means that a new assessment is started but with the information from the previous assessment copied over if it should not change between assessments (i.e. it is what we call persistent data). For example, the date of birth, gender, date of first attempt to commit suicide, etc are the same for all assessments, although they can be edited if they were entered incorrectly in a previous assessment.
Other data are also marked as persistent and copied across because they are unlikely to change but might legitimately do so (e.g. has the person ever tried to commit suicide, which will be 'no' for most people but can be changed to 'yes', of course, if an attempt takes place. Once a person has attempted to commit suicide, this value will always be yes and the persistence status is permanent, although it can be edited if mistakenly entered previously).
More dynamic data (which is likely to change between assessments) is not copied across into the repeated assessment. Instead, the previous values can be seen in light grey colour beside the question so that the assessor is aware of the person's status at the last assessment and how the current status has changed).
Please note that you should normally repeat only the most recent assessment because this is the data that should be carried across to the new assessment. If you repeat any of the earlier assessments, it will be their data copied and thus by-passing the data contained in a later assessment.</Text>
                <Text style={styles.TextStyle}>Resume:</Text>
                <Text style={styles.TextStyle}>Resuming an assessment allows you to continue adding data as part of the same assessment process rather than starting a new one. It is the status that assessments receieve if you suspend them, or save them and then exit the application before submitting them. If you submit rather than save, then the assessment is regarded as finished, in which case it can only be repeated, not resumed.</Text>
                <Text style={styles.TextStyle}>Delete:</Text>
                <Text style={styles.TextStyle}>You can delete assessments by selecting them in the check boxes, whereupon a tick will appear, and then pressing the delete button at the head of the column.</Text>
              </Card>
             
            </View>
          
          </KeyboardAwareScrollView>
          </View>
          </View>

        )
    }
  }
const styles = StyleSheet.create({
  container: {    
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    minWidth: '90%',
    backgroundColor: Colors.DarkGrey.color

  },
  title: {
      fontSize: 24,
      color: 'black'
  },
  screenPos: {
    paddingTop: '15%',
    width: '100%',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',

},
TextStyle: {
  color: Colors.Black.color,                
  fontSize: Spacing.TextSizes.navText,
  marginBottom: 10
}
})