import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Counter } from './Counter';
//import Function from './Functions';
import {DynamicArray} from './DynamicArray.jsx'

import { GifExpertApp } from './GifExpertApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter value={500} />
    <GifExpertApp />
    <DynamicArray />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
