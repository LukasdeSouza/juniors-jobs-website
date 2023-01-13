import './App.css';

//routes imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gapi } from 'gapi-script';

//pages
import JobsPage from './pages/jobs';
import ContributesPage from './pages/contribute';
import RegisterUser from './pages/auth/register';
import LoginPage from './pages/auth/login';
import UserRegisteredPage from './pages/splash/userRegistered';
import UserLoggedPage from './pages/splash/userLogged';

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
          <Route path="/contributors" element={<ContributesPage />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/splash/userRegistered" element={<UserRegisteredPage />} />
          <Route path="/splash/userLogged" element={<UserLoggedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
