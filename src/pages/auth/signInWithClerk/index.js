import { SignIn } from '@clerk/clerk-react'
import './style.css'

const SignInWithClerk = () => {
  return (
    <div className="signInWithClerk-container">
      <SignIn
        appearance={{
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
