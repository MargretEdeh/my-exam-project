import React from 'react'
import { BiCodeAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import MobileNav from './MobileNav';
import './layout.css'



export default function Layout() {
  const [menu , setMenu] = useState(false)
  const MenuBar=  <FiMenu className='menu' onClick={()=> setMenu(!menu)} />  
  const Cancel =  <IoMdClose className='menu' onClick={()=> setMenu(!menu)} /> 
  return (
    <div className='layout' >
      <div className='logo'>
      <BiCodeAlt className='icon'/>
        <h1>Developers Arc</h1>
      </div>
      <nav>
         <ul className='large'>
          <li><NavLink className='link' to='/'>Home</NavLink> </li>
          <li><NavLink className='link' to='/hub'>Hub</NavLink> </li>
          <li><NavLink className='link' to='/privacy'>Privacy</NavLink> </li>
          <li><NavLink className='link' to='/login'>Login</NavLink> </li>
         </ul>
         {menu ? Cancel: MenuBar}
         {menu && 
         <MobileNav/>
         
         }
         </nav>
    </div>
  )
}
