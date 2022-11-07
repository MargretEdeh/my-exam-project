// import { async } from '@firebase/util'
// import React, { useEffect } from 'react'
import {  Navigate } from 'react-router-dom'
import { UserContext } from './AuthContext'

export default function Account() {
  // const Navigate = useNavigate()

    const { LogOut, user } =UserContext()
//     useEffect(()=>{
//       if(user === null){
//   Navigate('/')
// setTimeout(()=>{alert('login first')} ,1000)
//       }
//     }, [user ,Navigate])
    
if(!user){
setTimeout(()=>{alert('login first')} ,1000)

  return( 
      <Navigate to='/'/>
  )
}
    const handleLogout = async () =>{
        try{ await LogOut()

        }catch(error){
            console.log(error.message)
        }
    }
    

    
    const handlePremuim= ()=>{
      alert(" May be in the future")
    }
  return (
    <div className='logout'>
      <h3>Always Remember to Sign in with {user.email} and keep Your details safe </h3>
      <h4>Thanks for using this App</h4>
      <div className='account'>
            <img src={user.photoURL} className='google-pic' alt='profile pic'/>
            <h2>{user.displayName} </h2>
        </div>
      
      <button className='btn' onClick={handleLogout}> <b>Log Out</b> </button>
      <button className='btn' onClick={handlePremuim} ><h2>Try Premuim Today</h2> </button>
      
    </div>
  )
}
