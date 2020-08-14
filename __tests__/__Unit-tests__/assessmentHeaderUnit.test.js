//Function: Validate the assesment header component 
//Description: ensure that when provided various sets of informationthe correct header is generated for the assesment/
//Inputs: AssesmentHeader default class
//Outputs: Assessheader.test.suite

const { default: AssessmentHeader } = require('../../components/Sub-Comps/Navigation/AssesmentHeader');
it('render correctly practice header', () => {  
    const practiceHeader = renderer.create(<AssessmentHeader  type={"Practice"}/>).toJSON();
    expect(practiceHeader).toMatchSnapshot();
});

it('render correctly full header', () => {  
    const fullHeader = renderer.create( <AssessmentHeader  type={"Full"}/>).toJSON();
    expect(fullHeader).toMatchSnapshot();
});