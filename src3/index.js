import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

console.log(window.innerWidth + " is inner width");
console.log(window.outerWidth + " is outer width");

ReactDOM.render(
  <React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
