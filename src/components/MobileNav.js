import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileNav({toggle}) {
  return (
    
    <div className='mobile'>
        <ul>
          <li><NavLink onClick={toggle} style={({isActive})=> isActive? {color: "white"} : {color: ""}} className='link2' to='/' end>Home</NavLink> </li>
          <li><NavLink onClick={toggle} style={({isActive})=> isActive? {color: "white"} : {color: ""}} className='link2' to='/hub'>Hub</NavLink> </li>
          <li><NavLink onClick={toggle} style={({isActive})=> isActive? {color: "white"} : {color: ""}} className='link2' to='/privacy'>Privacy</NavLink> </li>
          <li><NavLink onClick={toggle} style={({isActive})=> isActive? {color: "white"} : {color: ""}} className='link2' to='/account'>Account</NavLink> </li>
         </ul>
      
    </div>
  )
}
