import React from 'react';
import './SignIn.css'
import SignInHeaderLogo from '../Assets/Logo/amazon-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { IoAlert } from "react-icons/io5";
import {auth} from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = React.useState({
        email:"",
        password:""
    })
    const [submitted, setSubmitted] = React.useState(false)
    // const [valid, setValid] = React.useState(false)
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(false)

    const handleSignIn = (event) => {
        event.preventDefault();
        console.log("sign in handle")
        console.log(userDetails);
        setSubmitted(true);
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        .then(async(res) => {
            setSubmitButtonDisabled(false)
            navigate('/')
        })
        .catch(error => {
            setSubmitButtonDisabled(false)
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }

  return (
        <div className='login'>
            <Link to='/'>
                <img src={SignInHeaderLogo}
                    alt='header logo'  
                    className='login__logo' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5><label htmlFor="email">E-mail</label></h5>
                    <input 
                        type='email' 
                        placeholder='Your E-mail' 
                        id="email"
                        onChange = {event => setUserDetails(prev => ({...prev, email:event.target.value}))}
                    />
                    <br />
                        {submitted && !userDetails.email && <span className = "error"><IoAlert />Enter your email </span>}
                    <br/>

                    <h5><label htmlFor="password">Password</label></h5>
                    <input 
                        type='password' 
                        placeholder='Your Password' 
                        id="password"
                        onChange = {event => setUserDetails(prev => ({...prev, password:event.target.value}))}
                    />
                    <br />
                        {submitted && !userDetails.password && <span className = "error"> <IoAlert /> Enter password </span>}
                    <br/>

                    <button className='login__btn' type='submit' onClick={event => handleSignIn(event)} disabled={submitButtonDisabled}>Sign In</button>

                    <p>New Amazon user? <Link to = '/signup' className='amazon-color-link'>Sign up now.</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn
