import { SignIn } from '@clerk/clerk-react'
import './style.css'

const SignInWithClerk = () => {
  return (
    <div className="signInWithClerk-container">
      <SignIn redirectUrl={'/payment'} afterSignInUrl={'/payment'} />
    </div>
  )
}

export default SignInWithClerk
