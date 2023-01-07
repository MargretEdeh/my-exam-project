import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from './AuthContext'
export default function ProtectedRoutes({children}) {
    const {user}= UserContext()
    if(!user){
        return <Navigate to="/"/>
    }
  return children;
}
