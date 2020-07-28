//Function: Index for navigation comps.
//Description: organise screen and navigation tools into a single importable reference
//Inputs: Classes ClinNav, IndNav, Defscreen, regex, Mainhead
//Outputs: Import Array Index.js

import * as ClinNav from "./Navigation/ClinicianNav";
import * as IndNav from "./Navigation/IndividualNav";
import  DefaultScreen from "./DefaultScreen";
import * as Regex from "./GenericComps/Regex"
import MainHeader from "./Navigation/Header"
export {ClinNav,DefaultScreen,IndNav,Regex,MainHeader};