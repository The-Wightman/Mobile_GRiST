//Function: Validate the logins interctions with other components
//Description: verify APIcalls work correctly and that asynchronous functions return correctly.
//Inputs: Login Class,Navigation component.
//Outputs: Login.test.suite

const { default: _Login } = require('../../components/Screens/login');

test('Call to the grist APi with valid information returns an apropriate JSON object', () => {
    expect(_Login.userLogin("wightmad@aston.ac.uk","Question22","signin")).toBe(true);
  });