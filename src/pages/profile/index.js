import { UserProfile } from '@clerk/clerk-react'
import './style.css'
import React from 'react'
import AppBarNavigation from '../../components/general/appbar'
import { dark, neobrutalism } from '@clerk/themes'

const UserProfilePage = () => {
  return (
    <div>
      <div className='container-user-profile'>
        <AppBarNavigation />
        <UserProfile appearance={{
          baseTheme: neobrutalism
        }} />
      </div>
    </div>
  )
}

export default UserProfilePage