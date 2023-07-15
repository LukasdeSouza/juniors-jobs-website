import { SignUp } from '@clerk/clerk-react'
import './style.css'

const SignUpWithClerk = () => {
  return (
    <div className="signInWithClerk-container">
      <SignUp signInUrl={'/signin'} redirectUrl={'/plans'} />
    </div>
  )
}

export default SignUpWithClerk
