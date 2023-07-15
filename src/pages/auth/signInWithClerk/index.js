import { SignIn } from '@clerk/clerk-react'
import './style.css'
import { neobrutalism } from '@clerk/themes'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SignInWithClerk = () => {
  const navigate = useNavigate()

  return (
    <div className="signInWithClerk-container">
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBack sx={{ color: '#fff' }} />
      </IconButton>
      <SignIn
        appearance={{
          baseTheme: neobrutalism,
          layout: {
            showOptionalFields: true,
            socialButtonsVariant: 'iconButton'
          },
          elements: {
            'cl- formFieldInput': {
              height: '50px'
            }
          },
          variables: {
            fontFamily: 'montserrat',
            spacingUnit: '12px'
          }
        }}
        redirectUrl={'/plans'}
        afterSignInUrl={'/plans'}
        signUpUrl={'/signup'}
      />
    </div>
  )
}

export default SignInWithClerk
