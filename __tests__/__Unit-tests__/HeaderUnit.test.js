//Function: Validate the Header component
//Description: ensure that when provided various sets of information the system responds with the correct visual display
//Inputs: IconBar default class
//Outputs: IconBar.test.suite

const {default: MainHeader} = require('../../components/Sub-Comps/Navigation/Header');

it('render correctly Slider Question', () => {  
    const  header = renderer.create(<MainHeader/>).toJSON();
    expect(header).toMatchSnapshot();
});