import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UserProfile from './UserProfile'
import { accoutAction } from '../../actions/userAction'

const Profile=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
         dispatch(accoutAction())
    },[dispatch])

    return(
        <div>
            <UserProfile/>
        </div>
    )
}
export default Profile