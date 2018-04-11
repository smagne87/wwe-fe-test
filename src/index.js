import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function component() {
  const element = document.createElement('div');
  element.id = 'wwe-test';

  return element;
}

document.body.appendChild(component());
ReactDOM.render(
  <App />,
  document.getElementById('wwe-test'),
);
