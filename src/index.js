import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as AWS from 'aws-sdk'

const configuration = {
  region: process.env.REACT_APP_region,
  secretAccessKey: process.env.REACT_APP_secretAccessKey,
  accessKeyId: process.env.REACT_APP_accessKeyId

}

AWS.config.update(configuration);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

