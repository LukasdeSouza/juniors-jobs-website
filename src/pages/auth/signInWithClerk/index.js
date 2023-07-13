import { SignIn } from '@clerk/clerk-react'
import './style.css'

const SignInWithClerk = () => {
  return (
    <div className="signInWithClerk-container">
      <SignIn redirectUrl={'/plans'} afterSignInUrl={'/plans'} />
    </div>
  )
}

export default SignInWithClerk
