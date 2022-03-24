import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './quote';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quote />, div);
});
