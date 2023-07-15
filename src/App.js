import './App.css'

import { gapi } from 'gapi-script'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import { ClerkProvider } from '@clerk/clerk-react'
import Page404 from './pages/404'
import SignInWithClerk from './pages/auth/signInWithClerk'
import SignUpWithClerk from './pages/auth/signUpWithClerk'
import BuyedSuccessfullyPage from './pages/buyedSuccessfully'
import ContributorsPage from './pages/contributors'
import HomePage from './pages/home'
import JobsPage from './pages/jobs'
import PaymentPage from './pages/payment'
import PlansPage from './pages/plans'
import OurTeamPage from './pages/team'
import UserProfilePage from './pages/profile'

function ClerkProviderWithRoutes() {
  const navigate = useNavigate()

  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        {/* <Route path="/register-jobs" element={<RegisterJobsPage />} /> */}

        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        {/* <Route path="/register" element={<RegisterUser />} /> */}
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/signin" element={<SignInWithClerk />} />
        <Route path="/signup" element={<SignUpWithClerk />} />
        <Route path="/user-profile" element={<UserProfilePage />} />

        <Route path="/buyedsucessfully" element={<BuyedSuccessfullyPage />} />

        {/* <Route path="/register-cv" element={<RegisterCVPage />} /> */}

        {/* <Route path="/splash/user-registered" element={<UserRegisteredPage />} />
          <Route path="/splash/user-logged" element={<UserLoggedPage />} />
          <Route path="/splash/changed-password" element={<SplashChangePasswordPage />} /> */}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </ClerkProvider>
  )
}

export default function App() {
  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId:
        '842128105172-82qtuinhishq32q8nhrrbsqu0v301a24.apps.googleusercontent.com',
      plugin_name: 'chat'
    })
  })

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  )
}
