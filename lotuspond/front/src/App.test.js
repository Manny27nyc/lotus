// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import React from 'react';
import ReactDOM from 'react-dom';
import Pond from './Pond';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Pond />, div);
  ReactDOM.unmountComponentAtNode(div);
});
