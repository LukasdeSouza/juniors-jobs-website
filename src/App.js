import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';

import JobsPage from './pages/jobs';
import RegisterUser from './pages/auth/register';
import LoginPage from './pages/auth/login';
import UserRegisteredPage from './pages/splash/userRegistered';
import UserLoggedPage from './pages/splash/userLogged';
import ContributorsPage from './pages/contributors';
import OurTeamPage from './pages/team';
import RegisterCVPage from './pages/register-cv';
import RegisterJobsPage from './pages/jobs/register';
import SplashChangePasswordPage from './pages/splash/changedPassword';
import Page404 from './pages/404';

export default function App() {

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: '842128105172-82qtuinhishq32q8nhrrbsqu0v301a24.apps.googleusercontent.com',
      plugin_name: 'chat',
    });
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          {/* <Route path="/register" element={<RegisterUser />} /> */}
          {/* <Route path="/login" element={<LoginPage />} /> */}

          <Route path="/register-jobs" element={<RegisterJobsPage />} />
          {/* <Route path="/register-cv" element={<RegisterCVPage />} /> */}

          {/* <Route path="/splash/user-registered" element={<UserRegisteredPage />} />
          <Route path="/splash/user-logged" element={<UserLoggedPage />} />
          <Route path="/splash/changed-password" element={<SplashChangePasswordPage />} /> */}

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
