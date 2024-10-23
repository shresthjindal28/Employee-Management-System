import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email, password)
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className="border-2 bg-transparent rounded-xl border-emerald-600 p-20">
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
                // console.log(e.target.value)
                setEmail(e.target.value)
            }}
            required 
            className=' outline-none bg-transparent border-2 border-emerald-700 rounded-full py-4 px-5 text-xl placeholder:text-gray-500 mt-4' type="email" placeholder='Enter Your Email' />
            <input
            value={password}
            onChange={(e)=>{
                // console.log(e.target.value)
                setPassword(e.target.value)
            }}
            required
             className=' outline-none bg-transparent border-2 border-emerald-700 rounded-full py-4 px-5 text-xl placeholder:text-gray-500 mt-4' type="password" placeholder='Enter your Password' />
            <button className='text-white outline-none border-none bg-emerald-600 rounded-full py-4 px-5 text-xl placeholder:text-white mt-6'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
