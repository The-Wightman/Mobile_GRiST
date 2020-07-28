//Function: regular expressions
//Description: hold regular expressions used across the system and export them as a single organised file to import in other classes.
//Inputs: None
//Outputs: None

// regular expression to validate that an email pattern contains an @ symbol and a relevant set of closing statments such as .co.uk or .org
export const EmailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// validate that a password has both uper case and lower case, is atleast 8 characters long and up to any length
export const PassReg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/);

//Validate that a users ID only contains letters and numbers preventing special characters
export const IDReg = new RegExp(/^[a-zA-Z0-9]+$/);

//Validate that a users provide UID does not contain letters 
export const UIDREG = new RegExp(/@"^-?[0-9][0-9,\.]+$"/);