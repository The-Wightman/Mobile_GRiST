//Function: Validate the iconbar component
//Description: ensure that when provided various sets of information the component respond wit the correct visual layout.
//Inputs: IconBar default class
//Outputs: IconBar.test.suite

const { default: IconBar} = require('../../components/Sub-Comps/QuestionComponents/IconBar');

it('render correctly basic iconbar', () => {  
    const  minQuestion= renderer.create(<IconBar  persistence={""} help={""} alert={""}/>).toJSON();
    expect(minQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence soft', () => {  
    const  softonlyQuestion= renderer.create(<IconBar  persistence={"Soft"} help={""} alert={""}/>).toJSON();
    expect(softonlyQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence hard', () => {  
    const  hardonlyQuestion= renderer.create(<IconBar  persistence={"Hard"} help={""} alert={""}/>).toJSON();
    expect(hardonlyQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence soft and help icon', () => {  
    const  softiconQuestion= renderer.create(<IconBar  persistence={"Soft"} help={"test"} alert={""}/>).toJSON();
    expect(softiconQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence hard and help icon', () => {  
    const  hardiconQuestion= renderer.create(<IconBar  persistence={"Hard"} help={"test"} alert={""}/>).toJSON();
    expect(hardiconQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence soft and help icon and an alert', () => {  
    const  softiconhelpQuestion= renderer.create(<IconBar  persistence={"Soft"} help={"test"} alert={"alert"}/>).toJSON();
    expect(softiconhelpQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence hard and help icon and an alaert', () => {  
    const  hardiconhelpQuestion= renderer.create(<IconBar  persistence={"Hard"} help={"test"} alert={"alert"}/>).toJSON();
    expect(hardiconhelpQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence soft and an alert', () => {  
    const  softhelpQuestion= renderer.create(<IconBar  persistence={"Soft"} help={""} alert={"alert"}/>).toJSON();
    expect(softhelpQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with peristence hard and an alaert', () => {  
    const  hardhelpQuestion= renderer.create(<IconBar  persistence={"Hard"} help={""} alert={"alert"}/>).toJSON();
    expect(hardhelpQuestion).toMatchSnapshot();
});

it('render correctly basic iconbar with help icon and an alert', () => {  
    const  iconhelpQuestion= renderer.create(<IconBar  persistence={"Soft"} help={"test"} alert={"alert"}/>).toJSON();
    expect(iconhelpQuestion).toMatchSnapshot();
});

