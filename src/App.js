import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';

//routes imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import JobsPage from './pages/jobs';
import ContributesPage from './pages/contribute';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';


export default function App() {
  return (
    <>
      {/* rota das páginas */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/contributors" element={<ContributesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
