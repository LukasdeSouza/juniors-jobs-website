// import { AppBar, Avatar, Link, Stack } from '@mui/material';
import './App.css';

//routes imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';


import AppBarNavigation from './components/appbar';

//pages
import JobsPage from './pages/jobs';
import ContributesPage from './pages/contribute';
// import RegisterPage from './pages/register';
import RegisterUser from './pages/auth/register';

export default function App() {

  gapi.load('client:auth2', () => {
    gapi.client.init({
        clientId: '842128105172-82qtuinhishq32q8nhrrbsqu0v301a24.apps.googleusercontent.com',
        plugin_name: 'chat',
    });
});
  return (
    <>
      <AppBarNavigation />
      {/* rota das páginas */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/contributors" element={<ContributesPage />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
