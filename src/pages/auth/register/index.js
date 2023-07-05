import RegisterBackground from '../../../components/auth/register/registerBackground'
import RegisterForm from '../../../components/auth/register/registerForm'
import '../../../styles/utility-classes.css'
import './style.css'

const RegisterUser = () => {
  return (
    <main className="main-container">
      <div className="register-container my-5">
        <RegisterBackground />
        <RegisterForm />
      </div>
    </main>
  )
}

export default RegisterUser
