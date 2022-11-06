import React, { useEffect } from 'react'
import pic2 from './pic2.svg'
import './home.css'
import { FcGlobe } from "react-icons/fc";
import { BiCodeAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import {  HiChevronDoubleDown} from "react-icons/hi";
import { UserContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';




export default function Home() {
  const Navigate=useNavigate()
  const { googleSignIn, user }=UserContext();
  const handleGoogleSignin = async () => {
try{ await googleSignIn()

}catch(error) {
  console.log(error)

}
  }
  useEffect(()=>{
    if (user !=null){
      Navigate('/hub')
    }

  },[user, Navigate])
  return (
    <div>
        <div className='dashboard'>
        <img src={pic2} alt='phone pic' className='pic'/>
        <div className='description' >
            <h1 className='dev' >Connect with developers around the world  <FcGlobe/> </h1>
            <h2>The Hub where like Minded People Meet
            <br/>
            <BiCodeAlt className='icon2' />

            </h2>
            {/* <br/> */}
            

            <h3 className='h3'> Get Started 
           < HiChevronDoubleDown />

               </h3>
           
        </div>
        </div>
        <div className='footer'>
        <div className='text' >
        <h3> You can find  collaborators from  any track:</h3>
        <h2>FrontEnd </h2>
        <h2>BackEnd</h2>
        <h2>Cloud (devOPs)</h2>
        <p>...with diverse programming languages</p>
        

    </div>


     <div className='google'>
     <h3> Sign in with Google <FcGoogle className='google-icon'/></h3> 
     <button onClick={handleGoogleSignin} className='btn'> <FcGoogle/> Sign In</button>



        
    {/* <h3>Welcome</h3>
    <img src='https://avatars.githubusercontent.com/u/109107291?v=4' className='google-pic' alt='maggie'/>

    <h2>UserName</h2> */}

    </div> 
        </div>
        
   
    </div>
  )
}
