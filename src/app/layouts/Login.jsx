import React, { useState } from 'react'
import http from '../../core/services/interceptor'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [remember, setRemember] = useState()

    const handleSubmit = (e) => {
        console.log(remember)
        e.preventDefault();
        const dto = { phoneOrGmail: email, password: password, rememberMe: remember }
        http.post('/Sign/Login', dto)
            .then((res) => 
                { 
                    localStorage.setItem('token', res.token); 
                    console.log(res)
                }
            ).catch((err) => 
                {
                    console.log(err)
                }
            )
    }

    return (
        <form className='flex justify-around' onSubmit={handleSubmit}>
            <input placeholder='email' onChange={(e) => setEmail(e.target.value)} className='bg-amber-400 h-10 w-48' />
            <input placeholder='password' onChange={(e) => setPassword(e.target.value)} className='bg-amber-400 h-10 w-48' />
            <input type='checkbox' onChange={(e) => setRemember(e.target.checked)} className='bg-amber-400 h-12 w-12' />
            <button className=' bg-blue-900 rounded-2xl px-2.5 py-1'>تایید</button>
        </form>
    )
}

export default Login
