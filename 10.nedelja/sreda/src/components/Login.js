import React from 'react'

const Login = () => {

    const handleLogin = () => {
        alert('login')
    }
    return (
        <div className='login'>
             <h2>Login form</h2>
             <form>
             <div>
                 Username<br/>
                 <input type='text' autoComplete='new-password' />
             </div>
             <div>
                 Password<br/>
                 <input type='password' autoComplete='new-password' />
             </div>
             <input type='button' value="LOGIN" onClick={() => handleLogin()}/>
            <input type='button' value='LOGOUT'/>
             </form>

        </div>
    )
}

export default Login
