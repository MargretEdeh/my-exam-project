import React from 'react'
import { UserContext } from './AuthContext'
import { Navigate, NavLink , Outlet} from 'react-router-dom'
import './hub.css'

export default function Hub() {
    const {user}= UserContext()
    if(!user){
        alert(" You have to sign in first")
        return( 
            <Navigate to='/'/>
        )
    }
    
  return (
    <div className='hub-outlet'>
    <div className='hub'>
        <div>
        <ul className='list'>
            <li  ><NavLink to='/index' className='display'>Display</NavLink></li>
            <li className='li2'> <NavLink to='frontend' className='link' >FrontEnd</NavLink>
                <li className='li3'>React</li>
                <li className='li3'>Vanila JavaScript</li>
                <li className='li3'>Vue</li>
                <li className='li3'>TypeScript</li>
                <li className='li3'>Tailwind</li>
            </li>
            <li className='li2'> <NavLink to='backend' className='link'>BackEnd</NavLink> 
                <li className='li3'>Nodejs</li>
                <li className='li3'>Golang</li>
                <li className='li3'>JavaScript</li>
                <li className='li3'>Python</li>
            </li>
            <li className='li2'> <NavLink to='cloud' className='link'>
            Cloud 
            </NavLink>
               
                <li className='li3'>Linux os Expert</li>
                <li className='li3'>devOPs and containerization</li>
                <li className='li3'>Security and Recovery</li>
                <li className='li3'>web service and API</li>
            </li>

        </ul>
        <div className='account'>
            <img src={user.photoURL} className='google-pic' alt='profile pic'/>
            <h2>{user.displayName} </h2>
        </div>
        </div>
        {/* <h1>{user.displayName} </h1>
      <h1>Welcome to the hub</h1> */}

    </div>
    <Outlet/>

    </div>
  )
}
