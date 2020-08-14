//Function: Validate the user control interactions with other components
//Description: verify APIcalls work correctly and that asynchronous functions return correctly.
//Inputs: Outline Class.
//Outputs: Hardware communication.test.suite

const usercontrols = require('../../components/Sub-Comps/userOutline');

const exampleUserstring = '{"csrf_token": "jkbVKpMVJTm776L2sQoZdcL0qjH5iqloeGDc7geNf1w", "current_user": {"name": "wightmad@aston.ac.uk", "roles": ["authenticated", "administrator"], "uid": "3266"}, "logout_token": "oQBEHRGQLbLhUf5BqULyMzSGbxEtO0LUFv6ahXso9Uc"}'
const userUID = '3266'
const userAnswerdata = '{object of assesment information}'

test('User information is saved and then returned equal to previous format', async () => {
    await usercontrols._storeClient(exampleUserstring)
    const data = await usercontrols._getClient();
    expect(data).toBe(exampleUserstring);
  });