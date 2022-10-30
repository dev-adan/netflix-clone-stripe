import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email'/>
            <input placeholder='Password' type='password'/>
            <button type='submit'>Sign In</button>
        </form>

        <h2>New to netflix Sign Up <Link to='/signup'>Here</Link></h2>

    </div>
  )
}

export default Login