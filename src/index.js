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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contributors" element={<ContributesPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


