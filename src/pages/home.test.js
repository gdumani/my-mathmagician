import React from 'react';
import renderer from 'react-test-renderer';
import Home from './home';

test('match home snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
