import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { signInWithRedirect } from 'firebase/auth';
import { auth,provider } from '../../firebase';

const SignUp = () => {

    const register = () => {
      signInWithRedirect(auth, provider);
    }


  return (
    <div className='signupScreen'>
      <button onClick={register}>Sign up with google</button>

      <Link to='/login'>Back</Link>
    </div>
  )
}

export default SignUp