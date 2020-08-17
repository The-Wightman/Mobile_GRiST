//Function: Hold large text elements
//Description: certain elements of the mobile app are large form text taken from legal documents and avice pages, to prevent the code becoming bulky and hard to read and allow for single instance adjustment cross app large text excerpts are called from a single point through out the whole app.
//Inputs: None
//Outputs: String Text 

import { View,Text,ScrollView,StyleSheet,Image} from "react-native"
import CustomTable from '../Sub-Comps/tableview'
import { Images} from '../../Styles'

import React from 'react';
export const silver_lock = "This indicates data that may occasionally change across assessments. The answers to these questions are carried over when repeating an assessment, but should be checked to ensure they are still applicable."
export const gold_lock = "This indicates data that will almost never change across assessments. For convenience, the answers to these questions are carried over when repeating an assessment."
export class Process extends React.Component{
    render() { 
        return (
    <ScrollView style={{maxHeight:'65%',width:'100%'}}>
        <Text>"Stage 1 diagnosing or assessing the levels of risk in each category (suicide, self harm, harm to others, etc) and how to address each one: the specific risk judgements and action plans."</Text>
            <Text>  1.This is where the basic data collection takes place, which can be for the varying contexts of assessments that are selected on the home page (screening, full, repeat, etc).</Text>
            <Text>  2.Data can be provided in any order by selecting topics from the mind map. This will take you to all the questions within that topic.</Text>
            <Text>  3.You can switch to and from the mind map and the questions to follow your own thought processes or the flow of the assessment if you are collecting data during it.</Text>
            <Text>  4.When you are ready to provide a risk judgement for one or more risks, select the Risk Judgement button. This lets you provide your levels of risks along with the reasons for them and the specific actions to reduce them.</Text>
        <Text>Stage 2 is entered using the Risk Formulation button.</Text>
            <Text>  1.The default categories help organise risk and safety information into immediate, medium, and long-term impact.</Text>
            <Text>  2.This organisation helps bridge between levels of risk and their overall phased management.</Text>
        <Text>Stage 3 is the final stage, selected by the SafetyPlan button.</Text>
            <Text>  1.The safety plan brings together information and actions for each risk into a cohesive overall plan.</Text>
            <Text>  2.It summarises what needs to happen for the patient and informs referral information such as letters to GPs or specialist services.</Text>
    </ScrollView>
        ) 
    }   
 };
export class Tips extends React.Component{
    render() { 
        return (
        <ScrollView style={{maxHeight:'65%'}}>
        <Text>Providing scores for items with a zero to ten scale</Text>
        <Text>  1.Use the descriptors at each end of the scale for a clear definition of how to interpret the maximum and minimum values.</Text>
        <Text>  2.Give the value that feels right and do not agonise about it because it will not improve your intuitive judgement.</Text>
        <Text>  3.If a particular behaviour or circumstance is not a problem, then put a zero: it is not contributing to the risks.</Text>
        <Text>Comments</Text>
        <Text>  1.Only provide a comment if it adds to the understanding of that risk item and does not simply repeat what the quantitative answer communicates.</Text>
        <Text>  2.There is no necessity to provide a comment for every question.</Text>
        <Text>  3.Focus comments on the specific question to which they are attached.</Text>
        <Text>Comments should be brief and to the point: a single short sentence is usually enough or, even better, a key phrase that communicates the issue.</Text>
        <Text>  1.Actions or management plans</Text>
        <Text>  2.Always put something in the action box if it will help manage the risk issue.</Text>
        <Text>  3.Only put something in the action box if it relates to that specific item.</Text>
        <Text>Tips for individual risks</Text>
        <Text>  1.Providing the risk-judgement score</Text>
        <Text>      a.Always give a risk judgement unless it is a repeat assessment and you have switched that risk off.</Text>
        <Text>      b.The risk judgement is in the context of the normal level of risks applying to the person's general population (e.g. working-age adults, older adults, or young children). Nobody is risk free but the idea behind the zero for a risk judgement is that it is no different to what one would expect from people in general.</Text>
        <Text>      c.The risk judgement should apply to the service-user's current circumstances or the new circumstances if these will immediately change following the assessment (e.g. because the person is being discharged).</Text>
        <Text>  2.Providing a risk summary for each risk</Text>
        <Text>      a.Use the risk summary box to bring out the key factors that have influenced your judgement of the level of risk.</Text> 
        <Text>      b.State only those factors that are important for understanding why you gave the particular risk judgement.</Text> 
        <Text>  3.Managing the risk</Text> 
        <Text>      a.Use the tab for copying into the management box relevant actions you gave earlier for specific questions.</Text> 
        <Text>      b.Only provide a management plan that relates to this specific risk.</Text> 
        <Text>Risk formulation</Text> 
        <Text>  1.The purpose of the risk formulation is to connect the symptoms of risks, their causes, and the timescales of managing them.</Text> 
        <Text>  2.The risk formulation should make it easier to ensure the management plan tackles the most urgent immediate problems as well as the longer term reasons for those problems.</Text>
        <Text>Overall risk and safety management</Text>
        <Text>  1.When you have evaluated each risk, answered the general questions relating to all risks, and provided a risk formulation, it is time to produce the risk plan for the complete assessment.</Text> 
        <Text>  2.Collate your summary management plans for each assessed risk with actions from the general questions to produce your overall safety plan.</Text>
        <Text>      a.The management tab has a mechanism for copying risk plans and general actions into the safety plan text box.</Text>
        <Text>      b.After selecting and copying appropriate ones, edit the box as required.</Text>      
    </ScrollView>
)
}};
export class Key extends React.Component{    
    render() { 
        return (
        <ScrollView style={{maxHeight:'65%',minWidth:'90%'}}>
        <CustomTable style={{minHeight:'100%',minWidth:'90%'}} tableHead={['Icon', 'Description', ]} headflex={[1, 6]} dataflex={[1,6]} 
    tableData={[
        [<Image style={styles.KeyIconsize} source={Images.document}/>,'Tapping on a management icon will enable you to add information on management of this aspect'],
        [<Image style={styles.KeyIconsize} source={Images.ballon}/>,'Select this icon to enter a comment that explains your answer, if you think it is needed and if the comment is directly relevant to the question.'],
        [<Image style={styles.KeyIconsize} source={Images.exclamation}/>,'Tapping this icon will reveal an alert box with information that may impact your answer.'],
        [<Image style={styles.KeyIconsize} source={Images.info}/>,'Tapping this icon will reveal some help text to clarify the question'],
        [<Image style={styles.KeyIconsize} source={Images.lock_s}/>,silver_lock],
        [<Image style={styles.KeyIconsize} source={Images.lock_g}/>,gold_lock],
        
    ]}
    ></CustomTable> 
    </ScrollView>   
)}
};
export class Indvhelp extends React.Component{
    render() { 
        return (
    <ScrollView style={{maxHeight:'65%'}}>
        <Text>
On the Screen, you will see the questions associated with the selected sub-topic or the whole set of questions if no topic is selected.
Above the questions on the right hand-side of the panel are buttons that help you navigate between screens and through the assessment process:
'Go Back to Mind map' button that takes you back to the overall GRiST mind map;
'Save' button that sends your answers for safe storage and retrieval;
'Suspend' button that saves your data and ends your session so that you can return and finish it later;
'Finish' button where you can review your overall risk evaluations and plans before exiting the assessment.
The 'finish' page also lets you provide a comment about the assessment process if relevant.
The comment is not about the person being assessed but about how the assessment was conducted.
It allows you to state any unusual circumstances such as whether the assessment was started by someone else but not submitted before you took it over.
The buttons on the left-hand side of the panel above the topic tree take you to the next stages of the assessment procedure:
'Risk Judgements' where you can provide one or more risk evaluations along with comments and safety plans;
'Risk formulation' linking all risk assessments to overall management;
'Safety Plan' where you can provide the overall management plan.
See the 'GRiST process' white-text link at the very top right-hand part of the screen for more information about these options.
The following buttons appear at the bottom of the screen:
a 'Go Back' button that takes you back to the previous screen;
a 'Search' button that helps you find and go directly to a particular topic;
Note that the search is only within the topics shown in the left-hand part of the screen.
a 'progress bar' that tells you the percentage of questions you have answered for a selected topic;
a 'Find Unanswered Questions' button that locates and highlights remaining unanswered questions for the topic in the right-hand (questions) part of the screen;
a 'Save and Go Back to Mindmap' button that saves your answers and returns you to the overall GRiST mind map.
At the very top right-hand side of the screen in small white letters are the following:
the 'Key' which explains what the little pictures or icons mean next to questions;
'Preferences' that lets you change how GRiST looks.
'Quick tips' that guide you with answering questions and providing comments or management plans.
'GRiST process' that explains the overall assessment procedure from starting the assessment to submitting it.</Text>
    </ScrollView>
)}};

