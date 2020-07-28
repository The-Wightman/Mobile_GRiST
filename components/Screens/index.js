//Function: Organise Screen classes
//Description: import all screen classes into  a single unifying class that can be imported,
//             giving each screen a relevant moniker that can be used to call it with a sensible name.
//Inputs: None
//Outputs: None

import Login from './login'
import signup from './signup'
import * as LandingScreen from './LandingScreen'
import * as OverlayScreen from './overlay'
import QuestionWindow from './QuestionWindow'
import MyProfile from './MyProfile'
import MyPatients from './MyPatients'
import MyPlan from './MyPlan'
import MyAssessment from './MyAssessment'
import Search from './Search'
import MyReview from './MyReview'
import Help from './Help'
import Downloads from './Downloads'
import AssessmentHome from './AssessmentHome'

export {Login,LandingScreen,OverlayScreen,signup,QuestionWindow,MyProfile,MyPatients,MyPlan,MyAssessment,Search,MyReview,Help,Downloads,AssessmentHome}