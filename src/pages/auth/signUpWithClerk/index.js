import { SignUp } from '@clerk/clerk-react'
import './style.css'
import { neobrutalism } from '@clerk/themes'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SignUpWithClerk = () => {
  const navigate = useNavigate()

  return (
    <div className="signInWithClerk-container">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack sx={{ color: '#fff' }} />
      </IconButton>
      <SignUp
        appearance={{
          baseTheme: neobrutalism
        }}
        signInUrl={'/signin'}
        redirectUrl={'/plans'} />
    </div>
  )
}

export default SignUpWithClerk
