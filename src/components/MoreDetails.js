import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ApiUserContext } from './ApiContext'
import { FaArrowLeft} from "react-icons/fa" ;
import { SiGmail} from "react-icons/si" ;
import { AiFillPhone} from "react-icons/ai" ;
import { AiFillFacebook} from "react-icons/ai" ;
import { AiOutlineInstagram} from "react-icons/ai" ;






export default function MoreDetails() {
  const navigate= useNavigate()
  const { users }= ApiUserContext()
    const {userId}= useParams()
    const each = users.find((user)=> user.login.uuid === userId)
    console.log(each)
  return (
    <div className='show'>
     <div className='go-back'> < FaArrowLeft className='back' onClick={()=> navigate('/hub/frontend')}/>
   </div>
    <div className='up'>
      {/* <h1> hello : {userId} </h1> */}

      <div className='go-back'> < FaArrowLeft className='back' onClick={()=> navigate('/hub/frontend')}/>
   </div>
      <img src={each.picture.large} alt={each.name.first} className='param-img' />
      <h4 className='h4'>Hello i'm {each.name.first}  {each.name.last} </h4>
        <p className='p-tag'>I am a frontend developer currently residing at {each.location.country}. I'm  paassionate about frontend development, aesthetic designs, and open sourcing. Also a part-time Technical Writer. I have alot of projects that are built with <b>Vanilla Javascript, React, vue etc </b>
        checkout any of my project on my <b>Github  account @{each.name.first}{each.id.name} </b>. <br/>
        For collaboration or Paired programing you can always reach out in any of this platform: <br/>
        </p>
        <hr/>
        <ol>
          <li>Email : {each.email}  <SiGmail/> </li>
          <li>phone {each.phone} <AiFillPhone/>  </li>
          <li>FaceBook : {each.name.last}  <AiFillFacebook/></li>
          <li>Instagram : {each.name.last} <AiOutlineInstagram/> </li>
        </ol>
        


</div>

    </div>
  )
}
