import React from 'react';
import renderer from 'react-test-renderer';
import Calc from '../pages/calc';

test('match calc snapshot', () => {
  const tree = renderer.create(<Calc />).toJSON();
  expect(tree).toMatchSnapshot();
});
