import { SignUp } from '@clerk/clerk-react'
import './style.css'

const SignUpWithClerk = () => {
  console.log('signup')
  return (
    <div className="signInWithClerk-container">
      <SignUp />
    </div>
  )
}

export default SignUpWithClerk
