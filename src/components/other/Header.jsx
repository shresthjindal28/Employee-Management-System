import React,{useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  //  const [username, setUsername] = useState('')
  //  if(!data){
  //   setUsername('Admin')
  //  }
  //  else{
  //   setUsername(data.firstName)
  //  }

   const logoutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
   }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-lg md:text-2xl font-medium'>HELLO <br /> <span className='text-3xl font-semibold'>username</span> </h1>
      <button onClick={logoutUser} className='bg-red-600 text-sm md:text-lg font-medium text-white px-4  md:px-5 py-1 md:py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
