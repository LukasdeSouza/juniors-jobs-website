import './App.css'

import { gapi } from 'gapi-script'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page404 from './pages/404'
import LoginPage from './pages/auth/login'
import ContributorsPage from './pages/contributors'
import JobsPage from './pages/jobs'
import RegisterJobsPage from './pages/jobs/register'
import OurTeamPage from './pages/team'

export default function App() {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId:
        '842128105172-82qtuinhishq32q8nhrrbsqu0v301a24.apps.googleusercontent.com',
      plugin_name: 'chat'
    })
  })
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/contributors" element={<ContributorsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          {/* <Route path="/register" element={<RegisterUser />} /> */}
          <Route path="/login" element={<LoginPage />} />

          <Route path="/register-jobs" element={<RegisterJobsPage />} />
          {/* <Route path="/register-cv" element={<RegisterCVPage />} /> */}

          {/* <Route path="/splash/user-registered" element={<UserRegisteredPage />} />
          <Route path="/splash/user-logged" element={<UserLoggedPage />} />
          <Route path="/splash/changed-password" element={<SplashChangePasswordPage />} /> */}

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
