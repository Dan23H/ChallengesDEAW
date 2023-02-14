import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Counter from './Counter';
//import Function from './Functions';
//import {DynamicArrayTraditional} from './DynamicArray.jsx'

import {GifExpertApp} from './DynamicArray.jsx'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
