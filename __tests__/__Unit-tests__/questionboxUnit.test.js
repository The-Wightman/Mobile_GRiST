//Function: Validate the Question box component rendering
//Description: ensure that the correct visual representations occur when fed the apropriate props
//Inputs: QuestionBox default class
//Outputs: Question.test.suite

const { default: QuestionBox } = require('../../components/Sub-Comps/QuestionComponents/QuestionBoxes');

it('render correctly Slider Question', () => {  
    const  sliderQuestion= renderer.create(<QuestionBox  values={"Scale"}/>).toJSON();
    expect(sliderQuestion).toMatchSnapshot();
});
it('render correctly Layer Question', () => {  
    const LayerQuestion = renderer.create(<QuestionBox  values={"Layer"}/>).toJSON();
    expect(LayerQuestion).toMatchSnapshot();
});
it('render correctly checkbox Question', () => {  
    const checkboxQuestion = renderer.create(<QuestionBox  values={"nominal"}/>).toJSON();
    expect(checkboxQuestion).toMatchSnapshot();
});
it('render correctly default Question', () => {  
    const defaultQuestion = renderer.create(<QuestionBox  values={""}/>).toJSON();
    expect(defaultQuestion).toMatchSnapshot();
});
it('render correctly integer Question', () => {  
    const integerQuestion = renderer.create(<QuestionBox  values={"integer"}/>).toJSON();
    expect(integerQuestion).toMatchSnapshot();
});
it('render correctly date-week Question', () => {  
    const dateweekQuestion = renderer.create(<QuestionBox  values={"date-week"}/>).toJSON();
    expect(dateweekQuestion).toMatchSnapshot();
});