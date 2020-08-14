/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Login,LandingScreen,OverlayScreen,signup,QuestionWindow,MyProfile,MyPatients,MyGroups,MyPlan,MyAssessment,Search,MyReview,Help,Downloads,AssessmentHome} from '../../components/Screens';

it('renders correctly', () => {
  const help = renderer.create(<Help />);
  expect(help).toMatchSnapshot();
});

it('renders correctly', () => {
  const landing = renderer.create(<LandingScreen />);
  expect(landing).toMatchSnapshot();
});

it('renders correctly', () => {
  const login = renderer.create(<Login/>);
  expect(login).toMatchSnapshot();
});

it('renders correctly', () => {
    const login = renderer.create(<OverlayScreen/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<Signup/>);
    expect(login).toMatchSnapshot();
  });
  
it('renders correctly', () => {
    const login = renderer.create(<QuestionWindow/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<MyProfile/>);
    expect(login).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const login = renderer.create(<MyPatients/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<MyGroups/>);
    expect(login).toMatchSnapshot();
  });
  
it('renders correctly', () => {
    const login = renderer.create(<MyPlan/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<MyAssessment/>);
    expect(login).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const login = renderer.create(<Search/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<MyReview/>);
    expect(login).toMatchSnapshot();
  });
  
it('renders correctly', () => {
    const login = renderer.create(<Downloads/>);
    expect(login).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const login = renderer.create(<AssessmentHome/>);
    expect(login).toMatchSnapshot();
  });

