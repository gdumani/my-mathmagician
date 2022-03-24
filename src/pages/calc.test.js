import React from 'react';
import renderer from 'react-test-renderer';
import Calc from './calc';

test('match app snapshot', () => {
  const tree = renderer.create(<Calc />).toJSON();
  expect(tree).toMatchSnapshot();
});
