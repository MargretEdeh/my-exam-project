import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MobileNav() {
  return (

    <div className='mobile'>
        <ul>
          <li><NavLink className='link2' to='/'>Home</NavLink> </li>
          <li><NavLink className='link2' to='/hub'>Hub</NavLink> </li>
          <li><NavLink className='link2' to='/privacy'>Privacy</NavLink> </li>
          <li><NavLink className='link2' to='/account'>Account</NavLink> </li>
         </ul>
      
    </div>
  )
}
