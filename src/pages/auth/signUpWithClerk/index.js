import './style.css'
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

    </div>
  )
}

export default SignUpWithClerk
