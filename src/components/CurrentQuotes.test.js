import React from 'react';
import ReactDOM from 'react-dom';
import CurrentQuote from './CurrentQuotes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentQuote />, div);
});
