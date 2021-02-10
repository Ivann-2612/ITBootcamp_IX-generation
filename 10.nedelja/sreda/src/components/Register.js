import React from 'react'
import {useState} from 'react'

const Register = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) => {
        e.prevent.default()
        //alert('submit')
        console.log(username,password,email);
    }

    return (
        <div className='register-home'>
            <h2>Register form</h2>
             <form onSubmit={() => handleSubmit()}>
               
                <label htmlFor='inputUsername'> Username</label>
                <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} /><br/>

                <label htmlFor='inputEmail'> Email address</label>
                <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /><br/>
                
                <label htmlFor='inputPassword'> Password</label>
                <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} /><br/><br/>

                <button type='submit'>Register</button>
             </form>
        </div>
    )
}

export default Register
