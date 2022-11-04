// import userEvent from '@testing-library/user-event'
import React from 'react'
import { UserContext } from './AuthContext'
export default function IndexPage() {
    const {user} = UserContext()
  return (
    <div className='background'>
 <div className='index'>

<h1>Hello, </h1>
<h2>{user.displayName} </h2>
<h3>Click on your intrested track </h3>
</div>
    </div>
   
  )
}
