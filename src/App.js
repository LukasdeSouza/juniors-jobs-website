import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';
import Logo from './assets/logo_size_invert.jpg'
import AppBarNavigation from './components/appbar';
import JobsPage from './pages/jobs';

//routes imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/register';
import ContributesPage from './pages/contribute';


export default function App() {
  return (
    <>
      <AppBarNavigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/contributors" element={<ContributesPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}
