import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import JobsPage from './pages/jobs';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/register';
import ContributesPage from './pages/contribute';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


