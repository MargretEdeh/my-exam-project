import React from 'react'
import { NavLink } from 'react-router-dom';
import './frontend.css'
import { AiOutlinePicture} from "react-icons/ai";
import { FiSearch} from "react-icons/fi";
import { ApiUserContext } from './ApiContext';


export default function FrontEnd() {
  const {users, skip, page, setPage, PerPage,total, pages}= ApiUserContext()

 
  
  return (
    <div className='frontend'>
     <div className='top'>
     <div className='search'>
      <input type='text' className='input' placeholder='search' ></input>
      <FiSearch className='icon2'/>
      <AiOutlinePicture className='icon2'/>

     </div>
     <h2 className='top2'>FrontEnd Enthusiast </h2>
     
        </div>  
        <div className='users'>
          {users?.slice(skip, skip + PerPage).
          map((each)=>{
            const {name, picture, email, location, phone,login} = each;
            return(
              <div className='each-user'>
                <img src={picture.large} alt={name.first} className='friend'/>
                <div className='details' >
                <h2 className='name'>Eng. {name.first}  {name.last} </h2>
                <h4>{location.city}</h4>
                <h4 className='name'>{location.country} </h4>
                <NavLink className='more' to={login.uuid}>More Details </NavLink>
                 </div>
              </div>
            )
          }) }
          {<button className='btn1'disabled={page<=1} onClick={()=> setPage((prev)=> prev-1)
          }>Prev</button> }
          {Array.from({length: pages}, (_, index)=> index +1).map((num)=>{
            return(
            <button className='btn1' onClick={()=> setPage(num)}>{num} </button>
         ) })}
          {<button className='btn1' onClick={()=> setPage((prev)=>prev+ 1)}>Next</button>}

        </div>
     
    </div>
  )
}
