//Function: Validate the validator function 
//Description: ensure that when provided various sets of information the system responds apropriately with the correct boolean.
//Inputs: validator.ValidateLogin
//Outputs: regex.test.suite

const validator = require('../../components/Sub-Comps/GenericComps/Validator');

test('That a valid .co.uk email returns true', () => {
    expect(validator.default("DavidWightman","wightmad@aston.ac.uk","Password11","signin")).toBe(true);
  });
test('User makes a mistake when entering the email for the sign in page', () => {
    expect(validator.default("","wightmadaston.ac.uk","Password11","signin")).toBe(false);
  });
  test('User makes a mistake when entering the email for the sign up page', () => {
    expect(validator.default("","wightmadaston.ac.uk","Password11","signup")).toBe(false);
  });
test('user fails to provide a UID but its the signin page', () => {
    expect(validator.default("","wightmadaston.ac.uk","Password11","signin")).toBe(false);
  });
  test('user fails to provide a UID bit its the signup page', () => {
    expect(validator.default("","wightmadaston.ac.uk","Password11","signip")).toBe(false);
  });
  test('User makes a mistake when entering the email for the sign in page', () => {
    expect(validator.default("DavidWightman","wightmadaston.ac.uk","Password11","signin")).toBe(true);
  });
  test('User makes a mistake when entering the email & password for the sign in page', () => {
    expect(validator.default("DavidWightman","wightmadaston.ac.uk","assword11","signin")).toBe(false);
  });
  test('User makes a mistake when entering the password for the sign in page', () => {
    expect(validator.default("DavidWightman","wightmad@aston.ac.uk","assword11","signin")).toBe(false);
  });
  test('User makes a mistake when entering the password for the sign up page', () => {
    expect(validator.default("DavidWightman","wightmad@aston.ac.uk","assword11","signup")).toBe(false);
  });
  test('User makes a mistake when entering the password & email for the sign up page', () => {
    expect(validator.default("DavidWightman","wightmad@aston","assword11","signup")).toBe(false);
  });
  test('User makes a mistake when entering the ID for the sign in page', () => {
    expect(validator.default("","wightmad@aston.ac.uk","Password11","signin")).toBe(false);
  });
  test('User makes a mistake when entering the ID for the sign up page', () => {
    expect(validator.default("","wightmad@aston.ac.uk","Password11","signup")).toBe(false);
  });
  test('System fails to provide the action during the signup process', () => {
    expect(validator.default("DavidWightman","wightmad@aston.ac.uk","Password11","")).toBe(false);
  });
  test('system fails to provide the action during the signin process', () => {
    expect(validator.default("DavidWightman","wightmad@aston.ac.uk","Password11","")).toBe(false);
  });
  