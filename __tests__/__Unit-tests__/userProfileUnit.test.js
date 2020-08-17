//Function: Validate the User component.
//Description: ensure that when provided various sets of information the system responds apropriately with user profile visual component.
//Inputs: UserProfile default class
//Outputs: Userprofile.test.suite

const {default: UserProfile} = require('../../components/Sub-Comps/userprofile');

it('render correctly user profile', () => {  
    const  exampleprofile= renderer.create(<UserProfile/>).toJSON();
    expect(exampleprofile).toMatchSnapshot();
});