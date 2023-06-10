'use client'
import { useContext } from 'react'
import LoginOrRegister from './loginOrRegister/LoginOrRegister'
import { LoginRegisterContext } from '../contexts/ContextCreate'
import Profile from './profile/UserProfile'
import StrangerProfile from './profile/StrangerProfile'

const ProfileOrLogin = () => {
    const context=useContext(LoginRegisterContext)
    return(
        <div className='profileorlogin'>
            
            {context.ProfileOrLogin===0 && <LoginOrRegister />}
            {context.ProfileOrLogin===1 && <Profile />}
            {context.ProfileOrLogin===2 && <StrangerProfile />}
        </div>
        
    )
}
 
export default ProfileOrLogin