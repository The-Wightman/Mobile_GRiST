/**
 * @format
 */

import 'react-native';
import React from 'react';
import * as screens from '../components/Screens'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const help = renderer.create(<screens.Help />);
  expect(help).toMatchSnapshot();
});

it('renders correctly', () => {
  const landing = renderer.create(<screens.LandingScreen />);
  expect(landing).toMatchSnapshot();
});

it('renders correctly', () => {
  const login = renderer.create(<screens.Login/>);
  expect(login).toMatchSnapshot();
});