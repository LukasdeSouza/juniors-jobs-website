import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import JobsPage from './pages/jobs';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


