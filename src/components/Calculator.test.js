import {
  render, fireEvent, screen,
} from '@testing-library/react';
import React from 'react';
import Calculator from './Calculator';

test('Calculator renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree.toJSON).toMatchSnapshot();
});
test('test calculator UI', async () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('5'));
  let testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('5');
  fireEvent.click(screen.getByText('6'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56');
  fireEvent.click(screen.getByText('+'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56+');
  fireEvent.click(screen.getByText('2'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('56+2');
  fireEvent.click(screen.getByText('='));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('58');
  fireEvent.click(screen.getByText('AC'));
  testDisplay = screen.getByTestId('display').textContent;
  expect(testDisplay).toMatch('');
});
