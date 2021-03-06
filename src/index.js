import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {BrowserRouter} from 'react-router-dom';


import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


ReactDOM.render(
  <BrowserRouter basename={'/SharathResume'}>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
