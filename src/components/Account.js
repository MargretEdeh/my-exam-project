// import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './AuthContext'

export default function Account() {
  const Navigate = useNavigate()
    const { LogOut, user } =UserContext()
    const handleLogout = async () =>{
        try{ await LogOut()

        }catch(error){
            console.log(error.message)
        }
    }
    useEffect(()=>{
      if(user === null){
  Navigate('/')
setTimeout(()=>{alert('login first')} ,1000)
      }
    }, [user ,Navigate])
  return (
    <div>
      <button className='btn' onClick={handleLogout}>Log Out </button>
    </div>
  )
}
