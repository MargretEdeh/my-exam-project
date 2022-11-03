import React from 'react'
import { UserContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

export default function Hub() {
    const {user}= UserContext()
    if(!user){
        alert(" You have to sign in first")
        return( 
            <Navigate to='/'/>
        )
    }
  return (
    <div>
      <h1>Welcome to the hub</h1>
    </div>
  )
}
