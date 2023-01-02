import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';

//routes imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppBarNavigation from './components/appbar';

//pages
import JobsPage from './pages/jobs';
import ContributesPage from './pages/contribute';
import RegisterPage from './pages/register';


export default function App() {
  return (
    <>
      <AppBarNavigation />
      {/* rota das páginas */}
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
