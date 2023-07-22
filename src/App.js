import './App.css'

import { gapi } from 'gapi-script'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import Page404 from './pages/404'
import BuyedSuccessfullyPage from './pages/buyedSuccessfully'
import ContributorsPage from './pages/contributors'
import HomePage from './pages/home'
import JobsPage from './pages/jobs'
import PaymentPage from './pages/payment'
import PlansPage from './pages/plans'
import OurTeamPage from './pages/team'
import SignInPage from './pages/auth/signInWithClerk'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />

        <Route path="/contributors" element={<ContributorsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />

        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/signin" element={<SignInPage />} />

        <Route path="/checkout" element={<PaymentPage />} />
        <Route path="/buyedsucessfully" element={<BuyedSuccessfullyPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App


